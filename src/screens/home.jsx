// home.jsx

import React from 'react';
import { Text, Button, View } from 'react-native';
import { Estilos } from './home.styles';
import { Retrato } from '../components/retrato';
import { Contenedor } from '../components/commons/contenedor';

export const HomeScreen = ({ navigation }) => {
    const handleNavigateToUser = () => {
        navigation.navigate('User'); // Navegar a la pantalla User
    };

    const handleNavigateToBienvenida = () => {
        navigation.navigate('Bienvenida'); // Navegar a la pantalla de Bienvenida
    };

    return (
        <Contenedor style={Estilos.container}>
            <Text style={Estilos.textoBlanco}>Hola con todo</Text>
            <Retrato nombre="Kevin Chuquitarco" />
            <View style={Estilos.botonesContainer}>
                <Button title="React Native" onPress={handleNavigateToBienvenida} style={Estilos.button} />
                <Button title="Componentes NativeBase" onPress={handleNavigateToUser} style={Estilos.button} />
            </View>
        </Contenedor>
    );
};