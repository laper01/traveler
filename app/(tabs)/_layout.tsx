import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { Image, Text, View } from 'react-native';

import icons from '@/constants/icons';


type TabIconProps = {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
};


const TabIcon = ({ icon, color, name, focused }:TabIconProps) => {
  return (
    <View className=' items-center justify-center ' >
      <Image
      source={icon}
      resizeMode='contain'
      tintColor={color}
      className='w-6 h-6'
      />
  <Text
   className={`tex  ${focused ? 'font-psemibold' :'font-pregular'} text-xs`} 
  style={{color:color}}>
    {name}
  </Text>
    </View>
  );
};


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle:{
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.home}
              color={color}
              focused={focused}
              name='Home'
             />
          ),
        }}
      />
       <Tabs.Screen
        name="Bookmarks"
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.bookmark}
              color={color}
              focused={focused}
              name='Bookmarks'
             />
          ),
        }}
      />
       <Tabs.Screen
        name="Create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.plus}
              color={color}
              focused={focused}
              name='Create'
             />
          ),
        }}
      />
       <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.profile}
              color={color}
              focused={focused}
              name='Profile'
             />
          ),
        }}
      />
    </Tabs>
  );
}
