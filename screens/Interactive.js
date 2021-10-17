import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Keyboard } from "react-native";
import GreaterThanFive from "../components/GreaterThanFive";
import Header from "../components/Header";
import LessThanFive from "../components/LessThanFive";

const Interactive = () => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [activeAmount, setActiveAmount] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header color={"white"} logoColor={"white"} />
          <View
            style={{
              height: 0.2,
              width: "95%",
              backgroundColor: "white",
              zIndex: 500,
              marginTop: 10,
              left: 10
            }}
          ></View>
        <View
          style={{
            height: "58%",
            bottom: 100,
            backgroundColor: "#057DCD",
            borderBottomLeftRadius: 45,
            borderBottomRightRadius: 45,
          }}
        >
          <Text
            style={{
              color: "white",
              marginTop: 120,
              fontSize: 30,
              fontWeight: "300",
              marginLeft: 10,
              fontFamily: 'GeoramaReg'
            }}
          >
            New To Investing?
          </Text>
          <View style={styles.introText}>
            <Text style={{ color: "white", fontFamily: 'GeoramaLight', fontSize: 13 }}>
              Are you a first-time investor who is unsure where to put your
              money in the stock market? This calculator will tell you exactly
              how much you should invest in each segment of the market based on
              your investment budget. Remember to only invest what you can
              afford to lose, as markets are volatile and you may have to hold
              your shares for an extended period of time.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Investment Budget"
              placeholderTextColor={'white'}
              value={enteredAmount}
              onChangeText={(amount) => setEnteredAmount(amount)}
              keyboardType='numeric'
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => setActiveAmount(enteredAmount)}>
              <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: "42%" }}>
          {activeAmount <= 5000 && activeAmount > 0 && (
            <LessThanFive dollar={enteredAmount} />
          )}
          {activeAmount > 5000 && <GreaterThanFive dollar={enteredAmount} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Interactive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  input: {
    borderBottomColor: "white",
    color: "white",
    borderBottomWidth: 1,
    width: "85%",
  },
  inputContainer: {
    marginTop: 40,
    marginLeft: 10,
  },
  introText: {
    margin: 10,
    marginTop: 25,
    width: "90%",
  },
  buttonContainer: {
    marginTop: 25,
    marginLeft: 10,
  },
  button: {
    width: "30%",
    backgroundColor: "white",
    alignItems: "center",
    height: 35,
    justifyContent: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "black",
    textTransform: "uppercase",
    fontSize: 14,
    fontFamily: 'GeoramaReg'
  },
});
