import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';

export default function SpaceshipsScreen() {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/starships')
      .then(res => res.json())
      .then(data => {
        setShips(data.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <FlatList
      data={ships}
      keyExtractor={(item) => item.uid}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item.name}</Text>
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
