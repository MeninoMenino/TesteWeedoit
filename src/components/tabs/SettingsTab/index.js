import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function () {
  return (
    <SafeAreaView style={styles.tabContainer}>
      <View style={styles.settingsHeader}>
        <Image
          source={require("../../../img/meninoimg.jpg")}
          style={styles.settingsImage}
        />
        <Text style={styles.settingsUsernameText}>Gabriel Menino</Text>
        <Text style={styles.settingsEmailText}>grmenino@weedoit.com</Text>
      </View>
      <View>
        <Text>MEUS DADOS</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>SAIR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: "center",
  },
  settingsHeader: {
    flex: 1,
    paddingVertical: 50,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  settingsImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  settingsUsernameText: {
    fontSize: 24,
  },
  settingsEmailText: {
    fontSize: 14,
    color: "#b3b3b3",
  },
  logoutButton: {
    position: "absolute",
    right: 25,
    top: 25,
  },
  logoutButtonText: {
    color: "#FF8000",
    fontSize: 15,
  },
});
