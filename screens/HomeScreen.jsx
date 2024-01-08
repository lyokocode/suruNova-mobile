import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon } from "react-native-heroicons/outline"

export const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView>
            {/* header */}
            <View className="mt-8 flex-row pb-3 items-center mpx-4 space-x-2" >
                <Image
                    className="w-10 h-10 rounded-full bg-gray-300"
                    source={{
                        uri: "https://pbs.twimg.com/profile_images/1740476733659254785/S3chCct-_400x400.jpg"
                    }}
                />

                <View>
                    <Text className="font-bold text-gray-500 text-xl">SuruNova</Text>
                    <View className="  flex-row gap-1 items-center justify-center">
                        <Text className="text-gray-400 capitalize">çivril, denizli</Text>
                        <ChevronDownIcon size={20} color="#00ccbb" />

                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}
