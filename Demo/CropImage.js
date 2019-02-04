import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
const { height, width } = Dimensions.get("window");
export default class CropImage extends Component {
  _openImagePicker() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then((image) => {
      console.log(image);
    });
  }
  render() {
    return (
      <View style={styles.contianer}>
        <TouchableOpacity
          onPress={this._openImagePicker}
          style={{
            height: 60,
            width: width - 20,
            borderWidth: 1,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>OPEN IMAGE PICKER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
