import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <HomeScreen></HomeScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    }

});
