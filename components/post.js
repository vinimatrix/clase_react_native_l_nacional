import { View, StyleSheet, Text } from "react-native";

export default function Post({ title, content, autor }) {
    const styles = StyleSheet.create({
        title: {
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 30,
            color: '#333',

        },
        content: {
            fontSize: 18,
            marginBottom: 20,
            color: '#666',
        },
        autor: {
            fontSize: 16,
            fontStyle: 'italic',
            color: '#999',
        },

    });
    return (
    <View>

        <Text styles={styles.title}>{title}</Text>
        <Text styles={styles.content}>{content}</Text>
        <Text styles={styles.autor}>{autor}</Text>
              </View>);

    
}