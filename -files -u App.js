[1mdiff --cc App.js[m
[1mindex e3c278c,0bed8a3..0000000[m
[1m--- a/App.js[m
[1m+++ b/App.js[m
[36m@@@ -1,20 -1,14 +1,34 @@@[m
[32m +import { StatusBar } from 'expo-status-bar';[m
[32m +import { StyleSheet, Text, View } from 'react-native';[m
[32m+ import 'react-native-gesture-handler';[m
[32m+ import { GestureHandlerRootView } from 'react-native-gesture-handler';[m
[32m+ import { SafeAreaProvider } from 'react-native-safe-area-context';[m
[32m+ import RootNavigator from './navigation/RootNavigator';[m
  [m
[32m +export default function App() {[m
[32m +  return ([m
[32m +    <View style={styles.container}>[m
[32m +      <Text>Hi, my name is Juan, and I am a mobile developer</Text>[m
[32m +      <StatusBar style="auto" />[m
[32m +    </View>[m
[32m +  );[m
[32m +}[m
[32m +[m
[32m +const styles = StyleSheet.create({[m
[32m +  container: {[m
[32m +    flex: 1,[m
[32m +    backgroundColor: '#fff',[m
[32m +    alignItems: 'center',[m
[32m +    justifyContent: 'center',[m
[32m +  },[m
[32m +});[m
[32m++[m
[32m+ export default function App() {[m
[32m+   return ([m
[32m+     <GestureHandlerRootView style={{ flex: 1 }}>[m
[32m+       <SafeAreaProvider>[m
[32m+         <RootNavigator />[m
[32m+       </SafeAreaProvider>[m
[32m+     </GestureHandlerRootView>[m
[32m+   );[m
[31m -}[m
[32m++}[m
