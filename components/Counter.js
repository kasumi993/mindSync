import {StyleSheet, Text, View} from 'react-native';
import {THEME} from "../assets/themes/theme";

const Counter = (props) => {
    return (
        <View style={styles.container}>
            <View style={{width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                    <Text style={styles.textMain}>{props.counterCreated ? props.counterCreated : '00'}</Text>
                    <Text style={styles.subText}>Idées Créées</Text>
                </View>
                <View>
                    <Text style={[styles.textMain, styles.rightText]}>{props.counterStarted ? props.counterStarted : '00'}</Text>
                    <Text style={styles.subText}>Projets Commencés</Text>
                </View>
            </View>
        </View>
    );
}

export default Counter;

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
