"use strict";

import React, { Component } from "react";

import { StyleSheet, StatusBar, UIManager, View, Text ,ImageBackground} from "react-native";

import AV from "leancloud-storage";
import RNLeanCloud from "react-native-leancloud";

import Main from "./containers/Main";
import CodePush from "react-native-code-push";

import JPushModule from "jpush-react-native";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

AV.init({
  appId: RNLeanCloud.appId,
  appKey: RNLeanCloud.appKey
});

class App extends Component {


  render() {
    return (
      <View style={styles.container}>
      {/* <ImageBackground source={require('../images/play.png')} style={styles.background} > */}
        <StatusBar
          backgroundColor="#FAB520"
          animated={true}
          translucent={true}
          barStyle="light-content"
        />
        <Main />
        {/* </ImageBackground> */}

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background:{
    width:null,
    height:null,
  }
})
export default App;
