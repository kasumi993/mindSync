import {Image, StyleSheet, Text, View} from 'react-native';
import LogoSvg from '../assets/logo/logo.svg';
import SettingSvg from '../assets/icons/🦆 settings.svg';
import AvatarSvg from '../assets/avatar.svg';
import Quill from '../assets//icons/quill.svg';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={{width: '93%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 10}}>
                <View>
                    <LogoSvg />
                </View>
                <View>
                    <SettingSvg />
                </View>
            </View>
            <View style={{flex: 2}}>
                <View style={{marginBottom: 12}}>
                    <AvatarSvg />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.username}>Lapin Volant </Text>
                    <Quill/>
                </View>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    username: {
        color: "#fff",
        fontFamily: 'signikaNegativeRegular',
    }
});
