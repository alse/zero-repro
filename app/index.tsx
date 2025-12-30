import { queries } from "@/queries";
import { useQuery, useZero } from "@rocicorp/zero/react";
import { Button, StyleSheet, Text, View } from "react-native";
import type { Schema } from "../schema";

export default function Home() {
  const z = useZero<Schema>();
  const [users, status] = useQuery(queries.allUsers());

  console.log("Query count:", users.length);
  console.log("Status:", status.type);

  const checkIndexedDB = async () => {
    // @ts-expect-error - accessing internal Zero inspector
    const rows = await window.__zero?.inspector?.client?.rows("users");
    console.log("IndexedDB rows:", rows?.length);
    console.log("Query rows:", users.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Status: {status.type}</Text>
      <Text style={styles.text}>User Count: {users.length}</Text>
      <Button title="Check IndexedDB" onPress={checkIndexedDB} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
