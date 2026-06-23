import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ExpenseListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Expense List</Text>

      <View style={styles.card}>
        <Text>Food</Text>
        <Text>₹500</Text>
      </View>

      <View style={styles.card}>
        <Text>Travel</Text>
        <Text>₹1000</Text>
      </View>

      <View style={styles.card}>
        <Text>Shopping</Text>
        <Text>₹1500</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
});