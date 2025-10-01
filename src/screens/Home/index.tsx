import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text } from "react-native";
import styles from "./Styles";
import { BatLogo } from "../../components/BatLogo";
import { BatInput } from "../../components/BatInput";


export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View style={styles.inputContainer}>
        <BatInput />
      </View>
      
      <StatusBar style="light" />
    </View>
  );
}