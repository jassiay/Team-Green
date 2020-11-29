import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from "./Back";
import { useUserContext } from '../UserContext';
import Message from "./Message";
const FriendMessages = ({ route, navigation }) => {
  const { userData } = useUserContext();  
  console.log(userData.messages)
  const ReceivedMessages = () =>{
    return (
      <View style={{width: '100%', justifyContent: 'center', alignItems: 'flex-start', marginBottom: 20}}>
        <Text style={styles.sectionHeader}>Received messages</Text>
        {"messages" in userData && "received" in userData.messages && Object.keys(userData.messages.received).length > 0 ? 
          Object.values(userData.messages.received).map( msg => (<Message msg={msg} type="From" />))  :
          <Text>No messages sent!</Text>
        }
      </View>
    )
  }
  const SentMessages = () =>{
    return (
      <View style={{width: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
        <Text style={styles.sectionHeader}>Sent messages</Text>
        {"messages" in userData && "sent" in userData.messages && Object.keys(userData.messages.sent).length > 0 ? 
          Object.values(userData.messages.sent).map( msg => (<Message msg={msg} type="To" />)) :
          <Text>No messages sent!</Text>
        }
      </View>
    )
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <BackButton navigation={navigation}/>
      <View style={{width: '50%'}}>
        <ReceivedMessages />
        <SentMessages />  
      </View>    
    </View>
  )
}
const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 5
  }
})
export default FriendMessages;