import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Mood extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> mood </Text>
        <View style={styles.moods}>
        
        </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
    container:{
        backgroundColor: '#ECE5C7',
        borderRadius:10,
        padding: 10,
        borderWidth: 1
    },
    heading:{
        fontSize:20,
        color:'black',
        fontWeight: 600
      },
    moods:{
        backgroundColor: '#CDC2AE',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1
    }
})

