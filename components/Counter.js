import {Image, StyleSheet, Text, View} from 'react-native';
import {THEME} from "../assets/themes/theme";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={{width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                    <Text style={styles.textMain}>05</Text>
                    <Text style={styles.subText}>Idées Créées</Text>
                </View>
                <View>
                    <Text style={[styles.textMain, styles.rightText]}>01</Text>
                    <Text style={styles.subText}>Projets Commencés</Text>
                </View>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textMain: {
        color: "#fff",
        fontSize: 30,
        fontFamily: THEME.mode.primaryFont,
    },
    rightText: {
        textAlign: 'right',
    },
    subText: {
        color: THEME.mode.subText,
        fontSize: 16,
        fontFamily: THEME.mode.primaryFont,
    },
});
