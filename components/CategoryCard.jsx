import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ category }) => {

    return (
        <TouchableOpacity
            className="relative mr-2"
        >
            <Image
                source={{
                    uri: category.image
                }}
                className="w-32 h-32 rounded"
            />
            <Text className="absolute bottom-1 left-1 text-white font-bold">{category.name}</Text>
        </TouchableOpacity>
    )
}
export default CategoryCard

