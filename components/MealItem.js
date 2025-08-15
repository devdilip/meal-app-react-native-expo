import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "../components/MealDetails";

const MealItem = ({
  mealId,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  categoryId,
}) => {
  const router = useRouter();

  return (
    <View style={style.mealIten}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          style.button,
          pressed ? style.buttonPressed : null,
        ]}
        onPress={() =>
          router.push({
            pathname: "/meal-details",
            params: {
              title: title,
              categoryId: categoryId,
              mealId: mealId,
            },
          })
        }
      >
        <View>
          <View>
            <Image source={{ uri: imageUrl }} style={style.image} />
            <Text style={style.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const style = StyleSheet.create({
  mealIten: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 18,
  },
  buttonPressed: { opacity: 0.5 },
});
