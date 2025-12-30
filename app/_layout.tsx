import { Zero } from "@rocicorp/zero";
import { ZeroProvider } from "@rocicorp/zero/react";
import { Slot } from "expo-router";
import { schema } from "../schema";

const zero = new Zero({
  server: process.env.EXPO_PUBLIC_ZERO_SERVER,
  schema,
  kvStore: "idb",
  userID: "anon",
});

export default function Layout() {
  return (
    <ZeroProvider zero={zero}>
      <Slot />
    </ZeroProvider>
  );
}
