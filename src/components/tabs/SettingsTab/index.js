import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function () {
  return (
    <SafeAreaView style={styles.tabContainer}>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          console.log("Logout");
        }}
      >
        <Text style={styles.logoutButtonText}>SAIR</Text>
      </TouchableOpacity>

      <View style={styles.settingsHeader}>
        <Image
          source={require("../../../img/meninoimg.jpg")}
          style={styles.settingsImage}
        />
        <Text style={styles.settingsUsernameText}>Gabriel Menino</Text>
        <Text style={styles.settingsEmailText}>grmenino@weedoit.com</Text>
      </View>

      <View>
        <Text style={styles.meusDadosText}>MEUS DADOS</Text>
      </View>

      <Pressable
        onPress={() => {
          console.log("Pressed");
        }}
        style={styles.pressableOption}
      >
        <View style={styles.optionTextView}>
          <Text>Alterar meus dados</Text>
        </View>
        <View style={styles.arrowIconView}>
          <AntDesign
            name="right"
            size={24}
            color="#FF8000"
            style={styles.arrowIcon}
          />
        </View>
      </Pressable>

      <Pressable
        onPress={() => {
          console.log("Pressed");
        }}
        style={styles.pressableOption}
      >
        <View style={styles.optionTextView}>
          <Text>Meus planos</Text>
        </View>
        <View style={styles.arrowIconView}>
          <AntDesign
            name="right"
            size={24}
            color="#FF8000"
            style={styles.arrowIcon}
          />
        </View>
      </Pressable>

      <Pressable
        onPress={() => {
          console.log("Pressed");
        }}
        style={styles.pressableOption}
      >
        <View style={styles.optionTextView}>
          <Text>Alterar minha senha</Text>
        </View>
        <View style={styles.arrowIconView}>
          <AntDesign
            name="right"
            size={24}
            color="#FF8000"
            style={styles.arrowIcon}
          />
        </View>
      </Pressable>

      <Pressable
        onPress={() => {
          console.log("Pressed");
        }}
        style={styles.pressableOption}
      >
        <View style={styles.optionTextView}>
          <Text>Dependentes</Text>
        </View>
        <View style={styles.arrowIconView}>
          <AntDesign
            name="right"
            size={24}
            color="#FF8000"
            style={styles.arrowIcon}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: "center",
  },
  settingsHeader: {
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
  meusDadosText: {
    marginVertical: 12,
    paddingLeft: 12,
  },
  pressableOption: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 3,
    marginVertical: 2,
    fontSize: 16,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  optionTextView: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  arrowIconView: {
    flex: 1,
    paddingRight: 15,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
