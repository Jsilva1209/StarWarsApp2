import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';

export default function FilmsScreen() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/films')
      .then(res => res.json())
      .then(data => {
        setFilms(data.result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <FlatList
      data={films}
      keyExtractor={(item) => item.uid}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item.properties.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
