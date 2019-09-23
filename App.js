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
    this.state = {text: '', taskList: []};
  }

  addTask(){
    console.log("sdgvsdhgfvshdgf");
    this.setState({taskList: [...this.state.taskList, this.state.text], text: ''});
  }
  removeTask(i){
    arr=this.state.taskList;
    task=arr[i];
    arr=arr.filter(item => item !== task);
    this.setState({taskList: arr});
  }

  render() {
    return (
      <View style={{padding: 10, backgroundColor: '#a194ea', flex: 1}}>
        <TextInput
          style={{height: 40, marginTop: 40, borderWidth: 1, borderRadius: 4, padding: 4, backgroundColor: '#ffff'}}
          placeholder="Type the task!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          title="Add"
          style={styles.button}
          onPress={() => { this.addTask() }}
        />
        {this.state.taskList.map((task,i) => 
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Text key={i}>{i + " " + task + "."}</Text>
          <Button
           title="X"
           onPress={() => {this.removeTask(i)}}>
           </Button>
        </View>
        )}
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
