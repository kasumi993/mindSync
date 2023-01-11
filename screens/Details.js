import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Details = () => {
    return (
        <View style={styles.container}>
            <Text>Details!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
