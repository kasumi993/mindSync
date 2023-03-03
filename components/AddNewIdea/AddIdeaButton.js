import {useState} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import RoundPlus from '../../assets/icons/roundPlus.svg';
import { THEME } from '../../assets/themes/theme'

const Footer = (props) => {
    const [newDialogVisible, setDialogVisibility] = useState(false);
    return (
        <View style={styles.container}>
            <View>
                {newDialogVisible &&
                    <Pressable onPress={() => {setDialogVisibility(false)}}>
                        <Text style={styles.footerText}>bonjour</Text>
                    </Pressable>}
            </View>
            <View>
                <Pressable onPress={() => {setDialogVisibility(true)}}>
                    <View style={{alignItems: 'center', margin: 15}}>
                        <RoundPlus/>
                    </View>
                </Pressable>
            </View>
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
