import React from "react";
import { TextInput } from "react-native";

import { styles } from "./BatInputStyles";

export function BatInput() {
  return <TextInput style={styles.input} placeholder="password" />;
}
