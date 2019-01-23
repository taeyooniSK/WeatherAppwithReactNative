import React, { Component }from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import Weather from './components/Weather';

const API_KEY = 'b566d43d8ed66cef9b8baf0bb788978e';

export default class App extends Component {
  state = {
    isLoaded : false,
    error : null,
    temperature: null,
    name: null
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition( 
      position => {
      this._getWeather(position.coords.latitude, position.coords.longitude)
  
    },
     error => {
        this.setState({
          error : error
        })
      }
    )    
  }

  _getWeather(lat, long){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
       this.setState({
        temperature : json.main.temp,
        name: json.weather[0].main,
        isLoaded : true
      })
    })
  }
  render() {
    const { isLoaded, error, temperature, name} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        {isLoaded ? (
          <Weather weathername={name} temp={temperature}/>
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the angelic weather</Text> 
            { error ? <Text style={styles.errorText}>{error}</Text> : null }
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#fff'
  },
  errorText:{
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  },
  loading:{
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent:'flex-end',
    paddingLeft:25
  },
  loadingText: {
    fontSize: 38,
    marginBottom:40,
  }
})