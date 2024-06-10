import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'blueviolet',
      },
      headerTintColor: 'white',
      contentStyle:{
        backgroundColor: 'cyan',
      }
    }}
    >
      <Stack.Screen name="Login" component={LoginScreen} 
      options={{
        headerTitle: 'User Login'
      }}
      />
      <Stack.Screen name="Signup" component={SignupScreen} 
      options={{
        headerTitle: 'User Sign Up'
      }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NormalStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
