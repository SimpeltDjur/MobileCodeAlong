import { useNavigation } from '@react-navigation/native'
import { Text, FlatList, View, StyleSheet, Pressable } from 'react-native'

const TodosList = ({ todosList }) => {

    const nav = useNavigation()

    const handleNavigate = (todo) => {
        nav.navigate('SelectedTodoScreen')
    }


    const _renderItem = ({ item }) => {
        return (
            <Pressable onPress={() => handleNavigate(item)} >
                <View style={styles.todo} >
                    <Text>{item.title}</Text>
                </View>
            </Pressable>
        )
    }


    return (
        <FlatList
            data={todosList}
            renderItem={_renderItem}
            keyExtractor={(item, index) => index}
        />
    )
}

const styles = StyleSheet.create({
    todo: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 4
    }
})

export default TodosList;