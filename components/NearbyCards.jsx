import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { EyeIcon, StarIcon } from 'react-native-heroicons/outline'

export const NearbyCards = ({ product }) => {
    console.log(product.user.name)
    return (
        <TouchableOpacity className="mx-2">
            <Image
                source={{
                    uri: product.image
                }}
                className="w-64 h-36 rounded-sm"
            />
            <View className="px-3 pv-4">
                <Text className="font-bold text-lg pt-2">{product.title}</Text>
            </View>
            <View className="flex-row  items-center justify-between">

                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text>{product?.user?.rating}</Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <EyeIcon color="#0ea5e9" opacity={0.5} size={22} />
                    <Text>{product?.views}</Text>
                </View>
                <Text className="text-gray-400 text-sm">{product?.categoryName}</Text>
            </View>
        </TouchableOpacity>
    )
}
