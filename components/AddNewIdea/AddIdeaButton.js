import {useState} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import RoundPlus from '../../assets/icons/roundPlus.svg';
import NewIdeaPopup from './NewIdeaPopup';
import { THEME } from '../../assets/themes/theme'

const AddIdeaButton = (props) => {
    const [newDialogVisible, setDialogVisibility] = useState(false);


    return (
        <View style={styles.container}>
            <View>
                {newDialogVisible &&
                    <NewIdeaPopup setDialogVisibility={setDialogVisibility} addIdeaHandler={props.addIdeaHandler}/> }
            </View>
            <View>
                <Pressable onPress={() => {setDialogVisibility(true)}}>
                    <View style={{alignItems: 'center', margin: 15}}>
                        <RoundPlus/>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

export default AddIdeaButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
