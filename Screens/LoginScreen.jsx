import { useEffect, useState } from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <View style={styles.loginContainer}>
          <Text style={styles.titleText}>Login</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            required
            onChange={setEmail}
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
              onChange={setPassword}
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
              Don't have an account? Sign up
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
