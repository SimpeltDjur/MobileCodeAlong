import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [textInputValue, setTextInputValue] = useState('')
  const [todosList, setTodosList] = useState([])

  const handleTextChange = (text) => {
    setTextInputValue(text)
  }

  const handleAdd = () => {
    setTodosList(prev => prev.concat(textInputValue))
    console.log(todosList)
  }

  const _renderItem = ({ item }) => {
    return (
      <Text>{item}</Text>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App 3000!</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.textinput}
          onChangeText={handleTextChange}
          value={textInputValue}
        />
        <Button title='Add' onPress={handleAdd}></Button>
      </View>
      <FlatList
        data={todosList}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
  }, title: {
    marginTop: 50,
    fontSize: 30
  }, textinput: {
    backgroundColor: '#FFF',
    width: '70%',
    marginHorizontal: 20,
    paddingHorizontal: 10
  }, input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
