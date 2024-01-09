import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon, CalendarIcon, InformationCircleIcon, ShareIcon, TagIcon } from 'react-native-heroicons/outline'

export const ProfileScreen = () => {

    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView >
            {/* icon */}
            <View className="px-4 py-6 flex-row items-center justify-between">
                <ArrowLeftIcon
                    onPress={navigation.goBack}
                    size={24} color="gray"
                />
                <ShareIcon size={24} color="gray" />
            </View>
            {/* user info */}
            <View className="px-4 py-6 flex-row items-center space-x-4">
                <Image
                    source={{
                        uri: "https://pbs.twimg.com/profile_images/1740476733659254785/S3chCct-_400x400.jpg"
                    }}
                    className="w-28 h-28 rounded-full bg-gray-400"
                />
                <Text className="text-gray-600 font-extrabold text-xl">Mustafa Uşaklı</Text>
            </View>

            {/* user detail */}

            <View className="px-4 flex gap-3">
                <View className="flex-row space-x-2">
                    <CalendarIcon size={20} color="gray" />
                    <Text className="text-sm text-gray-400">Ocak 2024 tarihinden beri üye</Text>
                </View>
                <View className="flex-row space-x-2">
                    <InformationCircleIcon size={20} color="gray" />
                    <Text className="text-sm text-gray-400">User info description here...</Text>
                </View>
                <View className="flex-row space-x-2">
                    <TagIcon size={20} color="gray" />
                    <Text className="text-sm text-gray-400">Toplam ilan sayısı: 3</Text>
                </View>
            </View>
            <TouchableOpacity className="bg-red-500  rounded-2xl w-2/3 mt-4 mx-auto flex items-center justify-center">
                <Text className="px-4 py-3 text-white font-bold text-lg">Profili düzenle</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
