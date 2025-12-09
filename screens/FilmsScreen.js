import NetInfo from "@react-native-community/netinfo";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import SearchModal from "../components/SearchModal";

export default function SpaceshipsScreen() {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  const [searchValue, setSearchValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected && state.isInternetReachable);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isOnline) return;

    fetch("https://www.swapi.tech/api/starships")
      .then(res => res.json())
      .then(data => {
        setShips(data.results);
        setLoading(false);
      });
  }, [isOnline]);

  if (!isOnline) {
    return (
      <View style={styles.container}>
        <Text style={styles.offlineText}>
          Network unavailable. Please check your internet connection.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!imageLoaded && <ActivityIndicator size="large" />}
      <Image
        source={require("../assets/images/starwars-bckg.jpg")}
        style={styles.image}
        onLoad={() => setImageLoaded(true)}
      />

      <TextInput
        placeholder="Search spaceships..."
        value={searchValue}
        onChangeText={setSearchValue}
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ScrollView>
          {ships.map(item => (
            <Swipeable
              key={item.uid}
              onSwipeableOpen={() => {
                setSelectedValue(item.name);
                setModalVisible(true);
              }}
            >
              <TouchableOpacity>
                <Text style={styles.item}>{item.name}</Text>
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
  offlineText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 40,
  },
  image: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 10,
  },
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
});
