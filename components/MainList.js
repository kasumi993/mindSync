import { StyleSheet, Text, View } from 'react-native';
import EmptyList from "./EmptyList";
import IdeasList from "./Ideas/ideasList";
import {useState} from "react";
import AddIdeaButton from "./AddNewIdea/AddIdeaButton";

const MainList = (props) => {
    const [ideasList, setIdeasList] = useState([
        {
            id: 1,
            title: 'Appli e-commerce',
            summary: 'Cette application vise à permettre aux particuliers de créer facilement une boutique en ligne, de gérer leurs produits  et leurs commandes',
            createdSince: '20j',
        },
    ])
    function addIdeaHandler(idea){
        setIdeasList((currentList) => [...currentList, idea])
    }
    return (
        <View style={styles.container}>
            {
                ideasList.length === 0 ?
                <View style={{flex: 1.7}}>
                    <EmptyList/>
                </View>
                :
                <View style={{flex: 1.7, width: '90%'}}>
                    <IdeasList addIdeaHandler={addIdeaHandler} list={ideasList}/>
                </View>
            }
            <View style={{flex: 0.3}}>
                <AddIdeaButton addIdeaHandler={addIdeaHandler}/>
            </View>
        </View>
    );
}

export default MainList;

const styles = StyleSheet.create({
    container: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
