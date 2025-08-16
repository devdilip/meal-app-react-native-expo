import { StyleSheet, Text, View } from "react-native";

const FavoriteScreen = () => {
  return (
    <View style={styles.favoriteContainer}>
      <Text>No Favorite Meal Yet.</Text>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  favoriteContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
  },
});
