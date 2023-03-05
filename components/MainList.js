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
            summary: 'descrription',
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
                <View style={{flex: 1.7}}>
                    <IdeasList list={ideasList}/>
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
