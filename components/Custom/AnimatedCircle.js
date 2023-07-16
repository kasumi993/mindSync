import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');
const circleSize = 40;

const AnimatedCircle = (props) => {
    const position = useRef(new Animated.ValueXY()).current;

    const animate = () => {
        Animated.timing(position, {
            toValue: { x: width / 2 - circleSize / 2, y: height / 2 - circleSize / 2 },
            duration: 18000, // Animation duration (8 seconds)
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => {
            // Animation completed
            bounceAnimation(); // Start the bounce animation
        });
    };

    const bounceAnimation = () => {
        Animated.spring(position, {
            toValue: { x: width / 2 - circleSize / 2, y: height - circleSize },
            friction: 1, // Adjust the friction to control the bounce effect
            useNativeDriver: true,
        }).start(() => {
        });
    };

    useEffect(() => {
        animate(); // Start the initial slow movement animation when the component mounts
    }, []);

    const color = props.color === 'green' ? ['#0E979F87', '#27907D'] : ['#ED5F5F87', '#F28F6F87'];

    return (
        <Animated.View style={[styles.container, { transform: position.getTranslateTransform() }]}>
            <LinearGradient style={styles.circle} colors={color} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
    },
    circle: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
    },
});

export default AnimatedCircle;
