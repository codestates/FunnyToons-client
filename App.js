import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Switch, Route, Redirect, withRouter, BrowserRouter } from "react-router-dom";
import { StyleSheet, Text, View } from 'react-native';

import RestaurantInfo from "./pages/RestaurantInfo";
import Review from "./pages/Review";

export default function App() {
  
  

  return (
    
    <View style={styles.container}>
      {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link> */}
      <View>MSG</View>
      <BrowserRouter>
        <Switch>
          <Route
            path='/review'
            render={() => (
              <RestaurantInfo />
            )}
          />
          <Route
            exact
            path='/comment'
            render={() => (
            <Review />
            )}
          />
        </Switch>
        </BrowserRouter>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
      <View>만든 사람들</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
