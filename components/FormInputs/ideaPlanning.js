import {View, StyleSheet} from "react-native";
import {THEME} from "../../assets/themes/theme";
import FormInput from "../Custom/FormInput";

const IdeaPlanning = (props) => {
    return (
        <View style={styles.container}>
            <FormInput placeholder={'Nom du projet'}/>
        </View>
    )
}

export default IdeaPlanning;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.mode.modaleColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
