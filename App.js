import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

//-------------Abas---------------

//Home
function homeScreen(){
  return (
    <View style={styles.homeScreen}>
      <Text>Home Screen</Text>
    </View>
  );
}

//Consultas
function scheduleScreen(){
  return (
    <View style={styles.scheduleScreen}>
      <Text>Consultas</Text>
    </View>
  );
}

//Notificações
function notificationsScreen(){
  return (
    <View style={styles.notificationsScreenHeader}>
      <Text style={styles.notificationsScreenHeaderTitle}>Notificações</Text>
    </View>
  );
}

//Configurações
function settingsScreen(){
  return (
    <View style={styles.settingsScreen}>
      <Text>Configurações</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

//-----------------------------------------------


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={ ({ route }) => ({
        
        //Seta o ícone da TabBar
        tabBarIcon: ({color, size}) => {
          let iconName;

          switch(route.name){
            case 'Home':
              iconName = 'home';
              break;
            case 'Schedule':
              iconName = 'calendar';
              break;
            case 'Notifications':
              iconName = 'bell';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
          }
          return <Icon name={iconName} size={size} color={color}/>
        }
      })}
      
      //Seta as cores dos ícones ativos e inativos
      tabBarOptions = {{
        activeTintColor: '#FF8000',
		    inactiveTintColor: '#777',
        showLabel: false
      }}>
        
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scheduleScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationsScreenHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationsScreenHeaderTitle: {
    fontSize: 24
  },
  settingsScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
