import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./BatButton";
import { BatInput } from "../BatInput";
import generatePassword from "../../services/passwordService";

export function BatButton() {
  const [pass, setPass] = useState("");

  function generatePasswordButton() {
    let generateToken = generatePassword();
    setPass(generateToken);
  }

  function copyToClipboard() {
    Clipboard.setStringAsync(pass);
    alert("Password copied to clipboard!");
  }

  return (
    <>
      <View style={styles.inputContainer}>
        <BatInput password={pass} />
      </View>

      <Pressable onPress={generatePasswordButton} style={styles.button}>
        <Text style={styles.text}>💥 GENERATION</Text>
      </Pressable>

      <Pressable onPress={copyToClipboard} style={styles.button2}>
        <Text style={styles.text}>💥 COPY</Text>
      </Pressable>
    </>
  );
}
