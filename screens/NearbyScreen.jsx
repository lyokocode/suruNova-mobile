import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Header } from '../components'
import { productData } from '../mockData/data'

export const NearbyScreen = () => {
    return (
        <View className="bg-white">
            <Header />
            <ScrollView
                contentContainerStyle={{
                }}
                className=" ">
                <View className="w-screen flex-row flex-wrap gap-2">
                    {productData && productData.map(product => (
                        <View
                            className="w-[48%] border border-sky-100 p-1"
                        >
                            <Image
                                source={{
                                    uri: product.image
                                }}
                                className="w-full h-28 rounded-md"
                            />
                            <Text
                                className="font-semibold text-base text-center max-w-max"
                            >
                                {product.title}
                            </Text>
                            <View>
                                <Text>4,7 km</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View >
    )
}

