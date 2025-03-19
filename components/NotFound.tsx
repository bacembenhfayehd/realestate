import { View, Text } from 'react-native'
import React from 'react'

const NotFound = () => {
  return (
    <View className="flex items-center my-5">
      
      <Text className="text-2xl font-rubik-bold text-black-300 mt-5">
        No Result
      </Text>
      <Text className="text-base text-black-100 mt-2">
        We could not find any result
      </Text>
    </View>
  )
}

export default NotFound