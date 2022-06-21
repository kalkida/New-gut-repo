import React ,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,Dimensions} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../componenets/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../componenets/NavigateCard';
import RideOptionsCard from '../componenets/Ride-options';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {Drawer, Toggle} from 'react-native-magnus';
import {Avatar, Input} from 'react-native-elements';

const {width, height} = Dimensions.get('window');
const zoomIn = {
  0: {
    scale: 0,
  },
  0.5: {
    scale: 0.5,
  },
  1: {
    scale: 1,
  },
};
const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  const [on, toggle] = useState(false);
  const GoProfile = () => {
    navigation.navigate('Profile');
    if (drawerRef.current) {
      drawerRef.current.close();
    }
  };
  const drawerRef = React.createRef();

  return (
    <View>
      <TouchableOpacity
        // onPress={() => navigation.navigate('HomeScreen')}
        onPress={() => {
          if (drawerRef.current) {
            drawerRef.current.open();
          }
        }}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name='menu' />
      </TouchableOpacity>

      <Drawer ref={drawerRef}>
              <View
                style={{
                  paddingTop: 30,
                  paddingLeft: 20,
                  flex: 1,
                  backgroundColor: '#FFF',
                }}>
                <View style={{flex: 1}}>
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

                  <View
                    style={{
                      borderBottomWidth: 5,
                      paddingBottom: 10,
                      marginTop: 10,
                      borderBottomColor: 'black',
                    }}>
                    <Text
                      style={{
                        color: '#333',
                        fontSize: 20,
                        textTransform: 'capitalize',
                        padding: 2,
                        fontWeight: 'bold',
                      }}>
                      jackie Chan
                    </Text>
                    <Text
                      style={{
                        color: '#333',
                        fontSize: 14,
                        padding: 2,
                      }}>
                      +723118980685
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => GoProfile()}>
                      <Text style={styles.settings}>
                        <Icon
                          name="settings-outline"
                          type="ionicon"
                          color="black"
                          iconStyle={{fontSize: 17}}
                        />{' '}
                        Settings
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles.settings}>
                      <Icon
                        name="download-outline"
                        type="ionicon"
                        color="black"
                        iconStyle={{fontSize: 17}}
                      />{' '}
                      Saved Place
                    </Text>
                    <Text style={styles.settings}>
                      <Icon
                        name="notifications-outline"
                        type="ionicon"
                        color="black"
                        iconStyle={{fontSize: 17}}
                      />{' '}
                      My Orders
                    </Text>
                    <Text style={styles.settings}>
                      <Icon
                        name="security"
                        type="MaterialIcons"
                        color="black"
                        iconStyle={{fontSize: 17}}
                      />{' '}
                      Get In Touch
                    </Text>
                  </View>
                </View>
                <View style={{flex: 1, padding: 10, marginTop: height * 0.1}}>
                  <View style={{paddingVertical: 30, flexDirection: 'row'}}>
                    <Text style={{paddingHorizontal: 5, color: '#333'}}>
                      Theme
                    </Text>
                    <Toggle
                      on={on}
                      onPress={() => toggle(!on)}
                      bg="gray200"
                      circleBg="blue500"
                      activeBg="blue700"
                      h={20}
                      w={40}
                    />
                  </View>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: '#E3F0FF',
                        fontSize: 14,
                        backgroundColor: '#CC0044',
                        borderRadius: 5,
                        paddingHorizontal: 10,
                        width: width * 0.2,
                        paddingVertical: 2,
                      }}>
                      Logout
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Drawer>

      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  setting: {
    width: 100,
    height: 100,
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 1,
  },
  settings: {
    borderBottomWidth: 0,
    borderColor: 'black',
    paddingVertical: 5,
    fontSize: 17,
    color: '#333',
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 10,
    borderRadius: 20,
    flexDirection: 'row',
  },
});

