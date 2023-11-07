import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { ScreenNames } from "../consts/HeaderConsts";
import { NavigationContext } from "@react-navigation/native";

export default function Header() {
  const navigation = React.useContext(NavigationContext);
  const [selected, setSelected] = useState<string>("");

  const navigateToHome = () => {
    setSelected(ScreenNames.Home);
    navigation.navigate(ScreenNames.Home);
  };

  const navigateToAbout = () => {
    setSelected(ScreenNames.About);
    navigation.navigate(ScreenNames.About);
  };
  const navigateToPortfolio = () => {
    setSelected(ScreenNames.Portfolio);
    navigation.navigate(ScreenNames.Portfolio);
  };
  const navigateToContact = () => {
    setSelected(ScreenNames.Contact);
    navigation.navigate(ScreenNames.Contact);
  };

  return (
    <View style={styles.container}>
      <Text>Portfolio</Text>
      <View style={{ flex: 1 }}></View>
      <View style={styles.fRow}>
        <Button title={ScreenNames.Home} onPress={() => navigateToHome()} />
        <Button title={ScreenNames.About} onPress={() => navigateToAbout()} />
        <Button
          title={ScreenNames.Portfolio}
          onPress={() => navigateToPortfolio()}
        />
        <Button
          title={ScreenNames.Contact}
          onPress={() => navigateToContact()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fRow: {
    flex: 1,
    flexDirection: "row",
  },
});
