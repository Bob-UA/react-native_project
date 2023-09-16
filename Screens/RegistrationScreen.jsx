import { useEffect, useState } from "react";
import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native"


export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <View style={styles.container}>
            <View style={styles.photoContainer}></View>
            <Text style={styles.titleText}>Registration</Text>
            <TextInput
              style={styles.input}
              placeholder="Login"
              type="login"
              name="login"
              value={login}
              required
              onChange={setLogin}
            />
            <TextInput
              style={styles.emailInput}
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              required
              onChange={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              required
              onChange={setPassword}
            />
            <Button
              style={styles.button}
              title="Registration"
              onPress={() => Alert.alert("Simple Button pressed")}
            />
          </View>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  container: {
    position:"relative",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    paddingBottom: 45,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  photoContainer: {
    borderRadius:16,
    top:-50,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position:"absolute",
  },
  titleText: {
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  input: {
    borderRadius: 8,
    width: "100%",
    backgroundColor: "#F6F6F6",
    padding: 16,
  },
  emailInput: {
    borderRadius: 8,
    width: "100%",
    backgroundColor: "#F6F6F6",
    padding: 16,
    marginBottom: 16,
    marginTop: 16,
  },
  "input:not(:last-child)": {
    marginBottom: 16,
  },
  button: {
    marginTop: 43,
    width: "100%",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
  },
});