import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import { Feather, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const Settings = (props) => {
  const [email, setEmail] = useState("this@youremail.com");
  const [pressed, setPressed] = useState(0);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmation, setConfirmation] = useState(0);
  const confirmationFunc = () => {
    if (confirmation === 1) {
      return (
        <View style={{ marginTop: 10, alignSelf: "center", width: "80%" }}>
          <Text style={{ color: "#454545" }}>
            Password updated succesfully!
          </Text>
        </View>
      );
    }
  };
  const passwordField = () => {
    if (pressed === 0) {
      return (
        <View style={styles.email}>
          <Text style={{ color: "#454545" }}>Password</Text>
          <Text style={{ color: "#454545", fontWeight: "bold" }}>
            *********
          </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              setPressed(1);
            }}
          >
            <Text style={{ color: "#454545" }}>
              Change <Feather name="arrow-right" color="#4169E1" size={15} />
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.email}>
          <Text style={{ color: "#454545" }}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.inputField}
            placeholder="Enter Current Password"
            placeholderTextColor={"white"}
            onChangeText={(val) => setCurrentPassword(val)}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.inputField}
            placeholder="Enter New Password"
            placeholderTextColor={"white"}
            onChangeText={(val) => setNewPassword(val)}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.inputField}
            placeholder="Confirm New Password"
            placeholderTextColor={"white"}
            onChangeText={(val) => setConfirmPassword(val)}
          />
          <Text style={{ marginTop: 10, color: "#454545" }}>
            <Entypo name="dot-single" color="red" size={20} />
            Must contain atleast 8 characters.
          </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              console.log(currentPassword, newPassword, confirmPassword);
              setPressed(0);
              setConfirmation(1);
            }}
          >
            <Text style={{ color: "#454545" }}>
              Update{" "}
              <MaterialCommunityIcons name="update" color="#4169E1" size={15} />
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Personal Information
        </Text>
      </View>
      <View style={styles.email}>
        <Text style={{ color: "#454545" }}>Email</Text>
        <Text style={{ color: "#454545", fontWeight: "bold" }}>{email}</Text>
      </View>
      {passwordField()}
      {confirmationFunc()}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  // main: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  top: {
    // position: "absolute",
    // top: 30,
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    width: "100%",
    height: 50,
    padding: 1,
    justifyContent: "center",
    borderWidth: 5,
    borderColor: Colors.accentColor,
    marginTop: 30,
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
  },

  email: {
    backgroundColor: Colors.thirdColor,
    // height: 100,
    width: "80%",
    alignSelf: "center",
    marginTop: 15,
    padding: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonStyle: {
    padding: 5,
    backgroundColor: "#EBECF0",
    // width: 80,
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 15,
  },
});
