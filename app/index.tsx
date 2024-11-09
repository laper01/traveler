import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants';
import CustomBotton from '@/components/CustomBotton';
import 'react-native-url-polyfill/auto'



export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full h-full justify-center items-center px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[80px]'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='w-[380px] h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-white text-3xl font-bold text-center' >Discover Endless posiblity{' '}
              <Text className='text-secondary-200' >Traveler</Text>
            </Text>

            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>

          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
            Where creativity meet innovation: 
            embark on journer of lmitless 
            exploration with Traveler
          </Text>
          <CustomBotton
          title='Continue with Email'
          handlePress={() => router.push('/SignIn')}
          containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor='#161622' />
    </SafeAreaView>
  );
}

