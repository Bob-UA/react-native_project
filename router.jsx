import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import Home from "./Screens/homeScreen/Home";
import PostsScreenHeader from "./Screens/homeScreen/header/postsScreenHeader";

const AuthStack = createStackNavigator();


const setRoute = (isAuth) => {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        {!isAuth ? (
          <>
            <AuthStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <AuthStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <AuthStack.Screen
              name="Home"
                options={{
                  headerShown: false}}
              component={Home}
            />
          </>
        )}
      </AuthStack.Navigator>
    );
};

export default setRoute;
