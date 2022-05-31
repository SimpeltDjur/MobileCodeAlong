import { Text, StyleSheet, View, Button } from "react-native";


const Header = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo App 3000!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginVertical: 40,
        fontSize: 30,
        color: '#fff'
    },
    container: {
        alignItems: 'center'
    }

})

export default Header;