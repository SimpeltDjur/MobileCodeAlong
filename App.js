import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, TextInput, Button, FlatList, ImageBackground } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodosList from './components/TodosList';


export default function App() {

  const [todosList, setTodosList] = useState([])





  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/background.jpg")}
        resizeMode='cover'
        style={styles.image}
      >
        <StatusBar style="auto" />
        <Header />
        <TodoInput setTodosList={setTodosList} />
        <TodosList todosList={todosList} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#DCDCDC',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
