import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

const MealOverviewScreen = ({ title, categoryId }) => {
  const displayMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderCategoryItem = (itemData) => {
    const item = itemData.item;
    return (
      <MealItem
        mealId={item.id}
        categoryId={categoryId}
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
      ></MealItem>
    );
  };
  return (
    <View style={style.container}>
      <FlatList
        data={displayMeal}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

export default MealOverviewScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
