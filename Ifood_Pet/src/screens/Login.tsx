import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login() {
  const [resultado, setResultado] = useState('Digite seus dados')
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  const logar = () => {
    if(login == '' && senha == ''){
      setResultado('Digite login e senha')
      return
    }
    if (login == 'admin' && senha == '1234'){
      setResultado('Login com sucesso!')
    } 
    else{
      setResultado('Login ou senha invalidos')
    }
  }
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput onChangeText={setLogin} style={styles.input} /> 
      <Text>Senha</Text>
      <TextInput onChangeText={setLogin}
       secureTextEntry={true} style={styles.input} />
      <Button onPress={logar} title='Acessar' />
      <Text>{resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
//aqui estão sendo configuradas todos os estilos que serão usados no app, sempre chamado como uma variavel
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: "90%",
    borderColor: "#000",
    borderWidth: 1
  }
});