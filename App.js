import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";

import Button from "./Component/Button"; 
import ImageViewer from './Component/ImageViwer';

const PlaceholderImage = require("./assets/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Pick the photo" />
        <Button label="Use  photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#25292e',
    
    },
  imageContainer: {
    flex: 1,
    paddingTop: 60,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
