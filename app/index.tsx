import OverallLayout from "@/components/OverallLayout/OverallLayout"
import { Button, Layout, Text } from "@ui-kitten/components"
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
const uploadIcon = require('../assets/upload-icon.png')
import Icon from "react-native-vector-icons/AntDesign";
import LoginScreen from "./login";


const FurtherRegistrationScreen = () => {

    return (
        <>
            <LoginScreen />

            <OverallLayout>
            </OverallLayout>
        </>
    )

}

export default FurtherRegistrationScreen

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    buttonText: {
        // color: 'white',
        fontSize: 16,
    },
    touchableOpacity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F2EBDE',
        borderColor: '#F2EBDE',
        borderRadius: 50,
    },
    button: {
        backgroundColor: '#F2EBDE',
        borderColor: '#F2EBDE',
        marginVertical: 12,
        borderRadius: 50,
        // justifyContent: 'space-between',
        display: 'flex',
        // flexDirection: 'row',
        // alignContent: 'center',
        // alignItems: 'center'

    },
    subtitle: {
        paddingTop: 16,
        paddingBottom: 8
    },
    title: {
        paddingTop: 24,
        paddingBottom: 12
    },
    text: {
        width: 337.5,
        lineHeight: 24
    }
})