import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';


var globalStyles = require('../globals/Styles')


export default class Home extends Component {
  goPage(pageName) {
    const { navigate } = this.props.navigation
    navigate(pageName)

  }

  render() {
    return (
      <View style={globalStyles.container}>
        <TouchableOpacity style={globalStyles.buttonContainer} onPress={()=> this.goPage('Screen1')}>
        <Text style={globalStyles.buttonText}> Screen1 </Text>

        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.buttonContainer} onPress={()=> this.goPage('Screen2')}>
        <Text style={globalStyles.buttonText}> Screen2 </Text>

        </TouchableOpacity>
      </View>
    );
  }
}




