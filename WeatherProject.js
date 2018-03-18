import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";

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
    console.log('value', event.nativeEvent.text);
    console.log("yeah");
    let zip = event.nativeEvent.text;
    this.setState({
      zip: event.nativeEvent.text
    });
  };

  render() {
    let content = null;

    if (this.state.forecast !== null) {
      content = (
        <Forecast main = { this.state.forecast.main }
          description = { this.state.forecast.description }
          temp = { this.state.forecast.temp }
        />
      );
    }

    return (
      <View style = { styles.container }>
        <Text style = { styles.welcome }>
          You input { this.state.zip }
        </Text>
        { content }
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
