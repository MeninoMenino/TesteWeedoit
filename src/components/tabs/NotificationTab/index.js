import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";

import Notification from '../../Notification'

export default function ({ data }) {
  return (
    <SafeAreaView style={styles.tabContainer}>
      <View style={styles.notificationsScreenHeader}>
        <Text style={styles.notificationsScreenHeaderTitle}>Notificações</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => <Notification data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: "center",
  },
  notificationsScreenHeader: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 60,
    paddingBottom: 50,
    paddingLeft: 16,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  notificationsScreenHeaderTitle: {
    fontSize: 24,
  },
});
