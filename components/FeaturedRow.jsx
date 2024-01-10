import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { productData } from '../mockData/data'
import { NearbyCards } from './'
import { useNavigation } from '@react-navigation/native'

export const FeaturedRow = ({ title, description, featuredCategory }) => {
    const navigation = useNavigation()

    return (
        <View className="">
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00ccbb"
                    onPress={() => {
                        navigation.navigate("Nearby")
                    }}
                />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {productData && productData.map(product => (
                    <NearbyCards key={product.id} product={product} />
                ))}

            </ScrollView>
        </View>
    )
}
