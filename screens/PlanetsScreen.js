import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import SearchModal from '../components/SearchModal';

export default function PlanetsScreen() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/planets')
      .then(res => res.json())
      .then(data => {
        setPlanets(data.results);
        setLoading(false);
      });
  }, []);

  const handleSubmit = () => {
    if (!searchValue.trim()) return;
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={searchValue}
        onChangeText={setSearchValue}
        onSubmitEditing={handleSubmit}
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 40 }} />
      ) : (
        <FlatList
          data={planets}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        />
      )}

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
