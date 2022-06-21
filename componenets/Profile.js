import React ,{useState ,useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image ,TouchableOpacity ,Button ,TextInput } from 'react-native';
import NavigationFavourites from '../componenets/NavigationFavourites';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-magnus';
import {Picker} from '@react-native-community/picker';
import { AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js'
import {CountryCodePicker, CountryCodeKey} from './CountryCodes'
import {Avatar, Input} from 'react-native-elements';

const Profile = () => {
    
    const navigation = useNavigation();

      
  // state for controlled text
  const [text, setText] = useState('')
  // selected country code
  const [code, setCode] = useState('228') // default country code
  // conditional rendering of TextInput font size
  const [textSize, setTextSize] = useState(15)

  // condtion for placeholder to be a smaller font size than the text
  useEffect(() => {
    if (text.length > 0) setTextSize(18)
    else if (text.length === 0) setTextSize(15)
  }, [text])

  // function for controlled text
  const onTextChange = (number) => {
    const num = parsePhoneNumberFromString(number, CountryCodeKey[code][0])
    let reg = /^[0-9]/
    if (!!num && text.length > number.length && !reg.test(text[text.length - 1])){
      let phone = num.nationalNumber.split('')
      phone.pop()
      phone = phone.join('')
      setText(phone)
    } else {
      setText(new AsYouType(CountryCodeKey[code][0]).input(number))
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contained}>
    <View style={{ justifyContent:'flex-start' ,marginTop:40,width:60 , }}>
     <TouchableOpacity
     onPress={() => navigation.goBack()}>
         <Icon
         size={40}
          name="closecircleo" 
          type="ionicon"
          color="black"
         iconStyle={{fontSize: 80 , size:80}}
         />
     </TouchableOpacity>
     </View>
     <View style={{marginTop:20 ,padding:20}}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('MapScreen')}
        >
          <View>
              <Avatar
                      rounded
                      size={'medium'}
                      icon={{
                        name: 'user-circle',
                        color: 'white',
                        type: 'font-awesome',
                      }}
                      source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jackie_Chan_July_2016.jpg/220px-Jackie_Chan_July_2016.jpg',
                      }}
                      overlayContainerStyle={{backgroundColor: 'black'}}
                    />
                  </View>
        </TouchableOpacity>
        </View>
        <View style={styles.app}>
      <View style={styles.number}>
        <Picker style={styles.picker} itemStyle={{fontSize: 20, height: 105 ,width:80 }} selectedValue={code} onValueChange={((itemVal) => setCode(itemVal))}>
          {CountryCodePicker.map(cc => <Picker.Item key={cc[2]} label={`${cc[0]} +${cc[1]}`} value={`${cc[2]}`} />)}
        </Picker>
        <TextInput style={{marginLeft: 20, width: 170, fontSize: textSize,}} onChangeText={num => onTextChange(num)} value={text} keyboardType='phone-pad' placeholder='Enter Phone Number' textAlign='left' />
      </View> 
    </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

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
  app: {
    height: '100%',
    width: '100%',
  },
  number: {
    flexDirection: "row",
    justifyContent: 'flex-start', 
    alignItems: 'center',
    width: '100%', 
    height: 95,
  },
  picker: {
    width: 140, 
    marginLeft: 10,
  },
});
