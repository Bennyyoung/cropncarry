import { FontAwesome } from "@expo/vector-icons";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react";
import { useColorScheme } from "@/components/useColorScheme";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from '@eva-design/eva';

export {
    ErrorBoundary
} from "expo-router"

export const unstable_settings = {
    initialRouteName: '(tabs)'
}

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [fontsLoaded, fontsError] = useFonts({
        JakartaSans: require('../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf'),
        ...FontAwesome.font
    });

    useEffect(() => {
        if (fontsError) throw fontsError;
    }, [fontsError])
 
    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null;
    }

    return <RootLayoutNav />
}

const RootLayoutNav = () => {
    const colorScheme = useColorScheme();

    console.log('colorScheme', colorScheme);


    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <ApplicationProvider {...eva} theme={eva.light}>

            <Stack>
                {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
                {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="register" options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="faq" options={{ headerShown: false }} /> */}
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>

            </ApplicationProvider>
        </ThemeProvider>
    )
}