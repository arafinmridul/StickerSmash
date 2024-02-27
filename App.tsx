import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker"; // asterisk (*) is used to import all the named exports from a module

import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
    const pickImageAsync = async () => {
        // launchImageLibraryAsync() method returns an object containing information about the selected image
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true, // crop the image
            quality: 1,
        });

        if (!result.canceled) {
            console.log(result);
        } else {
            alert("You haven't selected an image");
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={PlaceholderImage} />
            </View>
            <View style={styles.footerContainer}>
                <Button
                    label="Choose a photo"
                    theme={"primary"}
                    onPress={pickImageAsync}
                />
                <Button
                    label="Use this photo"
                    theme={"secondary"}
                    onPress={null}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: "center",
    },
});
