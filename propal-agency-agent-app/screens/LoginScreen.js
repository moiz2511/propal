import React, { useState, Component } from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,TextInput} from 'react-native';
import { Feather } from "@expo/vector-icons";


export default function Login() {
  const [usrName, setUsrName] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const image = {
    uri: 'https://static.photocdn.pt/images/articles/2021/08/03/how_to_take_real_estate_exterior_photos.webp'
  };
  return (
    <View style={styles.main}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <TextInput
            style={styles.inputField}
            placeholder="Enter User Name"
            placeholderTextColor={"white"}
            onChangeText={(val) => {
              setUsrName(val);
            }}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.inputField}
            placeholder="Enter Your Password"
            placeholderTextColor={"white"}
            onChangeText={(val) => {
              setMyPassword(val);
            }}
          />
      <TouchableOpacity style={styles.buttonSty}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Forgot Credentials
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              LogIn <Feather name="arrow-right" color="#4169E1" size={18} />
            </Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    // opacity:0.7
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  inputField: {
    paddingLeft: 5,
    height: 37,
    backgroundColor: "#454545",
    color: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 8,
    marginTop: 10,
    width: "80%",
    alignSelf: "center",
  },
  buttonSty: {
    alignSelf: "flex-end",
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: "#454545",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignSelf: "center",
    padding: 5,
    justifyContent: "center",
  },
  errorMsgStyle: {
    alignSelf: "flex-start",
    marginRight: 20,
    marginTop: 5,
    padding: 5,
    color: "red",
    fontWeight: "bold",
  },
  picker: {
    backgroundColor: "#f5f5f5",
    width: "30%",
    alignSelf: "center",
    borderRadius: 10,
  },
});
