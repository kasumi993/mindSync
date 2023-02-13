import { StyleSheet, Text, View } from 'react-native';
import EmptyList from "./EmptyList";

const MainList = () => {
    return (
        <View style={styles.container}>
            <EmptyList/>
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
