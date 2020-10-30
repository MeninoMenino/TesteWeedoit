import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Feather";

//Telas das abas
import NotificationTab from "./src/components/tabs/NotificationTab";
import SettingsTab from "./src/components/tabs/SettingsTab";

//-------------Abas---------------

//Home
function homeTab() {
  return (
    <SafeAreaView style={styles.tabContainer}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

//Consultas
function scheduleTab() {
  return (
    <SafeAreaView style={styles.tabContainer}>
      <View>
        <Text>Consultas</Text>
      </View>
    </SafeAreaView>
  );
}

//Notificações
function notificationsTab() {
  //Lista de notificações (mock)
  const [notification, setNotification] = useState([
    {
      key: 1,
      timeText: "Há 43 minutos",
      notificationText: "Olá, sua consulta foi remarcada com sucesso",
    },
    {
      key: 2,
      timeText: "Há 43 minutos",
      notificationText: "Olá, sua consulta foi remarcada com sucesso",
    },
    {
      key: 3,
      timeText: "Há 43 minutos",
      notificationText: "Olá, sua consulta foi remarcada com sucesso",
    },
    {
      key: 4,
      timeText: "Há 50 minutos",
      notificationText: "Olá, sua consulta foi remarcada com sucesso",
    },
    {
      key: 5,
      timeText: "Há 50 minutos",
      notificationText: "Olá, sua consulta foi remarcada com sucesso",
    },
    {
      key: 6,
      timeText: "Há 50 minutos",
      notificationText: "Olá, sua consulta foi remarcada com sucesso",
    },
    {
      key: 7,
      timeText: "Há uma hora",
      notificationText: "Olá, sua consulta foi remarcada com sucesso",
    },
    {
      key: 8,
      timeText: "Há uma hora",
      notificationText: "Olá, sua consulta foi remarcada com sucesso",
    },
    {
      key: 9,
      timeText: "Há uma hora",
      notificationText: "Olá, sua consulta foi remarcada com sucesso",
    },
    {
      key: 10,
      timeText: "Há duas horas",
      notificationText: "Follow the white rabbit",
    },
  ]);

  return <NotificationTab data={notification} />;
}

//Configurações
function settingsTab() {
  return <SettingsTab />;
}

const Tab = createBottomTabNavigator();

//-----------------------------------------------

export default function App() {
  return (
    //Navegador (tab bar)
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          //Seta o ícone da Tab Bar
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
        <Tab.Screen name="Home" component={homeTab} />
        <Tab.Screen name="Schedule" component={scheduleTab} />
        <Tab.Screen name="Notifications" component={notificationsTab} />
        <Tab.Screen name="Settings" component={settingsTab} />
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
});
