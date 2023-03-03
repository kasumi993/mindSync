import { StyleSheet, Text, View } from 'react-native';
import EmptyList from "./EmptyList";
import IdeasList from "./Ideas/ideasList";
import {useState} from "react";
import AddIdeaButton from "./AddNewIdea/AddIdeaButton";

const MainList = (props) => {
    const [ideasList, setIdeasList] = useState([
        {
            id: 1,
            title: 'voila',
            description: 'descrription',
        },
        {
            id: 2,
            title: 'second',
            description: 'Cette application vise à permettre aux particuliers de créer facilement une boutique en ligne, de gérer leurs produits  et leurs commandes',
        },
        {
            id: 3,
            title: 'third',
            description: 'Cette application vise à permettre aux particuliers de créer facilement une boutique en ligne, de gérer leurs produits  et leurs commandes',
        },
        {
            id: 4,
            title: 'fourth',
            description: 'Cette application vise à permettre aux particuliers de créer facilement une boutique en ligne, de gérer leurs produits  et leurs commandes',
        },
        {
            id: 5,
            title: 'fifth',
            description: 'Cette application vise à permettre aux particuliers de créer facilement une boutique en ligne, de gérer leurs produits  et leurs commandes',
        },
        {
            id: 6,
            title: 'sixth',
            description: 'Cette application vise à permettre aux particuliers de créer facilement une boutique en ligne, de gérer leurs produits  et leurs commandes',
        }
    ])
console.log(ideasList);
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
                <View style={{flex: 1.7}}>
                    <IdeasList list={ideasList}/>
                </View>
            }
            <View style={{flex: 0.3}}>
                <AddIdeaButton/>
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
