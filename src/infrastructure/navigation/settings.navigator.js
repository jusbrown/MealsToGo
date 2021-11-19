import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";

const Stack = createStackNavigator();

export const SettingsNavigator = () => (
  <Stack.Navigator
    headerMode="screen"
    screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
  >
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Favourites" component={FavouritesScreen} />
    <Stack.Screen name="Camera" component={CameraScreen} />
  </Stack.Navigator>
);
