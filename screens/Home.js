import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Platform} from 'react-native';

import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import MainList from '../components/MainList';
import Footer from '../components/Footer';
import Counter from "../components/Counter";


const Home = () => {
    return (
        <>
            <StatusBar style="light"/>
            <SafeAreaView style={styles.container}>
                <Header />
                <Counter />
                <SearchSection />
                <MainList />
                <Footer style={{flex: 0.2}}/>
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
});
