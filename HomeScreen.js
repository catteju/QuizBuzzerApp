import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../Database';

export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      redStatus : true,
      yellowStatus : true,
      greenStatus : true,
      blueStatus : true
    }
  }
  componentDidMount(){
    var readRef = db.ref('teams/');
    readRef.on("value", (data) => {
      var teamDetails = data.val();
      this.setState({
        redStatus : teamDetails.red.enable,
        yellowStatus : teamDetails.yellow.enable,
        greenStatus : teamDetails.green.enable,
        blueStatus : teamDetails.blue.enable
      })
    })
  }

  goToBuzzerScreen = (buzzercolor) => {
    var writeRef = db.ref('teams/'+buzzercolor);
    writeRef.update({enable:  false})
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
        disabled = {!this.state.redStatus}
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.goToBuzzerScreen('red');
          }}>
          <Text style={styles.buttonText}>Team 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
        disabled = {!this.state.greenStatus}
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
            this.goToBuzzerScreen('green');
          }}>
          <Text style={styles.buttonText}>Team 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
        disabled = {!this.state.blueStatus}
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToBuzzerScreen('blue');
          }}>
          <Text style={styles.buttonText}>Team 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
        disabled = {!this.state.yellowStatus}
          style={[styles.button, { backgroundColor: 'yellow' }]}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.buttonText}>Team 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
