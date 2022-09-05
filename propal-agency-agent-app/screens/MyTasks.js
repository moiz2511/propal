import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Colors from '../constants/Colors';

export default function MyTasks() {
  const myTasks=[
    {
      id:'3231',
      name:"Hamza",
      area:"Bahria Town",
      time:"2 PM Sunday,22/01/22",
      user:"Usama Nawaz",
      location:'833 E Bahria Town',
      propertyType:'comercial',
      propertyArea:'5 marla',
      owner:'Kashif Malik',
      ownerContact:'03982332323',
      clientContact:"43424234234"
    },
    {
      id:'32dsa1',
      name:"Ali Raza",
      area:"Izmir Town",
      time:"4 PM Sunday,22/01/22",
      user:"Usama Nawaz",
      location:'833 E Bahria Town',
      propertyType:'comercial',
      propertyArea:'5 marla',
      owner:'Kashif Malik',
      ownerContact:'03982332323',
      clientContact:"43424234234"
    },
    {
      id:'32df31',
      name:"Junaid Iqbal",
      area:"LDA Avenu",
      time:"8 AM Monday,23/01/22",
      user:"Usama Nawaz",
      location:'833 E Bahria Town',
      propertyType:'comercial',
      propertyArea:'5 marla',
      owner:'Kashif Malik',
      ownerContact:'03982332323',
      clientContact:"43424234234"
    },
    {
      id:'32df31',
      name:"Junaid Iqbal",
      area:"LDA Avenu",
      time:"8 AM Monday,23/01/22",
      user:"Usama Nawaz",
      location:'833 E Bahria Town',
      propertyType:'comercial',
      propertyArea:'5 marla',
      owner:'Kashif Malik',
      ownerContact:'03982332323',
      clientContact:"43424234234"
    },
    {
      id:'32df31',
      name:"Junaid Iqbal",
      area:"LDA Avenu",
      time:"8 AM Monday,23/01/22",
      user:"Usama Nawaz",
      location:'833 E Bahria Town',
      propertyType:'comercial',
      propertyArea:'5 marla',
      owner:'Kashif Malik',
      ownerContact:'03982332323',
      clientContact:"43424234234"
    },
    {
      id:'32df31',
      name:"Junaid Iqbal",
      area:"LDA Avenu",
      time:"8 AM Monday,23/01/22",
      user:"Usama Nawaz",
      location:'833 E Bahria Town',
      propertyType:'comercial',
      propertyArea:'5 marla',
      owner:'Kashif Malik',
      ownerContact:'03982332323',
      clientContact:"43424234234"
    },
  ]
  return (
    <ScrollView >
      <View style={styles.top}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          All Assingned Tasks
        </Text>
      </View>
      {myTasks.map((task)=>(
        <View style={{backgroundColor:"#454545",padding:20,margin:20}}>
          <Text style={{fontWeight:'bold', color:'white'}}>
            Task Name: {task.name}
          </Text>
          <Text style={{fontWeight:'bold', color:'white'}}>
            Client Name: {task.user}
          </Text>
          <Text style={{fontWeight:'bold', color:'white'}}>
            Owner Name: {task.owner}
          </Text>
          <Text style={{fontWeight:'bold', color:'white'}}>
            Owner Contact: {task.ownerContact}
          </Text>
          <Text style={{fontWeight:'bold', color:'white'}}>
            Client Contact: {task.clientContact}
          </Text>
          <Text style={{fontWeight:'bold', color:'white'}}>
            Property Address: {task.location}
          </Text>
          <Text style={{fontWeight:'bold', color:'white'}}>
            Property Type: {task.propertyType}
          </Text>
          <Text style={{fontWeight:'bold', color:'white'}}>
            Property Type: {task.propertyType}
          </Text>
          <Text style={{fontWeight:'bold', color:'white'}}>
            Meeting At: {task.time}
          </Text>
          
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
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
});
