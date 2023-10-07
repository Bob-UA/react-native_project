import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  addIcon: {
    top: 81,
    right: 0,
    position: "absolute",
  },
  passwordContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
  },
  toggle: {
    right: 16,
    top: 16,
    position: "absolute",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    },
  loginContainer: {
    position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 111,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  registrationContainer: {
    position: "relative",
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
    borderRadius: 16,
    top: -50,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
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
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 43,
    width: "100%",
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  signInButton: {
    marginTop: 16,
  },
  signInButtonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});

