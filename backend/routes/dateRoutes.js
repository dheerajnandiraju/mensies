const express = require('express');
const app = express();
const { db } = require('../config/firebase');
const { collection, getDocs, addDoc, deleteDoc, query, where } = require('firebase/firestore');

// Enable JSON parsing middleware
app.use(express.json());

// Get all dates
app.get('/api/dates', async (req, res) => {
    try {
        const datesRef = collection(db, 'dates');
        const snapshot = await getDocs(datesRef);
        
        const dates = {
            menstrualDates: [],
            conceptionDates: []
        };

        snapshot.forEach(doc => {
            const data = doc.data();
            if (data.type === 'menstrual') {
                dates.menstrualDates.push(data.date);
            } else {
                dates.conceptionDates.push(data.date);
            }
        });

        res.json(dates);
    } catch (error) {
        console.error('Error getting dates:', error);
        res.status(500).json({ error: 'Failed to fetch dates' });
    }
});

// Add new date
app.post('/api/dates', async (req, res) => {
    try {
        const { date, type } = req.body;
        console.log('Received request to add date:', date, 'type:', type);
        
        // Check if date already exists
        const datesRef = collection(db, 'dates');
        const q = query(datesRef, where('date', '==', date), where('type', '==', type));
        const snapshot = await getDocs(q);
        
        if (!snapshot.empty) {
            console.log('Date already exists');
            return res.status(400).json({ error: 'Date already exists' });
        }

        // Add new date
        const docRef = await addDoc(datesRef, {
            date,
            type,
            createdAt: new Date().toISOString()
        });
        console.log('Date added successfully, ID:', docRef.id);

        res.status(201).json({ message: 'Date added successfully', id: docRef.id });
    } catch (error) {
        console.error('Error adding date:', error);
        res.status(500).json({ error: 'Failed to add date' });
    }
});

// Delete date
app.delete('/api/dates', async (req, res) => {
    try {
        const { date, type } = req.body;
        
        const datesRef = collection(db, 'dates');
        const q = query(datesRef, where('date', '==', date), where('type', '==', type));
        const snapshot = await getDocs(q);
        
        if (snapshot.empty) {
            return res.status(404).json({ error: 'Date not found' });
        }

        // Delete the document
        await deleteDoc(snapshot.docs[0].ref);
        
        res.json({ message: 'Date deleted successfully' });
    } catch (error) {
        console.error('Error deleting date:', error);
        res.status(500).json({ error: 'Failed to delete date' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});