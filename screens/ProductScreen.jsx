import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'

export const ProductScreen = () => {
    const navigation = useNavigation()

    const { params: { product } } = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <ScrollView>
            <View className="relative ">
                <Image
                    source={{
                        uri: product?.image
                    }}
                    className="w-full h-56 bg-gray-300 p-4"
                />
            </View>
            <TouchableOpacity
                onPress={navigation.goBack}
                className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"

            >
                <ArrowLeftIcon color="#00ccbb" size={20} />
            </TouchableOpacity>
        </ScrollView>
    )
}
