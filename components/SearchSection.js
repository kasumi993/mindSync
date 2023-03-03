import { StyleSheet, Text, View } from 'react-native';
import SearchSvg from '../assets/icons/search.svg';
import { THEME } from '../assets/themes/theme'

const SearchSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <SearchSvg/>
                <Text style={styles.placeholder}>Rechercher un projet ...</Text>
            </View>
        </View>
    );
}

export default SearchSection;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBar: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: THEME.mode.searchBarBackground,
        paddingLeft: 21,
        height: 35,
        borderRadius: 25,
    },
    placeholder: {
        color: THEME.mode.subText,
        marginLeft: 16,
        fontFamily: THEME.mode.primaryFont,
    }
});
