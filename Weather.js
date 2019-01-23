import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo';
// import { Feather } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

export default Weather;

const weatherCases = {
  Rain : {
    colors: ['#00C6FB', "#005BEA"],
    title: 'Raining like 😱',
    subtitle: 'Look outside ☔',
    icon: 'weather-pouring'
  },
  Haze :{
    colors: ['#FEF253', "#FF7300"],
    title: 'Haze as ⛅',
    subtitle: 'Smile and be energetic 🙏',
    icon: 'weather-fog'
  },
  Clear : {
    colors: ['#FEF253', "#FF7300"],
    title: 'Sunny as 🌻',
    subtitle: 'Go out and be productive 💪',
    icon: 'weather-sunny'
  },
  Thunderstorm : {
    colors: ['#00ECBC', "#007ADF"],
    title: 'Thunderstorm like roaring of 🐯',
    subtitle: 'Stay inside drinking ☕',
    icon: 'weather-lightning'
  },
  Clouds : {
    colors: ['#D7D2CC', "#304352"],
    title: 'Cloudy as ⛅',
    subtitle: 'Smile and be energetic 🙏',
    icon: 'weather-cloudy'
  },
  Snow : {
    colors: ['#7DE2FC', "#B9B6E5"],
    title: 'Cold as 🐍\'s skin',
    subtitle: 'Do you want to make a ⛄?',
    icon: 'weather-snowy'
  },
  Drizzle : {
    colors: ['#89F7FE', "#66A6FF"],
    title: 'Drizzle like 👶\'s tears',
    subtitle: 'Such a gloomy day',
    icon: 'weather-rainy'
  },
  Mist : {
    colors: ['#D7D2CC', "#304352"],
    title: 'Humid as 🛁\'s steam',
    subtitle: 'Wipe your glasses',
    icon: 'weather-fog'
  },
}


function Weather({temp, weathername}){
  return (
      <LinearGradient colors={weatherCases[weathername].colors} style={styles.container}>
          <View style={styles.upper}>
            <MaterialCommunityIcons color={'white'} size={144} name={weatherCases[weathername].icon}/>
            <Text style={styles.temperature}>{temp}ºC</Text>
          </View>
          <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weathername].title}</Text>
            <Text style={styles.subtitle}>{weatherCases[weathername].subtitle}</Text>
          </View>
        </LinearGradient>
  );
}


Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weathername: PropTypes.string.isRequired
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper:{
      flex:1,
      alignItems: 'center',
      justifyContent:'center'
    },
    temperature:{
      fontSize: 45,
      backgroundColor: 'transparent',
      color: '#fff',
      marginTop: 10
    },
    lower:{
      flex:1,
      alignItems: 'flex-start',
      justifyContent:'flex-end',
      paddingLeft: 25
    },
    title:{
      fontSize: 38,
      color: '#fff',
      marginBottom: 10,
      fontWeight: '400'
    },
    subtitle:{
      fontSize: 24,
      color:'#fff',
      marginBottom: 24
    }
})