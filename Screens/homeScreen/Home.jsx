import React from "react";
import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import { View } from "react-native";
import { styles } from "../styles";
import PostsScreenHeader from "./header/postsScreenHeader";
const MainTab = createBottomTabNavigator();


const Home = () => {
  return (
    <>
      <MainTab.Navigator
        initialRouteName="Posts"
        screenOptions={{
          "tabBarShowLabel": false,
          "tabBarStyle": {
            // height: 83,
            // paddingBottom: 34,
          }
        }}
      >
        <MainTab.Screen
          name="Posts"
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Feather name="grid" size={size} color="black" />
            ),
            headerTitle: () => <PostsScreenHeader />,
          }}
          component={PostsScreen}
        />
        <MainTab.Screen
          name="Create Posts"
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <View style={styles.plusButton}>
                <Feather name="plus" size={size} color="#ffffff" />
              </View>
            ),
          }}
          component={CreatePostsScreen}
        />
        <MainTab.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Feather name="user" size={size} color="black" />
            ),
          }}
          component={ProfileScreen}
        />
      </MainTab.Navigator>
    </>
  );
};

export default Home;
