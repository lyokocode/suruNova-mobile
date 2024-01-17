import { View, ScrollView } from 'react-native'
import React from 'react'
import { Header, ProductCart } from '../components'
import { productData } from '../mockData/data'

export const NearbyScreen = () => {

    return (
        <View className="bg-white">
            <Header />
            <ScrollView className="w-screen min-h-[55vh]">
                <View className="w-screen min-h-[55vh] flex-row flex-wrap  item-center justify-between gap-y-4 ">
                    {productData && productData.map(product => (

                        <View className="w-[48%] ">
                            <ProductCart product={product} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View >
    )
}

