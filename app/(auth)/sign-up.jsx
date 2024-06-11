import { View, Text, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButtom from '../../components/CustomButton';
import { createUser } from '../../lib/appwrite';
import { useGlobalContext } from "../../context/GlobalProvider";

import { Link, router } from 'expo-router';

const SignUp = () => {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmiting, setIsSubmiting] = useState(false)
  const {setUser , setIsLoggedIn } = useGlobalContext()


  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Failed to signup", "Please fill in all fields")
    }

    setIsSubmiting(true)

    try {
      const result = await createUser( form.email, form.password , form.username)
      //set global stae using context
      setUser(result)
      setIsLoggedIn(true)
      
      router.replace('/home')
    } 
    catch (error) {
      Alert.alert("Failed to signup", error.message);
    } 
    finally {
      setIsSubmiting(false)
    }

    
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className="w-full flex justify-center min-h-[84vh] px-4 my-6">

          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign up to Aora
          </Text>


          <FormField
            title="Username"
            placeholder="username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
            
          />

          <FormField
            title="Email"
            placeholder="email@exmaple.com"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            placeholder="password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"

          />

          <CustomButtom
            title='Sign Up'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmiting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="font-bold text-gray-100 font-pregular">
              Already have an acount?
            </Text>
            <Link
              href="/sign-in"
              className="font-bold font-psemibold text-secondary"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp