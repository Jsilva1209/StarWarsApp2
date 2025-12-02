import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import SearchModal from '../components/SearchModal';

export default function FilmsScreen() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    fetch('https://www.swapi.tech/api/films')
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

  const renderRightActions = () => (
    <View style={styles.rightAction}>
      <Text style={styles.actionText}>Swipe</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <TextInput
        placeholder="Search films..."
        value={searchValue}
        onChangeText={setSearchValue}
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 40 }} />
      ) : (
        <ScrollView nestedScrollEnabled keyboardShouldPersistTaps="handled">
          {films.map((item) => (
            <Swipeable 
              key={item.uid}
              renderRightActions={renderRightActions}
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
  container: { flex: 1, padding: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  item: {
    fontSize: 18,
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  rightAction: {
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
