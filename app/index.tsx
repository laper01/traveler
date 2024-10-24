import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'


export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Traveler</Text>
      <StatusBar style="auto" />
      <Link href="/Home" style={{ color:'blue'}}>Go to Home</Link>
    </View>
  );
}

