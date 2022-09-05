import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/HomeScreen';
import Inbox from './screens/Inbox';
import Login from './screens/LoginScreen'

import Ionicons from 'react-native-vector-icons/Ionicons';

import OneTask from './screens/OneTask';
import MyTasks from './screens/MyTasks';
import Settings from './screens/Settings'
import Colors from './constants/Colors';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const TasksNavigator=()=>{
    const Stack1 = createNativeStackNavigator();

    return(
          <Stack1.Navigator>
            <Stack1.Screen name="MyTasks" component={MyTasks}  options={{ title: 'My Tasks', headerStyle: {backgroundColor: Colors.primaryColor, },headerTintColor: '#fff', }}  />
          <Stack1.Screen name="OneTask" component={OneTask}  options={{ title: 'Task', headerStyle: {backgroundColor: Colors.primaryColor, },headerTintColor: '#fff', }}  />
        </Stack1.Navigator>
    )
  }
  const HomeNavigator=()=>{
    const Stack2 = createNativeStackNavigator();

    return(
      <Stack2.Navigator>
        <Stack2.Screen name="Home" component={Home}  options={{ title: 'Propal', headerStyle: {backgroundColor: Colors.primaryColor, },headerTintColor: '#fff', }}  />
      </Stack2.Navigator>
    )
  }
  return (
      <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home1') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }else if (route.name === 'Tasks') {
              iconName = focused ? 'list-sharp' : 'list-outline';
            }
            else if (route.name === 'Inbox') {
              iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home1" component={HomeNavigator} options={{headerShown: false}} />
        <Tab.Screen name="Tasks" component={TasksNavigator} options={{headerShown: false}} />
        <Tab.Screen name="Inbox" component={Inbox} options={{ title: 'Inbox', headerStyle: {backgroundColor: Colors.primaryColor, },headerTintColor: '#fff', }}  />
        <Tab.Screen name="Settings" component={Settings} options={{ title: 'Settings', headerStyle: {backgroundColor: Colors.primaryColor, },headerTintColor: '#fff', }}  />
        <Tab.Screen name="Login" component={Login} options={{headerShown: false}} />


      </Tab.Navigator>
    </NavigationContainer>
  );
}


