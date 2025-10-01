import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./BatLogoStyles";

export function BatLogo() {
  return (
    <View>
      <Text style={styles.title}>BAT PASSWORD GENERATOR</Text>
      <Image
        source={require("../../../assets/bat-logo.png")}
        style={{ resizeMode: "contain", width: 200, height: 200, alignSelf: "center" }}
      />
    </View>
  );
}
