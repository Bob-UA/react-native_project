import { useEffect, useState } from "react";
import {
  ImageBackground,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

const LoginScreen = () => {
  const [email, onChangeTextEmail] = useState("");
  const [password, onChangeTextPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

      const onLogin = () => {
        console.log("email: " + email);
        console.log("password: "+ password);
      };

  return (
    <View>
      <ImageBackground
        source={require("../src/img/photo_bg.jpg")}
        style={styles.image}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginContainer}>
            <Text style={styles.titleText}>Login</Text>
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
            <Pressable onPress={onLogin} style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>
            <Pressable style={styles.signInButton}>
              <Text style={styles.signInButtonText}>
                Don't have an account? Sign up
              </Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
