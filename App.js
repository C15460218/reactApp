/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Button, Alert } from 'react-native';

const styles = {
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
  logoImage: {
    width:  240,
    height: 240,
    resizeMode: 'cover'
  },
  ctaButton: {
    backgroundColor: 'dodgerblue',
    color: 'white',
    borderRadius: 100
  },
  bckButton: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 100
  }


}

const Inicio = (prop) => {
  return(
    <View style = {{flex: 1}}>
        <View style = {{flexGrow: 1,alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.mainTitle}>Instituto Tecnológico de Colima</Text>
        <Image style={styles.logoImage} source= {require('./image/logo-itcolima.png')}/>
        <Text>Ingeniería Informática</Text>
        <Text style = {{color: 'darkcyan'}}>C15460218</Text>
        <Text style = {{color: 'darkcyan'}}>Adrian Manuel Robles Jiménez</Text>
        <Text>MARZO - JUNIO 2021</Text>
      </View>
      <Button style={styles.ctaButton} title="Entrar" onPress={()=>prop.navigation.navigate('segunda')}/>
    </View>
  );
};

const SegundaPantalla = (prop) => {
  return(
    <View style = {{flex: 1}}>
      <Text>Segunda Pantalla!</Text>
      <Button style={styles.bckButton} title="Atras" onPress={()=>prop.navigation.goBack()}/>
      <Button style={styles.bckButton} title="Ir a inicio" onPress={()=>prop.navigation.navigate('inicio')}/>
      <Button style={styles.bckButton} title="Ir a segunda" onPress={()=>prop.navigation.navigate('segunda')}/>
      <Button style={styles.bckButton} title="Ir a segunda (forzado)" onPress={()=>prop.navigation.push('segunda')}/>
      <Button style={styles.bckButton} title="Regresar al principio" onPress={()=>prop.navigation.popToTop()}/>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="inicio" component ={Inicio} options={{title: "Página Principal"}} />
        <Stack.Screen name="segunda" component ={SegundaPantalla} options={{title: "Página Secundaria"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
