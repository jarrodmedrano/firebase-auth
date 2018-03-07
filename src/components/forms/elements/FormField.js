import React, { Component } from "react";
import { Item, Input, Text, Label } from "native-base";
import { StyleSheet, Dimensions } from "react-native";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <React.Fragment>
      <Item stackedLabel style={{ width: "100%" }}>
        <Label>{label}</Label>
        <Input {...input} />
      </Item>
      <Text style={styles.error}>{touched && error}</Text>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red"
  }
});
