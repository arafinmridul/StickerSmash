import { StyleSheet, Text, Pressable, View } from "react-native";

// Pressable component is a core component wrapper that can detect various stages of interactions, from basic single-tap events to advanced events such as a long press

export default function Button({ label }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={styles.button}
                onPress={() => alert("You pressed button")}
            >
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16,
    },
});
