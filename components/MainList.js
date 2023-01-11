import { StyleSheet, Text, View } from 'react-native';

const MainList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.username}>List of items...</Text>
        </View>
    );
}

export default MainList;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    username: {
        color: "#000",
    }
});
