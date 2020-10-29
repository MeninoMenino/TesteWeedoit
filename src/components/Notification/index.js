import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Notification( {data} ){
    return (
        <View style={styles.notification}>
            <Text style={styles.timeText}>{data.timeText}</Text>
            <Text style={styles.notificationText}>{data.notificationText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    notification: {
        marginVertical: 5,
        paddingVertical: 18,
        paddingHorizontal: 22,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#FFF'
    },
    timeText: {
        marginVertical: 3,
        fontSize: 12
    },
    notificationText: {
        marginVertical: 3,
        fontSize: 14
    }
});