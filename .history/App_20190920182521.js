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

export default class createTaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  addTask(){
    return (
      <Text>{his.state.text}</Text>
    );
  }

  render() {
    return (
      <View style={{padding: 10, backgroundColor: '#f194ff',
      }}>
        <TextInput
          style={{height: 40, marginTop: 40, borderWidth: 1, borderRadius: 4, padding: 4}}
          placeholder="Type the task!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          title="Add"
          style={styles.button}
          onPress={() => { this.addTask() }}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    color: '#f194ff',
    borderColor: '#f194ff',
    borderWidth: 1,
    borderRadius: 2
  }
});
