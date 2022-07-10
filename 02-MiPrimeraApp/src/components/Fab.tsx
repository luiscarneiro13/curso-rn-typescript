import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

interface Props {
    title: string,
    position?: 'br' | 'bl'
    onPress: () => void,
}

export default function Fab({ title, onPress, position = 'br' }: Props) {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.fabLocation, (position === 'bl') ? styles.left : styles.right]}
        >
            <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 20
    },
    right: { right: 20 },
    left: { left: 20 },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }

})