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
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { styles } from "../styles";

const RegistrationScreen = () => {
  const [login, onChangeTextLogin] = useState("");
  const [email, onChangeTextEmail] = useState("");
  const [password, onChangeTextPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const reset = () => {
    onChangeTextLogin("");
    onChangeTextEmail("");
    onChangeTextPassword("");
  };

  const onRegister = () => {
    console.log("login: " + login);
    console.log("email: " + email);
    console.log("password: " + password);
    if (!email || !password || !login) {
      return;
    }
    navigation.navigate("Home");
    reset("");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ImageBackground
          source={require("../../src/img/photo_bg.jpg")}
          style={styles.image}
        >
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
            <TouchableOpacity onPress={onRegister} style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.signInButtonText}>
                Already have an account? Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
