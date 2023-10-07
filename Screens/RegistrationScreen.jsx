import { useEffect, useState } from "react";
import { Alert, Button, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"; 
import { styles } from "./styles";


  const RegistrationScreen = () => {
  const [login, onChangeTextLogin] = useState("");
  const [email, onChangeTextEmail] = useState("");
  const [password, onChangeTextPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleChange = (e) => {
  //   console.log(e);
  //   // switch (name) {
  //   //   case "login":
  //   //     return setLogin(value);
  //   //   case "email":
  //   //     return setEmail(value);
  //   //   case "password":
  //   //     return setPassword(value);
  //   //   default:
  //   //     return;
  //   // }
  // };

  return (
    <View>
      <ImageBackground
        source={require("../src/img/photo_bg.jpg")}
        style={styles.image}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.registrationContainer}>
            <View style={styles.photoContainer}>
              <Ionicons
                name="add-circle-outline"
                size={25}
                color="#FF6C00"
                style={[
                  styles.addIcon,
                  {
                    transform: [{ translateX: 12.5 }],
                  },
                ]}
              />
            </View>
            <Text style={styles.titleText}>Registration</Text>
            <TextInput
              style={styles.input}
              placeholder="Login"
              type="login"
              name="login"
              value={login}
              required
              onChangeText={onChangeTextLogin}
            />
            <TextInput
              style={styles.emailInput}
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              required
              onChangeText={onChangeTextEmail}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                secureTextEntry={!showPassword}
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                required
                onChangeText={onChangeTextPassword}
              />
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#aaa"
                style={styles.toggle}
                onPress={toggleShowPassword}
              />
            </View>
            <Pressable onPress={"onPressFunction"} style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>
            <Pressable style={styles.signInButton}>
              <Text style={styles.signInButtonText}>
                Already have an account? Sign in
              </Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
}

export default RegistrationScreen;