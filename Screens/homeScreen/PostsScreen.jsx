import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "../styles";

const Tabs = createBottomTabNavigator();

const PostsScreen = () => {
  return (
    <>
      <View style={styles.postsContainer}></View>
    </>
  );
};

export default PostsScreen;
