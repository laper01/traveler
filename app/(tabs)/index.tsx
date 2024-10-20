import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'


export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold">Traveler</Text>
      <StatusBar style="auto" />
      <Link href="/Profile" style={{marginTop:20, color:'blue'}}>Profile</Link>
    </View>
  );
}

