import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Calendar } from 'react-native-calendars'

export default function CalendarComponent({selected}:{selected:String}) {
    
    
    const menstrualArray: string[] = ['2025-03-22', '2025-03-23','2025-03-24','2025-03-25','2025-04-22', '2025-04-23','2025-04-24','2025-04-25'];
    const menstrualDates: { [key: string]: { selected: boolean; color: string; startingDay?: boolean; endingDay?: boolean } } = {};

    menstrualArray.forEach((date, i) => {
      menstrualDates[date] = {
      selected: true,
      color: "white",
      ...(i === 0 && { startingDay: true }),
      ...(i === menstrualArray.length - 1 && { endingDay: true }),
    };
    });

    const conceptionArray: string[] = ['2025-03-10', '2025-03-11','2025-03-12','2025-03-13','2025-04-10', '2025-04-11','2025-04-12','2025-04-13'];
    const conceptionDates: { [key: string]: { selected: boolean; color: string; startingDay?: boolean; endingDay?: boolean } } = {};

    conceptionArray.forEach((date, i) => {
      conceptionDates[date] = {
      selected: true,
      color: "white",
      ...(i === 0 && { startingDay: true }),
      ...(i === conceptionArray.length - 1 && { endingDay: true }),
    };
    });


  return (
    <View>
      
        <Calendar
        // onDayPress={(day: any) => {
        //   setSelected((prevSelected) => [...new Set([...prevSelected, day.dateString])]);
        //     }}
            
            markingType={'period'}
            markedDates={selected==='menstrual'?menstrualDates:conceptionDates}

            style={{
             borderWidth: 2,
            borderRadius: 10,
            borderColor: 'gray',
            //backgroundColor: "#CDC2AE",
            //color: "#CDC2AE"
            }}
        

        theme={{
          backgroundColor: '#CDC2AE',
          calendarBackground: '#CDC2AE',
         textSectionTitleColor: 'white',
          //textSectionTitleDisabledColor: '#d9e1e8',
          //selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: 'black',
           // todayTextColor: 'red',
           //dayTextColor: 'white',
          //textDisabledColor: '#d9e1e8',
          // dotColor: '#00adf5',
          // selectedDotColor: '#ffffff',
          // arrowColor: 'orange',
          // disabledArrowColor: '#d9e1e8',
          // monthTextColor: 'blue',
          // indicatorColor: 'blue',
          // textDayFontFamily: 'monospace',
          // textMonthFontFamily: 'monospace',
          // textDayHeaderFontFamily: 'monospace',
          // textDayFontWeight: '300',
          // textMonthFontWeight: 'bold',
          // textDayHeaderFontWeight: '300',
          // textDayFontSize: 16,
          // textMonthFontSize: 16,
          // textDayHeaderFontSize: 16
        }}

      />
      
    </View>
  )
}







