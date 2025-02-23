import {View, StyleSheet} from "react-native";
import {THEME} from "../../assets/themes/theme";
import FormInput from "../Custom/FormInput";

const IdeaImages = (props) => {
    return (
        <View style={styles.container}>
            <FormInput placeholder={'Medias'}/>
        </View>
    )
}

export default IdeaImages;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.mode.modaleColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
