import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../assets/themes/theme'

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.footerText}>Vos idées sont précieuses, prenez en soin!</Text>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        color: THEME.mode.subText,
        fontFamily: THEME.mode.primaryFont,
    }
});
