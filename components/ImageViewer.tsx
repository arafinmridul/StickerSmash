import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage
        ? { uri: selectedImage }
        : placeholderImageSource;
    // <Image> component expects its source prop to be either a string URI or an object with a uri property for network and local images
    return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 410,
        borderRadius: 18,
    },
});
