/* @flow */
import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import type { NavigationScreenProp } from "react-navigation";
import { removeKnownDevice } from "../../actions/ble";
import DeviceNameRow from "./DeviceNameRow";
import FirmwareVersionRow from "./FirmwareVersionRow";

class ManagerDevice extends Component<{
  navigation: NavigationScreenProp<*>,
}> {
  static navigationOptions = {
    title: "Device",
  };

  render() {
    const deviceId = this.props.navigation.getParam("deviceId");
    const meta = this.props.navigation.getParam("meta");
    return (
      <ScrollView style={styles.root} contentContainerStyle={styles.container}>
        <DeviceNameRow deviceId={deviceId} />
        <FirmwareVersionRow firmwareInfo={meta.firmwareInfo} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    paddingVertical: 20,
  },
});

export default connect(
  null,
  {
    removeKnownDevice,
  },
)(ManagerDevice);