import React, { useState, useRef } from 'react';
import { Pressable, StyleSheet, Text, View, Animated, PanResponder } from 'react-native';
import { THEME } from '../../assets/themes/theme';
import PlaceholderSvg from '../../assets/icons/image-placeholder.svg';
import BinSvg from '../../assets/icons/bin.svg';
import { Swipeable } from 'react-native-gesture-handler';

import IdeaDetail from "./IdeaDetail";

const IdeaListItem = (props) => {
    const [ideaDetailVisible, setIdeaDetailVisibility] = useState(false);
    const swipeableRef = useRef(null);

    const showIdeaDetail = () => {
        setIdeaDetailVisibility(true);
    };

    const hideIdeaDetail = () => {
        setIdeaDetailVisibility(false);
    };

    const deleteIdea = () => {
        // Implement your delete functionality here
        console.log('Delete idea:', props.idea);
    };

    const renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
        });

        return (
            <View style={styles.deleteContainer}>
                <Animated.View style={[styles.deleteBox, { opacity: trans }]}>
                    <BinSvg width={24} height={24} />
                    <Text style={styles.deleteText}>Delete</Text>
                </Animated.View>
            </View>
        );
    };

    return (
        <View>
            <View>
                {ideaDetailVisible && (
                    <IdeaDetail setIdeaDetailVisibility={hideIdeaDetail} addIdeaHandler={props.addIdeaHandler} idea={props.idea} />
                )}
            </View>
            <Swipeable
                ref={swipeableRef}
                renderRightActions={renderRightActions}
            >
                <Pressable onPress={showIdeaDetail} style={{ width: '100%', marginBottom: 20 }}>
                    <View style={styles.container}>
                        <View style={{ marginRight: 12 }}>
                            <PlaceholderSvg />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}>{props.idea.title}</Text>
                            <Text ellipsizeMode="tail" numberOfLines={3} style={styles.summary}>
                                {props.idea.summary}
                            </Text>
                        </View>
                    </View>
                </Pressable>
            </Swipeable>
        </View>
    );
};

export default IdeaListItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    summary: {
        fontFamily: THEME.mode.secondaryFont,
        fontSize: 14,
        lineHeight: 15,
        color: THEME.mode.summarySubText,
    },
    title: {
        fontFamily: THEME.mode.primaryFont,
        fontSize: 18,
        marginBottom: 5,
        color: THEME.mode.titleText,
    },
    deleteContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 16,
        height: '100%',
        backgroundColor: 'red',
    },
    deleteBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: '100%',
    },
    deleteText: {
        marginLeft: 8,
        color: 'white',
        fontFamily: THEME.mode.secondaryFont,
        fontSize: 16,
    },
});
