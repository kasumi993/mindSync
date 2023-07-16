import {Text, View, Pressable, Modal, StyleSheet, ScrollView} from "react-native";
import {THEME} from "../../assets/themes/theme";
import {useState} from 'react';
import LogoSvg from '../../assets/logo/logo.svg';
import Quill from "../../assets/icons/quill.svg";
import PlaceholderSvg from "../../assets/icons/image-placeholder.svg";
import NewIdeaPopup from "../AddNewIdea/NewIdeaPopup";
import Footer from "../Footer";

const IdeaDetail = (props) => {
    const [newDialogVisible, setDialogVisibility] = useState(false);

    function goToHome() {
        props.setIdeaDetailVisibility()
    }

    return (
        <Modal animationType="fade">
            <View style={styles.container}>
                <View>
                    {newDialogVisible &&
                        <NewIdeaPopup setDialogVisibility={setDialogVisibility} addIdeaHandler={props.addIdeaHandler}/> }
                </View>
                <View style={{flex: 0.5, marginTop: 45, width: '93%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 10}}>
                    <Pressable onPress={() => goToHome()}>
                        <LogoSvg />
                    </Pressable>
                </View>
                <View style={{flex: 6, width: '100%'}}>
                    <ScrollView>
                        <View style={{alignItems: 'center'}}>
                            <View style={{marginBottom: 12, marginRight: 6}}>
                                <PlaceholderSvg width='78' height='78'/>
                            </View>
                            <Pressable onPress={() => setDialogVisibility(true)}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.title}>{props.idea.title}  </Text>
                                    <Quill style={{top: 4}}/>
                                </View>
                            </Pressable>
                        </View>
                        <View style={{alignItems: 'center', marginTop: 15}}>
                            <Text style={styles.subText}>Créé il y’a
                                <Text style={styles.title}> {props.idea.createdSince}</Text>
                            </Text>
                        </View>
                        <View style={{marginTop: 36, marginHorizontal: 25}}>
                            <Text style={styles.summary}>{props.idea.summary}</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 26, paddingBottom: 40, borderBottomWidth: 1, borderBottomColor: THEME.mode.whiteLine}}>
                            <Pressable onPress={() => setDialogVisibility(true)}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Spécifier le projet</Text>
                                    <Quill style={{marginLeft: 7}} stroke='#000'/>
                                </View>
                            </Pressable>
                        </View>

                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default IdeaDetail;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.mode.modaleColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: "#fff",
        fontFamily: THEME.mode.primaryFont,
        fontSize: 19,
    },
    summary: {
        color: "#fff",
        fontFamily: THEME.mode.primaryFont,
        fontSize: 16,
    },
    subText: {
        color: THEME.mode.subText,
        fontSize: 16,
        fontFamily: THEME.mode.primaryFont,
    },
    text: {
        color: THEME.mode.subText,
        fontSize: 19,
        margin: 25,
        fontFamily: THEME.mode.primaryFont,
    },
    button: {
        width: 236,
        height: 44,
        backgroundColor: THEME.mode.whitebtn,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        fontFamily: THEME.mode.secondaryFont,
        color: THEME.mode.onWhitebgText,
        fontSize: 18,
    }
});
