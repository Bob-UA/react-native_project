import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

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
  // ==========Home Screen Styles==================
  plusButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
  // ==========Posts Screen Styles==================

  postsContainer: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: "auto",
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    width: ScreenWidth,
    height: "100%",
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: -16,
    paddingBottom: 11,
  },
  logoutButton: {
    position: "absolute",
    right: 16,
    bottom: 11,
  },
  textHeader: {
    fontSize: 17,
    fontFamily: "Roboto-Medium",
  },
  postsFooter: {
    paddingTop: 9,
  },
  //==========================Create post screen======================
  createPostsMainContainer: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
  },
  photoPreviewContainer: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  snap: {},
  snapContainer: {
    padding: 18,
    backgroundColor: "#ffffff",
    borderRadius: 50,
  },
  cameraContainer: {
    zIndex:100,
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  camera: {
    width: ScreenWidth,
    height: ScreenHeight,
  },
  cameraCloseButton: {
    zIndex:200,
    position: "absolute",
    top: 20,
    left: 20,
    padding: 10,
  }
});



