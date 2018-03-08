import React from "react";
import { StyleSheet, Text, View } from "react-native";
//** Firebase **//
import * as firebase from "firebase";
import firebaseConfig from "./config/keys";
//** Redux **//
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions";
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
        <LoginForm />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default (Main = connect(mapStateToProps, mapDispatchToProps)(Main));
