import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import Pagina1Screen from '../screens/Pagina1Screen'
import Pagina2Screen from '../screens/Pagina2Screen'
import Pagina3Screen from '../screens/Pagina3Screen'

const Stack = createNativeStackNavigator()

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Página 1" component={Pagina1Screen} options={{ title: 'Título Página 1' }} />
            <Stack.Screen name="Página 2" component={Pagina2Screen} options={{ title: 'Título Página 2' }} />
            <Stack.Screen name="Página 3" component={Pagina3Screen} options={{ title: 'Título Página 3' }} />
        </Stack.Navigator>
    )
}