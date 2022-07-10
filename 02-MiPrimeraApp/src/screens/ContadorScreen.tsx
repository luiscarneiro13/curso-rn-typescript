import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fab from '../components/Fab'

export default function ContadorScreen() {

    const [contador, setContador] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.font}>Contador: {contador}</Text>
            <Fab
                title='-1'
                onPress={() => setContador(contador - 1)}
                position="bl"
            />
            <Fab
                title='+1'
                onPress={() => setContador(contador + 1)}
                position="br"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    font: { fontSize: 26 },
})