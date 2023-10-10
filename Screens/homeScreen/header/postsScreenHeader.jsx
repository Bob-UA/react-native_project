import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "../../styles";

export default function PostsScreenHeader() {
  return (
  <>
    <View style={styles.headerContainer}>
      <Text>Publication</Text>
      <Feather
        style={styles.logoutButton}
        name="log-out"
        size={24}
        color="#BDBDBD"
      />
    </View>
  </>
);}
