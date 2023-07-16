import {Text, View, Pressable, Modal, StyleSheet, ScrollView} from "react-native";
import {THEME} from "../../assets/themes/theme";
import Footer from "../Footer";
import LogoSvg from "../../assets/logo/logo.svg";
import IdeaMainInfo from "../FormInputs/ideaMainInfo";
import {useState} from "react";

const NewIdeaPopup = (props) => {
    const [idea, setIdeaInfo] = useState({})
    function addIdeaHandler() {
        if (idea.title && idea.summary) {
            props.addIdeaHandler({
                id: Math.floor(Math.random() * 100) + 1,
                title: idea.title,
                summary: idea.summary,
                createdSince: '1s',
            });
        }
        props.setDialogVisibility(false);
    }
    return (
        <Modal animationType="slide">
            <View style={styles.container}>
                <ScrollView style={{ width: '100%'}}>
                    <View style={{alignItems: 'center', marginTop: 20}}>
                        <LogoSvg width='185' height='118'/>
                        <View style={{width: '100%', marginTop: 68}}>
                            <IdeaMainInfo setIdeaInfo={setIdeaInfo}/>
                        </View>
                    </View>
                </ScrollView>


                <View style={{height: '18%', bottom: 0, paddingTop: 27, paddingHorizontal: 47, borderTopWidth: 1, borderTopColor: THEME.mode.whiteLine}}>
                    <Pressable onPress={() => addIdeaHandler()}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Prêt.e pour l'aventure ?</Text>
                        </View>
                    </Pressable>
                    <View style={{marginTop: 25}}>
                        <Footer/>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default NewIdeaPopup;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.mode.modaleColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: THEME.mode.subText,
        fontSize: 18,
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
    },
    buttonText: {
        fontFamily: THEME.mode.secondaryFont,
        color: THEME.mode.onWhitebgText,
    }
});
