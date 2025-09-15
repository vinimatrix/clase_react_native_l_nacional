import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function ListaPostScreen({posts}){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen 
          name="Lista" 
          component={ListaPosts}
          options={{ title: 'Mis Posts' }}
        />
        <Stack.Screen 
          name="Detalles" 
          component={Post}
          options={{ title: 'Detalles del Post' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//////////////////////////////////////////////////////////////////

// Pantalla de origen - Enviando datos
export default function ListaPostsScreen  ({ navigation })  {
    
     function NavegarADetalles  (post) {
    navigation.navigate('Detalles', { 
      postId: post.id,
      titulo: post.title,
      contenido: post.body
    });
  }

  return (
    <TouchableOpacity onPress={() => navegarADetalles(post)}>
      <Text>{post.title}</Text>
    </TouchableOpacity>
  );
};
//////////////////////////////////////////////////////////////
// Pantalla de destino - Recibiendo datos
const DetallesPostScreen = ({ route }) => {
  const { postId, titulo, contenido } = route.params;

  return (
    <View>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text>{contenido}</Text>
    </View>
  );
};
