import React from 'react';
import { StyleSheet, Text } from 'react-native';

export function Header({texto,styles}) {
    return (   <Text style={styles.title}>{texto}</Text> 

    );
}