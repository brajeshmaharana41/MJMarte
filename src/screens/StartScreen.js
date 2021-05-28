import React from 'react'
import Background from '../components/Background'
import Title from '../components/Title'
import Button from '../components/Button'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import { StatusBar } from 'react-native'


export default function StartScreen({ navigation }) {
  return (
  <>
  <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <Background>
      <Title>Login Template</Title>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('otp')}
      >
        Login OTP
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  </>  
  )
}
