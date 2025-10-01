import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flexDirection: "column",
    borderColor: "#ffffff",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#4d4d4d",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
  }
});

export default styles;