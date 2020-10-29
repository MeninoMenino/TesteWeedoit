import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Feather";

import Notification from './src/components/Notification'

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
    { key: 1, timeText: "Há 43 minutos", notificationText: "Olá, sua consulta foi remarcada com sucesso" },
    { key: 2, timeText: "Há 43 minutos", notificationText: "Olá, sua consulta foi remarcada com sucesso" },
    { key: 3, timeText: "Há 43 minutos", notificationText: "Olá, sua consulta foi remarcada com sucesso" },
    { key: 4, timeText: "Há 50 minutos", notificationText: "Olá, sua consulta foi remarcada com sucesso" },
    { key: 5, timeText: "Há 50 minutos", notificationText: "Olá, sua consulta foi remarcada com sucesso" },
    { key: 6, timeText: "Há 50 minutos", notificationText: "Olá, sua consulta foi remarcada com sucesso" },
    { key: 7, timeText: "Há uma hora", notificationText: "Olá, sua consulta foi remarcada com sucesso" },
    { key: 8, timeText: "Há uma hora", notificationText: "Olá, sua consulta foi remarcada com sucesso" },
    { key: 9, timeText: "Há uma hora", notificationText: "Olá, sua consulta foi remarcada com sucesso" },
    { key: 10, timeText: "Há duas horas", notificationText: "Follow the white rabbit" },
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
        renderItem={({item}) => <Notification data={item} />}
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
    backgroundColor: '#FFF',
    paddingTop: 60,
    paddingBottom: 50,
    paddingLeft: 16,
    alignItems: "flex-start",
    justifyContent: 'center',
  },
  notificationsScreenHeaderTitle: {
    fontSize: 24,
  },
});
