import { StyleSheet, Text, View } from 'react-native';

export default function FilmsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Films</Text>
      <View style={styles.center}>
        <Text style={styles.info}>This screen will list films</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#E8F5E9' },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 12 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  info: { fontSize: 16, color: '#1B5E20' },
});