import {TextInput, View, StyleSheet, Text} from "react-native";
import {THEME} from "../../assets/themes/theme";
import {FadeInView} from "../../assets/animations/fadeIn";
import Quill from '../../assets//icons/quill.svg';

const FormInput = (props) => {
    return (
        <View style={props.style}>
            <View style={styles.container}>
                <View style={{width: '100%'}}>
                    {props.value.length !== 0 ?
                        <FadeInView>
                            <Text style={styles.floatingLabel}>{props.placeholder}</Text>
                        </FadeInView>
                        : <></>}
                    <TextInput editable={props.editable}
                               multiline={props.multiline}
                               numberOfLines={props.numberOfLines}
                               maxLength={props.maxLength}
                               onChangeText={props.onChangeText}
                               value={props.value}
                               style={styles.input}
                               placeholderTextColor={THEME.mode.primaryText}
                               placeholder={props.placeholder}
                               onBlur={props.onBlur}
                    />
                </View>
                <Quill style={{top: 7}}/>
            </View>
        </View>
    )
}

export default FormInput;


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    input: {
        width: '96%',
        paddingVertical: 5,
        fontSize: 18,
        color: THEME.mode.primaryText,
        fontFamily: THEME.mode.primaryFont,
        textAlignVertical: 'top',
    },
    floatingLabel: {
        fontSize: 10,
        color: THEME.mode.primaryText,
        fontFamily: THEME.mode.primaryFont,
    }
});
