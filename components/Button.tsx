import { StyleSheet, Text, Pressable, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

// Pressable component is a core component wrapper that can detect various stages of interactions, from basic single-tap events to advanced events such as a long press

export default function Button({ label, theme, onPress }) {
    if (theme === "primary") {
        // Using inline styles allows overriding the default styles for a specific value
        return (
            <View
                style={[
                    styles.buttonContainer,
                    {
                        borderWidth: 4,
                        borderColor: "#ffd33d",
                        borderRadius: 18,
                    },
                ]}
            >
                <Pressable
                    style={[styles.button, { backgroundColor: "#fff" }]}
                    onPress={onPress}
                >
                    <FontAwesome
                        name="picture-o"
                        size={18}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
                        {label}
                    </Text>
                </Pressable>
            </View>
        );
    }
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
