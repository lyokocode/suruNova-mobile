import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { EyeIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

export const ProductCart = ({ product }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Product", {
                    product
                })
            }}
            className="  bg-white shadow  w-full border border-sky-100"
        >
            <Image
                source={{
                    uri: product.image
                }}
                className="w-full object-co h-36 rounded-sm"
            />
            <View className="px-3 pv-4  w-full  ">

                <Text className="font-bold text-lg pt-2" numberOfLines={1}>{product.title}</Text>

                <View className="flex-row  items-center justify-between">
                    <View className="flex-row items-center space-x-1">
                        <StarIcon color="green" opacity={0.5} size={22} />
                        <Text>{product?.user?.rating}</Text>
                    </View>

                    <Text className="text-gray-400 text-sm">{product?.categoryName}</Text>
                </View>
                <View className="flex-row space-x-0 mt-1 items-center justify-between">
                    <View>
                        <MapPinIcon color="gray" size={22} opacity={0.4} />
                        <Text className="capitalize text-xs text-gray-400">{product.location}</Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <EyeIcon color="#0ea5e9" opacity={0.5} size={22} />
                        <Text>{product?.views}</Text>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    )
}
