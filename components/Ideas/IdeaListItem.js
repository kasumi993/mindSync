import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../../assets/themes/theme';
import AvatarSvg from  '../../assets/avatar.svg';

const IdeaListItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{marginRight: 15}}>
                    <AvatarSvg width='48'/>
                </View>
                <View>
                    <Text style={styles.title}>Idea title</Text>
                    <Text ellipsizeMode='tail' numberOfLines={4} style={styles.description}>
                        Cette application vise à permettre aux particuliers de créer facilement une boutique en ligne, de gérer leurs produits  et leurs commandes
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default IdeaListItem;

const styles = StyleSheet.create({
    container: {
        width: 350,
        marginTop: 15,
        marginBottom: 15,
    },
    description: {
        fontFamily: THEME.mode.secondaryFont,
        fontSize: 14,
        lineHeight: 15,
        width: '36%',
        color: THEME.mode.descriptionSubText,
    },
    title: {
        fontFamily: THEME.mode.primaryFont,
        fontSize: 18,
        marginBottom: 5,
        color: THEME.mode.titleText,
    }
});
