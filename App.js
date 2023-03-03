import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

import Home from "./screens/Home";
import Details from "./screens/Details";


const App = () => {
    const [loaded] = useFonts({
        signikaNegativeBold: require("./assets/fonts/SignikaNegative-Bold.ttf"),
        signikaNegativeLight: require("./assets/fonts/SignikaNegative-Light.ttf"),
        signikaNegativeRegular: require("./assets/fonts/SignikaNegative-Regular.ttf"),
        signikaNegativeSemiBold: require("./assets/fonts/SignikaNegative-SemiBold.ttf"),
        signikaNegativeMedium: require("./assets/fonts/SignikaNegative-Medium.ttf"),
        ropaSans: require("./assets/fonts/RopaSans-Regular.ttf"),
        ropaSansItalic: require("./assets/fonts/RopaSans-Italic.ttf"),
    })

    if(!loaded) return null;

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

