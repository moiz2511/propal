import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Colors from '../constants/Colors';

export default function Home() {
  const name="Kashif Hafeez";
  const estate="AlNoor Estates Agency"
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var meetings=[
    {
      id:'3231',
      name:"Hamza",
      area:"Bahria Town",
      time:"2 PM Sunday,22/01/22"
    },
    {
      id:'32dsa1',
      name:"Ali Raza",
      area:"Izmir Town",
      time:"4 PM Sunday,22/01/22"
    },
    {
      id:'32df31',
      name:"Junaid Iqbal",
      area:"LDA Avenu",
      time:"8 AM Monday,23/01/22"
    },
    
  ]
  const tasks="4"
  return (
    <View style={styles.container}>
      <View style={styles.welcomeCon}>
        <Text style={styles.welcomeTxt}>Welcome {name}!</Text>
      </View>
      <Text style={{fontWeight:'bold'}}>{estate}</Text>
      
      <Text style={{fontWeight:'bold'}}>Date: {date}/{month}/{year}</Text>
      <View style={{backgroundColor:"white",marginTop:10,alignItems:'center'}}>
        <Text style={{fontSize:20}}>Assigned Tasks</Text>
        <Text style={{fontSize:70}}>{tasks}</Text>
      </View>
      <View style={{backgroundColor:"white",marginTop:10,alignItems:'center'}}>
        <Text style={{fontSize:20}}>
          Upcomming Meetings
        </Text>
        <ScrollView>
          {meetings.map((meet)=>(
            <View style={{backgroundColor:'tomato',marginTop:10,padding:10}}>
              <Text style={{color:'white' ,fontWeight:'bold'}}>Meeting with {meet.name} in {meet.area} at {meet.time}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  welcomeTxt:{
    fontWeight:'bold',
    fontSize: 39,
    color:'white'
  },
  welcomeCon:{
    marginVertical:10,
    padding:5,
    backgroundColor:Colors.thirdAccentColor
  }
});
