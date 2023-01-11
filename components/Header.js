import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.username}>Lapin Volant</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    username: {
        color: "#000",
    }
});
