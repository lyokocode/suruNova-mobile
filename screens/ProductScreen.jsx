import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, CalendarIcon, CheckCircleIcon, EyeIcon, HeartIcon, MapPinIcon } from 'react-native-heroicons/outline'
import MapView from 'react-native-maps';

export const ProductScreen = () => {
    const navigation = useNavigation()
    const [check, setCheck] = useState(false)

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

            {/* go back */}
            <TouchableOpacity
                onPress={navigation.goBack}
                className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
            >
                <ArrowLeftIcon color="#00ccbb" size={20} />
            </TouchableOpacity>

            {/* add a favorites */}
            <TouchableOpacity
                onPress={() => setCheck(!check)}
                className="absolute top-14 right-5 p-2 bg-gray-100 rounded-full "
            >
                {check ? (
                    <CheckCircleIcon color="red" size={20} />

                ) : (
                    <HeartIcon color="red" size={20} />

                )}
            </TouchableOpacity>
            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-2xl font-bold">{product.title}</Text>
                    <Text className="text-gray-500 text-sm mt-2">
                        {product.description}
                    </Text>
                    {/* product info */}
                    <View className="flex-row space-x-2 my-1 justify-between" >
                        <View className="flex-row items-center space-x-1">
                            <EyeIcon size={22} color="green" opacity={4} />
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{product.views}</Text> · {product.categoryName}
                            </Text>
                        </View>

                        <View className="flex-row items-center space-x-2 my-1">
                            <MapPinIcon size={22} color="gray" />
                            <Text className="text-xs text-gray-500">
                                {product.location}
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-2 my-1 ">
                            <CalendarIcon size={22} color="gray" />
                            <Text className="text-xs text-gray-500">
                                {product.date}
                            </Text>
                        </View>
                    </View>

                    {/* product detail */}
                    <View className="mt-4">
                        <View className="flex-row space-x-3">
                            <Text className="text-gray-600 text-sm">Ürün miktarı:</Text>
                            <Text className="text-gray-600 text-sm">{product.quantity}  {product.unitValue}</Text>
                        </View>
                        <View className="flex-row space-x-3">
                            <Text className="text-gray-600 text-sm">Birim Fiyatı:</Text>
                            <Text className="text-gray-600 text-sm">{product.unitPrice}₺ / {product.quantityUnit}</Text>
                        </View>
                    </View>

                    {/* MAP container */}
                    <View className="flex-1 bg-red-400">
                        <Text>test deneme</Text>
                        <MapView
                            className="w-full h-screen"

                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
