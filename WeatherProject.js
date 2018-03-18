import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';

type Props = {

};

type State = {
  zip: string,
  forecast: any,
};

class WeatherProject extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { zip: "", forecast: null };
  }

  handleTextChange = event => {
    this.setState({
      zip: event.nativeEvent.text
    });
  };

  render() {
    return (
      <View style = { styles.container }>
        <Text style = { styles.welcome }>
          You input { this.state.zip }
        </Text>
        <TextInput
          style = { styles.input }
          onSubmitEditing = { this.handleTextChange }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: { fontSize: 20, textAlign: "center", margin: 10 },
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: "center"
  }
});

export default WeatherProject;
