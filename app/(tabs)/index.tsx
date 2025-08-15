import CategoriesScreen from "@/screens/CategoriesScreen";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: "All Categories" });
  }, [navigation]);

  return (
    <>
      <StatusBar style={"light"} />
      {/* <NavigationContainer> */}
      <CategoriesScreen />
      {/* </NavigationContainer> */}
    </>
  );
}
