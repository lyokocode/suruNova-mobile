import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export const ProductScreen = () => {

    const { params: { product } } = useRoute()

    return (
        <View>
            <Text>{product.title}</Text>
        </View>
    )
}
