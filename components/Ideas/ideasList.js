import { StyleSheet, Text, View, FlatList } from 'react-native';
import { THEME } from '../../assets/themes/theme';
import IdeaListItem from './IdeaListItem';

const IdeasList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList data={props.list}
                      style={{width: '100%'}}
                      renderItem={({item}) =>
                          <IdeaListItem idea={item} addIdeaHandler={props.addIdeaHandler}/>}
                      keyExtractor={item => item.id}>
            </FlatList>
        </View>
    );
}

export default IdeasList;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '93%',
        flexDirection: 'column',
        marginTop: 30,
    },
    text: {
        color: THEME.mode.subText,
        fontSize: 18,
        margin: 25,
        fontFamily: THEME.mode.primaryFont,
    }
});
