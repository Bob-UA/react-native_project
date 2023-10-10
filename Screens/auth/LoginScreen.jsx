import { useEffect, useState } from "react";
import {
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../styles";

const LoginScreen = () => {
  const [email, onChangeTextEmail] = useState("");
  const [password, onChangeTextPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const reset = () => {
    onChangeTextEmail("");
    onChangeTextPassword("");
  };

  const onLogin = () => {
    console.log("email: " + email);
    console.log("password: " + password);
    if (!email || !password) {
      return;
    }
    navigation.navigate("Home");
    reset();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ImageBackground
          source={require("../../src/img/photo_bg.jpg")}
          style={styles.image}
        >
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
            <TouchableOpacity onPress={onLogin} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.signInButtonText}>
                Don't have an account? Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
