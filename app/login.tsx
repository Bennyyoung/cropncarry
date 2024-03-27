import OverallLayout from "@/components/OverallLayout/OverallLayout"
import { Image, ScrollView, StyleSheet } from "react-native"
import { Button, ButtonGroup, Layout, Text } from "@ui-kitten/components"
import React, { useState, useRef } from "react"
import PhoneInput from "react-native-phone-number-input";

const loginImage = require('../assets/loginImg2.jpg')

const LoginScreen = () => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);

    return (
        <ScrollView>
            <Image source={loginImage} />
            <OverallLayout>
                <Layout style={styles.layout}>
                    <Text category="h3" style={{ paddingBottom: 12 }}>
                        Welcome
                    </Text>
                    <Text category="p1" style={{ paddingBottom: 12 }}>
                        Let's start with your phone number
                    </Text>

                    <Text category="p1" style={{ paddingBottom: 12 }}>
                        Phone Number
                    </Text>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={value}
                        defaultCode="NG"
                        layout="first"
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        withDarkTheme
                        withShadow
                        autoFocus
                    />

                    <Layout style={{ paddingVertical: 12 }}>
                        <Button style={[styles.button, {
                            backgroundColor: '#EBA633',
                            borderColor: '#EBA633',
                        }]}>
                            <Text category="s2" style={{ color: '#1F170A' }}>
                                Continue
                            </Text>
                        </Button>
                        <Button style={[styles.button, {
                            backgroundColor: '#F2EBDE',
                            borderColor: '#F2EBDE'
                        }]}>
                            <Text>
                                Google
                            </Text>
                        </Button>
                        <Button style={[styles.button, {
                            backgroundColor: '#F2EBDE',
                            borderColor: '#F2EBDE'
                        }]}>
                            <Text>
                                Facebook
                            </Text>
                        </Button>
                        <Button style={[styles.button, {
                            backgroundColor: '#F2EBDE',
                            borderColor: '#F2EBDE'
                        }]}>
                            <Text>
                                Email
                            </Text>
                        </Button>
                    </Layout>

                    <Text style={[styles.coloredText, styles.text, styles.bottomText]}>
                        By continuing, you agree to our {' '}
                        <Text style={{ fontWeight: 'bold', color: '#A68038' }}>
                            Terms & Conditions
                        </Text> and {' '}
                        <Text style={{ fontWeight: 'bold', color: '#A68038' }}>
                            Privacy Policy
                        </Text>
                    </Text>
                </Layout>

            </OverallLayout>
        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    // button
    bottomText: {
        textAlign: 'center'
    },
    text: {
        paddingTop: 4,
        paddingBottom: 12
    },
    coloredText: {
        color: '#A68038',
        paddingTop: 4,
        paddingBottom: 12
    },
    button: {
        marginVertical: 5,
        borderRadius: 50,
        width: 358,
        height: 48
    },
    layout: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})