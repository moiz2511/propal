import React, { useState } from "react";
import { StyleSheet, Text, View,ScrollView,TextInput } from 'react-native';

export default function Inbox() {
  const [message,setMessage]=useState("")
  return (
      <View style={styles.container}>
        <View style={styles.inbox}>
          <Text>Your Conversations</Text>
        </View>
        <View style={styles.conversation}>
          <Text>
            Open A Conversation to Start Chat!
          </Text>
          <View style={{bottom:0,position:'absolute',width:'100%'}}>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Messages"
            placeholderTextColor={"black"}
            onChangeText={(val) => {
              setMessage(val);
            }}
          />
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    height:"100%"
  },
  inbox:{
    flex:0.4,
    // backgroundColor:'blue',
    height:'100%',
    borderRightWidth:1,
    borderRightColor:'black',
    padding:3
},
  conversation:{
    flex:0.6,
    // backgroundColor:'red',
    height:'100%',
    padding:3
},
  inputField: {
    paddingLeft: 5,
    height: 37,
    backgroundColor: "#454545",
    color: "white",
    // borderRadius: 8,
    marginTop: 10,
    width: "100%",
    alignSelf: "center",
    borderWidth:2,
    borderColor:'black'
  },
});
