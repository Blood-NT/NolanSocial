import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../home/home';
import ForgotPassScreen from '../home/forgotPass';
const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={ForgotPassScreen} />
    </Tab.Navigator>
  );
}
export default BottomNav;