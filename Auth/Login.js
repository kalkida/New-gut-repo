import React,{useState} from 'react'
import {Text ,View ,StyleSheet ,ScrollView,Image ,TouchableOpacity ,Modal} from 'react-native'
import Account from './Account';
import Inputs from './Input';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { register } from '../redux/Actions/auth';
const Login =() =>{

    const navigation = useNavigation();
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
  
    const [welcome, setWelcome] = useState(false)
    const dispatch = useDispatch()
    const registerWithride = (fullname, email, phone) =>{
        dispatch(register(fullname ,email, phone))
        .then(() =>{
          console.log("emails")
          setModalVisible(false)
          setWelcome(true)
        })
        .catch(error => console.log("error is not"))
      }
    return(
    <View>
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={styles.container}>
          <Image
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
          resizeMode="center"
          style={styles.image}
          />
          <Text style={styles.textTitle}>Welcome</Text>
         <View style={{marginTop:20}}/>
         <Inputs onLoginChange={fullname => setFullname(fullname)} name="Full Name" icon ="user"/>
         <Inputs onLoginChange={email => setEmail(email)} name="Email" icon ="envelope-o" />
         <Inputs onLoginChange={phone => setPhone(phone)} name="Phone" icon ="phone" />
         <View style={{width:'90%'}}>
           </View>
           <TouchableOpacity style={[styles.containerbutton ,{backgroundColor:'#00d084'}]}  onPress={() => setModalVisible(true)}>
            <Text style={styles.submittext}>Log In</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
<Modal
style={{flex: 1}}
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
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
           <TouchableOpacity style={[styles.containerbutton ,{backgroundColor:'#00d084'}]}  onPress={() => navigation.navigate('MapScreen')}>
            <Text style={styles.submittext}>Verify</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
  </Modal>
  </View>
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
      width:100,
      height:150,
      marginVertical:30
    },
    textTitle:{
      fontSize:40,
      marginVertical:30
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


export default Login;
