import { StyleSheet, Text, View } from 'react-native';

export default function PlanetsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planets</Text>
      <View style={styles.center}>
        <Text style={styles.info}>This screen will list planets</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#ECEFF1' },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 12 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  info: { fontSize: 16, color: '#37474F' },
});