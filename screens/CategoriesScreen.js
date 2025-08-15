import { FlatList } from "react-native";
import CategoryGridTail from "../components/CategoryGridTail";
import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (itemData) => {
  return <CategoryGridTail itemData={itemData} />;
};
const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
