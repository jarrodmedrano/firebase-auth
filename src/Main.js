import React from "react";
import { StyleSheet, Text, View } from "react-native";
//** Firebase **//
import * as firebase from "firebase";
import firebaseConfig from "./config/keys";
//** Redux **//
import { connect } from "react-redux";
//** ----- **//
import LoginForm from "./components/forms/LoginForm";
import { Container } from "native-base";
let firebaseApp;

class Main extends React.Component {
  componentDidMount() {
    firebaseApp = firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Container style={styles.container}>
        <LoginForm
          onLoginSubmit={() => this.setState({ showFormReview: true })}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

function mapStateToProps(state) {
  return state;
}

export default (Main = connect(mapStateToProps)(Main));
