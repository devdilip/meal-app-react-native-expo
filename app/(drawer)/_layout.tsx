import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="(tabs)" options={{ title: "All Categories" }} />
      <Drawer.Screen name="favorites" options={{ title: "Favorites" }} />
    </Drawer>
  );
}
