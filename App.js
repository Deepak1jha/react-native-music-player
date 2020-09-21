import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { AntDesign,Entypo,Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{alignSelf:"stretch"}}>
        <View style={{marginHorizontal:32 ,marginTop:32}}>
          <View style={styles.topContainer}>
          <AntDesign name={"arrowleft"} size={33}/>
          </View>
        </View>

      </SafeAreaView>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dee9fd',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  topContainer:{

  }
});
