import { StatusBar } from 'expo-status-bar';
import {StyleSheet, SafeAreaView, Platform} from 'react-native';

import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import MainList from '../components/MainList';
import Footer from '../components/Footer';
import Counter from "../components/Counter";
import AnimatedCircle from "../components/Custom/AnimatedCircle";
import { BlurView } from 'expo-blur';



const Home = () => {
    return (
        <>
            <StatusBar style="light"/>
            <SafeAreaView style={styles.container}>
                <AnimatedCircle color={"red"} />
                <AnimatedCircle color={"green"} />
                <BlurView intensity={100} tint="dark" style={styles.blurContainer}>
                    <Header />
                    <Counter/>
                    <SearchSection />
                    <MainList />
                    <Footer style={{flex: 0.2}}/>
                </BlurView>
            </SafeAreaView>
        </>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: Platform.OS === 'android' ? 35 : 0
    },
    blurContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        opacity: 1,
    },
});
