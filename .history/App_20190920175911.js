/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  showTask(){
    
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40, marginTop: 40, borderWidth: 1, borderRadius: 4, padding: 4}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button onClick={showTask}></button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
});
