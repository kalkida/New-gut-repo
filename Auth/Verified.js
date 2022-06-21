import React from 'react'
import {Text ,View ,StyleSheet ,ScrollView,Image ,TouchableOpacity} from 'react-native'
import Account from './Account';
import Inputs from './Input';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const Verified =({fullname , }) =>{

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const registerWithride = (fullname, email, phone) =>{
        email = email.toLowerCase()
        dispatch(primaryAction.register(fullname ,email, phone))
        .then(() =>{
          setModalVisible(false)
          setWelcome(true)
        })
        .catch(error => console.log(error))
      }
    return(
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={styles.container}>
        <Image
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
          resizeMode="center"
          style={styles.image}
          />
         <View style={{marginTop:20}}/>
         <Inputs name="6 digits numbers" icon ="inbox" />
         <View style={{width:'90%'}}>
           </View>
           <TouchableOpacity style={[styles.containerbutton ,{backgroundColor:'#00d084'}]}  onPress={() => registerWithride(fullname , email, phone)}>
            <Text style={styles.submittext}>Verify</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    image:{
      width:150,
      height:200,
      marginVertical:10
    },
    textTitle:{
      fontSize:40,
      fontFamily:'Foundation',
      marginVertical:80
    },
    textBody:{
      fontSize:16,
      fontFamily:'Foundation',
    },
    containerbutton:{
      width:'90%',
      height:50,
      borderColor:'#00d084',
      borderRadius:10,
      marginVertical:10,
      borderWidth:0
  },
  submittext:{
      fontSize:22,
      fontWeight:'bold',
      color:'white',
      alignSelf:'center',
      marginVertical:10
  }
  });


export default Verified;
