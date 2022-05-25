import { Text, StyleSheet } from "react-native";

const Header = () => {

    return (
        <Text style={styles.title}>Todo App 3000!</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: 50,
        fontSize: 30
    }
})

export default Header;