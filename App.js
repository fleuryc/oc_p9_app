import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Button,
  FlatList,
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";

class App extends Component {
  state = {
    userID: null,
    recommendations: null,
  };

  getRecommendations = async () => {
    try {
      console.log("Getting recommendations...");
      const {
        data: { id: userID, articles: recommendations },
      } = await axios.get(
        Constants.manifest.extra.recommenderApiUrl +
          this.state.userID.toString(),
        {
          params: {
            code: Constants.manifest.extra.recommenderApiCode,
          },
        }
      );
      this.setState({ recommendations });
    } catch (error) {
      console.log(error);
      const recommendations = [];
      this.setState({ recommendations });
    }
  };

  reset = async () => {
    const recommendations = null;
    const userID = null;
    this.setState({ userID, recommendations });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.recommendations ? (
          <View>
            <Text style={styles.text}>Recommendations</Text>
            {this.state.recommendations.length > 0 ? (
              <FlatList
                style={styles.list}
                data={this.state.recommendations.map((key) => ({
                  key: key.toString(),
                }))}
                renderItem={({ item }) => <Text>Article #{item.key}</Text>}
              />
            ) : (
              <Text style={styles.error}>No recommendations</Text>
            )}
            <Button title="Reset" onPress={this.reset} />
          </View>
        ) : (
          <View>
            <Text style={styles.text}>Enter User ID</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={(value) => this.setState({ userID: value })}
                value={this.state.userID}
                placeholder="User ID"
                keyboardType="numeric"
              />
            </SafeAreaView>
            <Button
              title="Get recommendations"
              onPress={this.getRecommendations}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: { fontSize: 36, margin: 20 },
  error: { color: "red", margin: 20 },
  input: {
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
  list: {
    margin: 20,
  },
});

export default App;
