import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardTypeOptions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { icons } from '@/constants';


type FormFieldProps = {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
};

const FormField: React.FC<FormFieldProps> = ({ title, value, handleChangeText, otherStyles, keyboardType, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
      <View className='
      border-2 
      border-black-200
      w-full h-16 px-4 
      bg-black-100 
      rounded-2xl
      flex-row
      focus:border-secondary items-center
      '>
        <TextInput
        className='flex-1 text-white font-psemibold text-base'
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
        keyboardType={keyboardType}
        />
        {title === 'Password' && (
          <TouchableOpacity 
          onPress={()=>{
            setShowPassword(!showPassword)
          }}
          >
            <Image
            source={!showPassword ? icons.eye: icons.eyeHide}
            resizeMode='contain'
            className='w-6 h-6'
            /> 
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};


export default FormField;
