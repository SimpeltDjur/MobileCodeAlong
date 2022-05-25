import { Pressable, View, StyleSheet, Button, TextInput, Text, TouchableOpacity } from "react-native";
import { useState } from 'react';
import Todo from "../models/Todo";



const TodoInput = ({ setTodosList }) => {

    const [textInputValue, setTextInputValue] = useState('')
    const [count, setCount] = useState(1);

    const handleTextChange = (text) => {
        setTextInputValue(text)
    }

    const handleAdd = () => {
        setTodosList(prev => prev.concat(new Todo(count, textInputValue, false)))
        setCount(prev => prev + 1);
    }

    return (
        <View style={styles.input}>
            <TextInput
                style={styles.textinput}
                onChangeText={handleTextChange}
                value={textInputValue}
            />
            <Pressable
                style={styles.addButton}
                onPress={handleAdd}
            >
                <Text style={styles.addButtonText}>Add</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    textinput: {
        backgroundColor: '#FFF',
        width: '70%',
        marginHorizontal: 20,
        paddingHorizontal: 10
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20
    },
    addButton: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        backgroundColor: 'dodgerblue',
        borderRadius: 4,
        marginRight: 10
    },
    addButtonText: {
        color: '#fff'
    }

})

export default TodoInput;