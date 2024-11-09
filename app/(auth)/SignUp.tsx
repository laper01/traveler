import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomBotton from '@/components/CustomBotton'
import { Link } from 'expo-router'
import { createUser } from '../libs/appwrite'

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log('test-');
    
    createUser();
  };


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[83vh] px-4 my-6' >
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />
          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold' >Log in to Aora</Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-19'
            placeholder="add your username"
          /> 
          
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            keyboardType='email-address'
            placeholder="add your email"
          /> 
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='mt-7'
            placeholder="add your email"
          />
          <CustomBotton
            title='Sign Up'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Have account already?
            </Text>
            <Link className='text-lg text-secondary font-psemibold' href="/SignIn">
            Sign In
            </Link>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp