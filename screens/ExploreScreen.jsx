import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export const ExploreScreen = () => {
    const { auth } = useSelector(state => state.auth)

    console.log(`auth here : ${auth}`)
    return (
        <View className="bg-red-200 flex-1 items-center justify-center w-full h-screen">
            <Text className="text-3xl">
                {auth ? "auth var" : "auth yok"}
            </Text>
        </View>
    )
}
