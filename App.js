import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'My Text, it is nice.', count:1 };
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  onPress2 = () => {
    this.setState({
      text: ''
    })
  }
  onPress3 = () => {
    this.setState({
      count: this.state.count-1
    })
  }

  render() {
    return (
      <View style={styles.container1}>
        <View style={styles.container1}>
          <Text>Subview 1</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 240, padding:10}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Text style={styles.counter}>{this.state.count} times</Text>
        </View>
        <View style={styles.container2}>
          <Text>Subview 2</Text>
          <TouchableHighlight onPress={this.onPress}>
            <Text style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 240, padding:10}}>Count Up</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onPress2}>
            <Text style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 240, padding:10}}>Clear Text</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onPress3}>
            <Text style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 240, padding:10}}>Count Down</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    width:'100%',
    backgroundColor: '#bada55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField:{
    width: 300
  },
  button: {
    width:240,
    height:40,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  counter: {
    fontSize:40
  },
});
