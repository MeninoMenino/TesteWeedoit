import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Feather";

//-------------Abas---------------

//Home
function homeScreen() {
  return (
    <SafeAreaView style={styles.tabContainer}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

//Consultas
function scheduleScreen() {
  return (
    <SafeAreaView style={styles.tabContainer}>
      <View>
        <Text>Consultas</Text>
      </View>
    </SafeAreaView>
  );
}

//Notificações
function notificationsScreen() {
  //Estado das notificações
  const [notification, setNotification] = useState([
    { key: 1, text: "Teste 1" },
    { key: 2, text: "Teste 2" },
    { key: 3, text: "Teste 3" },
    { key: 4, text: "Teste 4" },
    { key: 5, text: "Teste 5" },
  ]);

  return (
    <SafeAreaView style={styles.tabContainer}>
      <View style={styles.notificationsScreenHeader}>
        <Text style={styles.notificationsScreenHeaderTitle}>Notificações</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={notification}
        keyExtractor={(item) => String(item.key)}
        renderItem={() => <Text>Teste</Text>}
      />
    </SafeAreaView>
  );
}

//Configurações
function settingsScreen() {
  return (
    <SafeAreaView style={styles.tabContainer}>
      <View>
        <Text>Configurações</Text>
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

//-----------------------------------------------

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          //Seta o ícone da TabBar
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Schedule":
                iconName = "calendar";
                break;
              case "Notifications":
                iconName = "bell";
                break;
              case "Settings":
                iconName = "settings";
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        //Seta as cores dos ícones ativos e inativos
        tabBarOptions={{
          activeTintColor: "#FF8000",
          inactiveTintColor: "#777",
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={homeScreen} />
        <Tab.Screen name="Schedule" component={scheduleScreen} />
        <Tab.Screen name="Notifications" component={notificationsScreen} />
        <Tab.Screen name="Settings" component={settingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//----Stylesheet----

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: "center",
  },
  notificationsScreenHeader: {
    flex: 1,
    paddingTop: 45,
    alignItems: "flex-start",
  },
  notificationsScreenHeaderTitle: {
    fontSize: 24,
    paddingBottom: 10,
    paddingLeft: 16,
  },
});
