import * as React from 'react';
// import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Constants  from './src/Constants';

import { StatusBar } from 'expo-status-bar';
import MovieDetails from './src/Components/MovieDetails'

const Stack = createNativeStackNavigator();

function App() {
  return ( 
    <NavigationContainer>
    <StatusBar backgroundColor='#1c416b' />
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home}
        options={headerStyle} />
        <Stack.Screen
          name="movieDetails"
          component={MovieDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
       
    </NavigationContainer>
    
  );
}
const headerStyle={
  title: 'Movies' ,
  headerStyle: {backgroundColor: Constants.baseColor },
  headerTitleStyle: {color: Constants.secondaryColor},
  
}
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: "center"
//     }
// });
export default App;