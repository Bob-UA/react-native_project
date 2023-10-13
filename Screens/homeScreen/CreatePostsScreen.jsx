import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { styles } from "../styles";
import { FontAwesome } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  const [hasCameraPermition, setHasCameraPermition] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
  const [cameraShow, setCameraShow] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermition(cameraStatus.status === "granted");
    })();
  }, []);

  const toggleTurnForamera = () => {
    setCameraShow(!cameraShow);
  }

  return (
    <View style={styles.createPostsMainContainer}>
      <View style={styles.photoPreviewContainer}>
        <TouchableOpacity onPress={toggleTurnForamera}>
          <View style={styles.snapContainer}>
            <FontAwesome name="camera" size={24} color="#BDBDBD" />
          </View>
        </TouchableOpacity>
      </View>
      {cameraShow ? (
        <View style={styles.cameraContainer}>
          <TouchableOpacity
            style={styles.cameraCloseButton}
            onPress={toggleTurnForamera}
          >
            <FontAwesome name="close" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Camera
            style={styles.camera}
            ref={cameraRef}
            type={type}
            flashMode={flash}
          ></Camera>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

export default CreatePostsScreen;