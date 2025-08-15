// app/details.tsx
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

import MealOverviewScreen from "../screens/MealOverviewScreen";

export default function DetailsScreen() {
  const { title, categoryId } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    if (title && typeof title === "string") {
      navigation.setOptions({ title });
    }
  }, [navigation, title]);

  return <MealOverviewScreen title={title} categoryId={categoryId} />;
}
