import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { getItemAsync, setItemAsync } from 'expo-secure-store';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const exampleKey = "myExampleKey";
  const exampleValue = "myExampleValue";
  useEffect(() => {
    getItemAsync(exampleKey).then((exampleValue) => {
      console.log(`Example value: ${exampleValue}`)
    }).catch((error) => {
      // This alert demonstrates the error reproduction:
      alert(error.message);
    });
    setItemAsync(exampleKey, exampleValue).then(()=> {
      console.log("Set successfully!");
    }).catch((error) => {
      console.error("Unexpected error on set");
      console.error(error);
    });
  });
  return (
    <View style={styles.container}>
      <Text>Run this once, make a small change, rebuild, and run again to get the error reproduced.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
