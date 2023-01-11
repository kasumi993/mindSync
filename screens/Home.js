import {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, SafeAreaView, Text, View } from 'react-native';

import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import MainList from '../components/MainList';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <SearchSection />
            <MainList />
            <Footer />
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});
