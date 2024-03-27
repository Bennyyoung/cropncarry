import { Layout as UiKittenLayout } from "@ui-kitten/components";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

export default function OverallLayout({ children }: PropsWithChildren) {

    return (
        <UiKittenLayout style={styles.container}>
            {children}
        </UiKittenLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        paddingTop: 24,
        paddingBottom: 20,
        paddingHorizontal: 16,
    }
})