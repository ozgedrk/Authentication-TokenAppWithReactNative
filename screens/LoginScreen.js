import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AuthContent from '../components/AuthContent';

export default function LoginScreen() {
  return <AuthContent isLogin={true} />;

}

const styles = StyleSheet.create({});
