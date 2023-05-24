import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Affirmations } from "../UniLove/affirmations";

export default function App() {
  const [currentAffirmationIndex, setCurrentAffirmationIndex] = useState(0);

  useEffect(() => {
    
    const today = new Date().getDate();
    setCurrentAffirmationIndex(today % Affirmations.length);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#D8BFD8", alignItems: "center", justifyContent: "center", paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 40, color: "#524656", marginBottom: 20, fontWeight: "bold", textAlign: "center" }}>
        Daily Affirmation  
      </Text>

      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontSize: 30, color: "#524656", textAlign: "center", lineHeight: 28 }}>
          {Affirmations[currentAffirmationIndex].DayAffirm }&#x2728;
        </Text>
      </View>

      
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f4511e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
