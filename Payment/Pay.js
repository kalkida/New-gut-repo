import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

const PayScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contained}>
        <Text style={styles.text}>Pay</Text>
      </View>
    </SafeAreaView>
  );
};

export default PayScreen;

const styles = StyleSheet.create({
  container:{
      backgroundColor:'#fff',
      flex:1
  },
  contained:{
      flex:1
  },
  text: {
    color: 'blue',
    alignContent:'center'
  },
});