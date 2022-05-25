import { View, StyleSheet, Button, TextInput } from "react-native";
import { useState } from 'react';

const TodoInput = ({ setTodosList }) => {

    const [textInputValue, setTextInputValue] = useState('')

    const handleTextChange = (text) => {
        setTextInputValue(text)
    }

    const handleAdd = () => {
        setTodosList(prev => prev.concat(textInputValue))
    }

    return (
        <View style={styles.input}>
            <TextInput
                style={styles.textinput}
                onChangeText={handleTextChange}
                value={textInputValue}
            />
            <Button title='Add' onPress={handleAdd}></Button>
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
    }

})

export default TodoInput;