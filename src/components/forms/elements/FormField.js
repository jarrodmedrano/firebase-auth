import React from "react";
import { TextInput } from "react-native";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <React.Fragment>
      <TextInput {...input} />
    </React.Fragment>
  );
};
