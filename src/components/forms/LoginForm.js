import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormField from "./elements/FormField";
import fields from "./elements/fields";
import _ from "lodash";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Text, Button } from "native-base";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Form
} from "native-base";
const SCREEN_WIDTH = Dimensions.get("window").width;

class LoginForm extends Component {
  renderFields() {
    return _.map(fields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={FormField}
          label={label}
          name={name}
          style={{ flex: 1 }}
        />
      );
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Card>
              <CardItem header>
                <Text>Login Form</Text>
              </CardItem>
              <CardItem>
                <Body>
                  {this.renderFields()}
                  <Button
                    block
                    primary
                    onPress={this.props.handleSubmit(this.props.onLoginSubmit)}
                    style={styles.button}
                  >
                    <Text>Submit Now</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
          </Form>
        </Content>
      </Container>
    );
  }
}

function validate(values) {
  const errors = {};

  // errors.recipients = validateEmails(values.recipients || "");

  _.each(fields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10
  }
});

export default reduxForm({
  validate,
  form: "LoginForm",
  destroyOnUnmount: false
})(LoginForm);
