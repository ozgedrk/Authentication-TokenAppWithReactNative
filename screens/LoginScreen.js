import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AuthContent from '../components/AuthContent';
import { login } from '../components/auth';
import Loading from '../components/Loading';


export default function LoginScreen() {

  const [isAuthanticating, setIsAuthanticating] = useState(false);

  async function loginHandler({email, password}){
  setIsAuthanticating(true)
  await login(email, password);
  setIsAuthanticating(false)
  }

  if(isAuthanticating){
    return <Loading message="Signing In..." />;
  }


  return <AuthContent isLogin={true} onAuthenticate={loginHandler} />;

}

const styles = StyleSheet.create({});
