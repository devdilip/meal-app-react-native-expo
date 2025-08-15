import { useRouter } from "expo-router";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoryGridTail = ({ itemData }) => {
  const router = useRouter();

  return (
    <View style={[style.gridItem]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          style.button,
          pressed ? style.buttonPressed : null,
        ]}
        onPress={() =>
          router.push({
            pathname: "/details",
            params: {
              title: itemData.item.title,
              categoryId: itemData.item.id,
            },
          })
        }
      >
        <View
          style={[
            style.innerContainer,
            { backgroundColor: itemData.item.color },
          ]}
        >
          <Text style={style.title}>{itemData.item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTail;

const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: { opacity: 0.5 },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
