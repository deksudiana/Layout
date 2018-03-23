import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box1}>
        <Text style={styles.textHeader}>Pendidikan Teknik Informatika</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.textMain}>Slider</Text>
      </View>
      <View style={styles.box3}>
        <View style={styles.button}><Text>1</Text></View>
        <View style={styles.button}><Text>2</Text></View>
        <View style={styles.button}><Text>3</Text></View>
        <View style={styles.button}><Text>4</Text></View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}><Text>5</Text></View>
        <View style={styles.button}><Text>6</Text></View>
        <View style={styles.button}><Text>7</Text></View>
        <View style={styles.button}><Text>8</Text></View>
      </View>
      <View style={styles.box5}>
        <Text style={styles.texFooter}>#JaenKuliahdiPTI</Text>
      </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 30
  },
  textMain: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  texFooter: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 20
  },
  containerMain: {
    backgroundColor: 'lightblue',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: 'blue',
  },
  box2: {
    flex: 2,
    backgroundColor: '#2196f3',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    backgroundColor: '#90caf9',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: '#90caf9',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    flex: 1,
    backgroundColor: 'blue',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
