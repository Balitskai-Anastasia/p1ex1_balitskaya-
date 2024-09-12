import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Button, View } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>код код код кот</Text>
      <Card>
        <AssetExample />
        <Button title="нажми" onPress={toggleVisibility} color='#EE82EE' />
        {isVisible && (
          <View style={styles.textContainer}>
            <Text style={styles.additionalText}>Выхухоль</Text>
          </View>
        )}
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFB6C1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FFF0F5', 
  },
  additionalText: {
    fontSize: 16,
    color: '#000', 
  },
});
