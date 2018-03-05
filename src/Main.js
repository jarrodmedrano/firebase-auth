import React from "react";
import { StyleSheet, Text, View } from "react-native";
//** Firebase **//
import * as firebase from "firebase";
import firebaseConfig from "./config/keys";
//** Redux **//
import { connect } from "react-redux";
//** ----- **//
import LoginForm from "./components/forms/LoginForm";

let firebaseApp;

class Main extends React.Component {
  componentDidMount() {
    firebaseApp = firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginForm
          onLoginSubmit={() => this.setState({ showFormReview: true })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

function mapStateToProps(state) {
  return state;
}

export default (Main = connect(mapStateToProps)(Main));
