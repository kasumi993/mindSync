import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.username}>Footer...</Text>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    username: {
        color: "#fff",
    }
});
