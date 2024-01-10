import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"


export const Header = () => {

    const navigation = useNavigation()

    return (
        <>
            {/* header */}
            < View className="mt-8 flex-row items-center pb-3 mx-4 space-x-2" >
                <Image
                    className="w-10 h-10 rounded-full bg-gray-300"
                    source={require("../assets/logo.png")}
                />

                <View className="flex-1 items-start">
                    <Text className="font-bold text-gray-500 text-xl">SuruNova</Text>
                    <View className="  flex-row gap-1 items-center justify-center">
                        <Text className="text-gray-400 capitalize">çivril, denizli</Text>
                        <ChevronDownIcon size={20} color="#00ccbb" />
                    </View>
                </View>

                <UserIcon size={35} color="#00ccbb"
                    onPress={() => {
                        navigation.navigate("Profile")
                    }}
                />
            </ View >

            {/* search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
                <View className="flex-row space-x-2 items-center flex-1 px-4  bg-gray-100 ">
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput
                        className="  py-3 w-full h-full "
                        placeholder='Sürünüz için her şey ...'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsVerticalIcon color="#00ccbb" size={20} />
            </View>
        </>
    )
}
