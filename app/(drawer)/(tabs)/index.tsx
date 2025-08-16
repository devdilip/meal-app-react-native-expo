import CategoriesScreen from "@/screens/CategoriesScreen";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";
import { Pressable } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "All Categories",
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={{ paddingHorizontal: 16 }}
        >
          <Ionicons name="menu" size={24} color="white" />
        </Pressable>
      ),
    });
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
