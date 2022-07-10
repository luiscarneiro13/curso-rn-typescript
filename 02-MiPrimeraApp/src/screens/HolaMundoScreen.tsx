import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HolaMundoScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>Hola Mundo!</Text>
        </View>
    )
}

export default HolaMundoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    font: { fontSize: 26 }

})