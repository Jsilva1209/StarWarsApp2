import { StyleSheet, Text, View } from 'react-native';

export default function SpaceshipsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spaceships</Text>
      <View style={styles.center}>
        <Text style={styles.info}>This screen will list starships</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF8E1' },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 12 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  info: { fontSize: 16, color: '#5D4037' },
});