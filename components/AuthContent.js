import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthForm from './AuthForm'
import ButtonWhite from './ButtonWhite'
import { useNavigation } from '@react-navigation/native'

export default function AuthContent( {isLogin} ) {

  const navigation = useNavigation();
  
  const [credentialsInValid, setCredentialsInValid] = useState({
    email:false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function submitHandler(credentials){
    //console.log(credentials);
    let { confirmEmail, confirmPassword, email, password} = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const  emailsAreEqual = email === confirmEmail;
    const passwordAreEqual = password === confirmPassword;

    if(!emailIsValid || !passwordIsValid || (!isLogin && (!emailsAreEqual || !passwordAreEqual))){
      Alert.alert('Hops!','Please check your information!!');

      setCredentialsInValid({
        email:!emailIsValid,
        confirmEmail:!emailIsValid  || !emailsAreEqual,
        password:!passwordIsValid,
        confirmPassword:!passwordIsValid || !passwordAreEqual,
      });
      return;
    }
  }


  function switchScreen(){
    if (isLogin) {
      navigation.navigate('Signup');
    }
    else{
      navigation.navigate('Login');
    }
  }

  return (
    <View style={styles.container} >
      <AuthForm 
      credentialsInValid={credentialsInValid} 
      isLogin={isLogin} 
      onsubmit={submitHandler} 
      />
      <View>
        <ButtonWhite onPress={switchScreen}>
            {isLogin ? 'Create a new user' : 'Sign In'}
        </ButtonWhite>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blueviolet',
        marginTop: 50,
        marginHorizontal: 30,
        padding : 15,
        borderRadius: 25,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 1 , height:2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
})