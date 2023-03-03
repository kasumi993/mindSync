import { StyleSheet, Text, View} from 'react-native';
import { THEME } from '../../assets/themes/theme';
import AvatarSvg from  '../../assets/avatar.svg';

const IdeaListItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={{marginRight: 12}}>
                <AvatarSvg width='48'/>
            </View>
            <View style={{width: '80%'}}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text ellipsizeMode='tail' numberOfLines={3} style={styles.description}>
                    {props.description}
                </Text>
            </View>
        </View>
    );
}

export default IdeaListItem;

const styles = StyleSheet.create({
    container: {
        width: 350,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    description: {
        fontFamily: THEME.mode.secondaryFont,
        fontSize: 14,
        lineHeight: 15,
        color: THEME.mode.descriptionSubText,
    },
    title: {
        fontFamily: THEME.mode.primaryFont,
        fontSize: 18,
        marginBottom: 5,
        color: THEME.mode.titleText,
    }
});
