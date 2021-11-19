import { Camera } from "expo-camera";
import React, { useEffect, useState, useRef, useContext } from "react";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const InnerSnap = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onSnap = async () => {
    if (cameraRef) {
      let photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
      ratio={"16:9"}
    >
      <TouchableOpacity onPress={onSnap}>
        <InnerSnap />
      </TouchableOpacity>
    </ProfileCamera>
  );
};
