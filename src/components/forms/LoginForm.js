import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormField from "./elements/FormField";
import fields from "./elements/fields";
import _ from "lodash";
import { View, TouchableOpacity, Text } from "react-native";

class LoginForm extends Component {
  renderFields() {
    return _.map(fields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={FormField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <View>
        {this.renderFields()}
        <TouchableOpacity
          onPress={this.props.handleSubmit(this.props.onLoginSubmit)}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
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

export default reduxForm({
  validate,
  form: "LoginForm",
  destroyOnUnmount: false
})(LoginForm);
