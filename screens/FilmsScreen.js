import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import SearchModal from "../components/SearchModal";

export default function FilmsScreen() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    fetch("https://www.swapi.tech/api/films")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.result);
        setLoading(false);
      });
  }, []);

  const handleSwipe = (title) => {
    setSelectedValue(title);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>

      {!imageLoaded && <ActivityIndicator size="large" />}
      <Image
        source={require("../assets/images/starwars-bckg.jpg")}
        style={styles.image}
        onLoad={() => setImageLoaded(true)}
      />

      <TextInput
        placeholder="Search films..."
        value={searchValue}
        onChangeText={setSearchValue}
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : (
        <ScrollView>
          {films.map((item) => (
            <Swipeable
              key={item.uid}
              renderRightActions={() => (
                <View style={styles.rightAction}><Text style={styles.actionText}>Swipe</Text></View>
              )}
              onSwipeableOpen={() => handleSwipe(item.properties.title)}
            >
              <TouchableOpacity>
                <Text style={styles.item}>{item.properties.title}</Text>
              </TouchableOpacity>
            </Swipeable>
          ))}
        </ScrollView>
      )}

      <SearchModal
        visible={modalVisible}
        message={`You selected: ${selectedValue}`}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
  },
  rightAction: {
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
  },
  actionText: {
    color: "#fff",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 10,
  },
});
