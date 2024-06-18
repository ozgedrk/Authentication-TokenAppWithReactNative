import { StyleSheet, Text, View,Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import AuthContent from '../components/AuthContent';
import { login } from '../util/auth';
import Loading from '../components/Loading';
import { AuthContext } from '../store/auth-context';


export default function LoginScreen() {

  const [isAuthanticating, setIsAuthanticating] = useState(false);
  const authContext = useContext(AuthContext)

  async function loginHandler({email, password}){
  setIsAuthanticating(true)
  try {

   const token = await login(email, password);
    authContext.authenticate(token);

  } catch (error) {
    Alert.alert('Could not sign in ','please check your information!!');
  }

  setIsAuthanticating(false)
  }

  if(isAuthanticating){
    return <Loading message="Signing In..." />;
  }


  return <AuthContent isLogin={true} onAuthenticate={loginHandler} />;

}

const styles = StyleSheet.create({});
