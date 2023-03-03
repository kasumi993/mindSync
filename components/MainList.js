import { StyleSheet, Text, View } from 'react-native';
import EmptyList from "./EmptyList";
import IdeasList from "./Ideas/ideasList";
import {useState} from "react";
import AddIdeaButton from "./AddNewIdea/AddIdeaButton";

const MainList = (props) => {
    const [ideasList, setIdeasList] = useState(['bla'])
console.log(ideasList);
    function addIdeaHandler(idea){
        setIdeasList((currentList) => [...currentList, idea])
    }
    return (
        <View style={styles.container}>
            {
                ideasList.length === 0 ?
                <View style={{flex: 1.8}}>
                    <EmptyList/>
                </View>
                :
                <View style={{flex: 1.8}}>
                    <IdeasList/>
                </View>
            }
            <View style={{flex: 0.2}}>
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
