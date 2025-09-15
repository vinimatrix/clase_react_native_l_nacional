import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Header} from './components/header';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
import { ListaPosts } from './components/lista_posts';


export default function App() {
  const [text, setText] = React.useState('');

  //estado del contador
  const [ contador,setContador] = React.useState(0);

const post = [
  {title: 'Post 1', content: 'Contenido del post 1', autor: 'Autor 1'},
  {title: 'Post 2', content: 'Contenido del post 2', autor: 'Autor 2'},
  {title: 'Post 3', content: 'Contenido del post 3', autor: 'Autor 3'}, 
  {title: 'Post 4', content: 'Contenido del post 4', autor: 'Autor 4'},
  {title: 'Post 5', content: 'Contenido del post 5', autor: 'Autor 5'},
  
]
  function handlePress() {
    if(text.length>0){
    alert(`escribiste: ${ text}`);
    }else{
      alert('No escribiste nada');
    }
  }

  function aumentar(){
    setContador(contador+1);
  }
  return (
    <View style={styles.container}>
    <Header styles={styles} texto="Mi primer App con React Native"/>
      <Text style={styles.title}>Contador: {contador}</Text>
      <TouchableOpacity onPress={aumentar} style={styles.button}>
        <Text style={styles.buttonText}>Aumentar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Hola react Native</Text>
      <Text>Hola react Native</Text>
      <TextInput style={styles.input}
        placeholder="Click aquí..."
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Presiona aquí</Text>
      </TouchableOpacity>
      <ListaPosts posts={post}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  input: { height: 40,
           borderColor: 'gray', 
           borderWidth: 1, 
           width: 200, 
           marginBottom: 20, 
           paddingHorizontal: 10 }
});
