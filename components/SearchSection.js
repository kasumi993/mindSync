import { StyleSheet, Text, View } from 'react-native';

const SearchSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.username}>Rechercher...</Text>
        </View>
    );
}

export default SearchSection;

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
