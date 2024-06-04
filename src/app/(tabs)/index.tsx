import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Food Ordering App</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <EditScreenInfo path='app/(tabs)/index.tsx' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'BoingSemiBold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
