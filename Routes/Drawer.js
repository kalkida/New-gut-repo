import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Animatable from 'react-native-animatable';

import Profile from '../components/Profile';
import Setting from '../components/Setting';

const Drawer = createDrawerNavigator();

export default function DrowerK() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Saved Place" component={Saved} />
      <Drawer.Screen name="Get In touch" component={GetIn} />
    </Drawer.Navigator>
  );
}