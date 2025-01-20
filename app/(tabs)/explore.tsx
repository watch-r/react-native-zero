import { View, Text, StyleSheet } from "react-native";

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Explore</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#f0f0f0",
    },
    text: {
        padding: 24,
        fontSize: 50,
        textAlign: "center",
        backgroundColor: "rgba(145, 28, 28, 0.5)",
        color: "white",
        borderRadius: 10,
    },
});
