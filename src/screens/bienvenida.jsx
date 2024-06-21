// screens/bienvenida.jsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { Estilos } from './bienvenida.styles'; // Importa los estilos para esta pantalla

export const BienvenidaScreen = ({ navigation }) => {
    const handleBackToMenu = () => {
        navigation.goBack(); // Regresar a la pantalla anterior (en este caso, el menú principal)
    };

    return (
        <View style={Estilos.container}>
            <Text style={Estilos.texto}>Bienvenido a mi APP</Text>
            <Button title="Regresar al Menú" onPress={handleBackToMenu} style={Estilos.button} />
        </View>
    );
};