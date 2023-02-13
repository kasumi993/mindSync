import {Image, StyleSheet, Text, View} from 'react-native';

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
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textMain: {
        color: "#fff",
        fontSize: 33,
        fontFamily: 'signikaNegativeRegular',
    },
    rightText: {
        textAlign: 'right',
    },
    subText: {
        color: "#ffffffBA",
        fontSize: 18,
        fontFamily: 'signikaNegativeRegular',
    },
});
