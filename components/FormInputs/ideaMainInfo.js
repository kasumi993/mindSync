import {useState} from 'react';
import {View, StyleSheet, Text} from "react-native";
import {THEME} from "../../assets/themes/theme";
import {STYLES} from "../../styles/common";
import FormInput from "../Custom/FormInput";

const IdeaMainInfo = (props) => {
    const [title, onChangeTitle] = useState('');
    const [summary, onChangeSummary] = useState('');
    const [description, onChangeDescription] = useState('');

    function ideaInfoHandler() {
        if (title.length !== 0 && summary.length !== 0) {
            props.setIdeaInfo({
                title,
                summary
            });
        }
    }
    function titleHandler(text) {
        onChangeTitle(text)
        if (title.length !== 0 && summary.length !== 0) {
            ideaInfoHandler();
        }
    }
    function summaryHandler(text) {
        onChangeSummary(text)
        if (title.length !== 0 && summary.length !== 0) {
            ideaInfoHandler();
        }
    }

    return (
        <View style={styles.container}>
            <FormInput style={{marginBottom: 40}}
                       placeholder={'Nom du projet'}
                       onChangeText={titleHandler}
                       maxLength={40}
                       value={title}
            />

            <FormInput editable
                       placeholder={'De quoi s’agit-il?'}
                       style={{marginBottom: 20}} 
                       multiline
                       numberOfLines={3}
                       maxLength={50}
                       onChangeText={text => summaryHandler(text)}
                       value={summary}
                       />

            <Text style={[STYLES.FormSubText, {marginBottom: 40}]}>Résume ton projet en 50 caractères</Text>

            <FormInput editable
                       style={{marginBottom: 20}}
                       multiline
                       numberOfLines={7}
                       maxLength={350}
                       onChangeText={text => onChangeDescription(text)}
                       value={description}
                       placeholder={'Description du projet'}/>

            <Text style={[STYLES.FormSubText, {marginBottom: 40}]}>Fais une description complete de ton projet, ne t’inquiète pas si ce n’est pas clair, tu peux le modifier plus tard.</Text>
        </View>
    )
}

export default IdeaMainInfo;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 35,
    },
});
