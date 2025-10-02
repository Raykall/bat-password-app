import React from "react";
import { TextInput } from "react-native";

import { styles } from "./BatInputStyles";

interface BatInputProps {
  password: string;
}

export function BatInput({password}: BatInputProps) {
  return (
    <TextInput
    value={password}
    style={styles.input} 
    placeholder="Password" />
  )
}
