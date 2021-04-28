/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
    backgroundColor: 'dodgerblue ',
    color: 'white',
    borderRadius: 100
  }
}

const App = () => {
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
      <Button style={styles.ctaButton} title="Entrar" onPress={()=>Alert.alert("ESP: Aplicacines Multiplataforma")}/>
    </View>
  );
};

export default App;
