import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import BackButton from './components/BackButton';
import Header from './components/Header';
import { ScreenType } from './constance/constance';
import AddNote from './screens/AddNote';
import AllNotesScreen from './screens/AllNotesScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [screen, setScreen]= useState(ScreenType.home);
  let content;
  if(screen===ScreenType.addNote){
    content= <AddNote></AddNote>
  }
  else if(screen===ScreenType.allNotes){
    content= <AllNotesScreen/>
  }
  else if(screen=== ScreenType.home){
    content = <HomeScreen onExit={(data) => {
      setScreen(data)
    }} />
  }
  return (
    <View style={styles.container}>
      <Header />
      <BackButton></BackButton>
      <StatusBar style="auto" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    }

});
