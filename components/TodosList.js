import { Text, FlatList, View, StyleSheet } from 'react-native'

const TodosList = ({ todosList }) => {


    const _renderItem = ({ item }) => {
        return (
            <View style={styles.todo} >
                <Text>{item}</Text>
            </View>
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