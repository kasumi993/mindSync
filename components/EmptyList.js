import { StyleSheet, Text, View } from 'react-native';
import EmptySvg from '../assets/icons/empty.svg';
import { THEME } from '../assets/themes/theme'

const EmptyList = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>A cours d'idées ?</Text>
            </View>
            <View>
                <EmptySvg/>
            </View>
            <View>
                <Text style={styles.text}>Vous n’avez aucun projet pour le moment</Text>
            </View>
        </View>
    );
}

export default EmptyList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: THEME.mode.subText,
        fontSize: 18,
        margin: 25,
        fontFamily: THEME.mode.primaryFont,
    }
});
