import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainNavigation from './src/navigations/MainNavigation'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MainNavigation/>
    );
  }
}
