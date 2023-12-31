import { SafeAreaView, View, Text, ScrollView,Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import slides from '../constants/WelcomeSlideData';
import Categories from '../components/categories';
import SortCategories from '../components/sortCategories';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

export default function HomeScreen() {
  const HomeContent = slides[1];
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="m-5 mt-16 flex-row justify-between">
            <Text className="font-bold text-3xl opacity-80 mt-1">Let's Discover</Text>
            <Image className="-mt-2 h-14 w-14 rounded-full" source={HomeContent.avatar}></Image>
        </View>

        <View>
          <TouchableOpacity className="m-5 mt-3 p-4 bg-neutral-100 rounded-full flex-row">
            <MagnifyingGlassIcon size={"20"} color={"gray"}/>
            <TextInput placeholder='Search Here' className="font-medium text-gray-500 ml-2 -mt-1" />
          </TouchableOpacity>
        </View>

        <View>
          <Categories />
        </View>
        
        <View>
          <SortCategories/>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}