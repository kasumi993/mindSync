import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../../assets/themes/theme';
import IdeaListItem from './IdeaListItem';

const IdeasList = (props) => {
    return (
        <View style={styles.container}>
            <IdeaListItem/>
            <IdeaListItem/>
            <IdeaListItem/>
        </View>
    );
}

export default IdeasList;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    text: {
        color: THEME.mode.subText,
        fontSize: 18,
        margin: 25,
        fontFamily: THEME.mode.primaryFont,
    }
});
