import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import SearchModal from '../components/SearchModal';

export default function FilmsScreen() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/films')
      .then(res => res.json())
      .then(data => {
        setFilms(data.result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = () => {
    if (!searchValue.trim()) return;
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.input}
        placeholder="Search for a film..."
        value={searchValue}
        onChangeText={setSearchValue}
        onSubmitEditing={handleSubmit}
      />

      {/* Data List */}
      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 40 }} />
      ) : (
        <FlatList
          data={films}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.properties.title}</Text>
          )}
        />
      )}

      {/* Modal */}
      <SearchModal
        visible={modalVisible}
        message={`You searched for: ${searchValue}`}
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
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});
