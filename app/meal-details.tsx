// app/details.tsx
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

import MealDetailsScreen from "../screens/MealDetailsScreen";

export default function DetailsScreen() {
  const { title, categoryId, mealId } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    if (title && typeof title === "string") {
      navigation.setOptions({ title });
    }
  }, [navigation, title]);

  return (
    <MealDetailsScreen title={title} categoryId={categoryId} mealId={mealId} />
  );
}
