import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image ,TouchableOpacity } from 'react-native';
import NavigationFavourites from '../componenets/NavigationFavourites';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
const HomeScreen = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contained}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
        <TouchableOpacity 
        onPress={() => navigation.navigate('MapScreen')}
        style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
        >
        <Text style={tw`text-white text-center`}>Map</Text>
        </TouchableOpacity>
        <NavigationFavourites/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
  },
});
