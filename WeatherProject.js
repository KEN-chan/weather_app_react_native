import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Button } from 'react-native';
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
    let zip = event.nativeEvent.text;

    OpenWeatherMap.fetchForecast(zip).then((forecast) => {
      console.log(forecast);
      this.setState({
        forecast: forecast,
      });
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
      <ImageBackground
        source = { require("./assets/flowers.png") }
        style = { styles.background }
      >
        <View style = { styles.container }>
          <Text style = { styles.welcome }>
            You input { this.state.zip }
          </Text>
          { content }
          <TextInput
            style = { styles.input }
            onSubmitEditing = { this.handleTextChange }
          />
          <Button
            onPress = { () => {console.log("helllo");} }
            title = "Press me"
            color = "#841584"
            accessibilityLabel = "Press this button"
          />

        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
  },
  background: {
    flex: 1,
    flexDirection: "column",
    resizeMode: "cover",
  },
  welcome: { fontSize: 20, textAlign: "center", margin: 10 },
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: "center"
  },
  backdrop: {
    flex: 1,
    flexDirection: "column",
  },
});

export default WeatherProject;
