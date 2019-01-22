import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';


export default class Weather extends Component {
    render(){
        return (
        <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.container}>
          <View style={styles.upper}>
            <Text>Icon here!</Text>
            <Text style={styles.temperature}>35ºC</Text>
          </View>
          <View style={styles.lower}>
            <Text style={styles.title}>Raining like a Mother Angel</Text>
            <Text style={styles.subtitle}>Look outside!</Text>
          </View>
        </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper:{
      flex:1,
      alignItems: "center",
      justifyContent:"center"
    },
    temperature:{
      fontSize: 38,
      backgroundColor: "transparent",
      color: "#fff",
      marginTop: 10
    },
    lower:{
      flex:1,
      alignItems: "flex-start",
      justifyContent:"flex-end",
      paddingLeft: 25
    },
    title:{
      fontSize: 38,
      color: "#fff",
      marginBottom: 10,
      fontWeight: "400"
    },
    subtitle:{
      fontSize: 24,
      color:"#fff",
      marginBottom: 24
    }
})
