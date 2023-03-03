import {Image, StyleSheet, Text, View} from 'react-native';
import LogoSvg from '../assets/logo/logo.svg';
import SettingSvg from '../assets/icons/🦆 settings.svg';
import AvatarSvg from '../assets/avatar.svg';
import Quill from '../assets//icons/quill.svg';
import {THEME} from "../assets/themes/theme";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={{flex: 0.5, width: '93%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 10}}>
                <View>
                    <LogoSvg />
                </View>
                <View>
                    <SettingSvg />
                </View>
            </View>
            <View style={{flex: 1.5, alignItems: 'center'}}>
                <View style={{marginBottom: 12, marginRight: 6}}>
                    <AvatarSvg />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.username}>Lapin Volant  </Text>
                    <Quill style={{top: 4}}/>
                </View>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    username: {
        color: "#fff",
        fontFamily: THEME.mode.primaryFont,
        fontSize: 17,
    }
});
