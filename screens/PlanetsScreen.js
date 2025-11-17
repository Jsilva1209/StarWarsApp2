import { StyleSheet, Text, View } from 'react-native';
export default function PlanetsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Planets Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 30, fontWeight: 'bold' },
});
