import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";
import styles from "./Styles";
import { BatLogo } from "../../components/BatLogo";
import { BatInput } from "../../components/BatInput";
import { BatButton } from "../../components/BatButton";


export default function Home() {

  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View style={styles.buttonContainer}>
        <BatButton />
      </View>
      
      <StatusBar style="light" />
    </View>
  );
}