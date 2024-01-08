import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { categoryData } from '../mockData/data'

export const Categories = () => {
    return (
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
        >
            {categoryData && categoryData.map(category => (
                <CategoryCard key={category.id} category={category} />

            ))}
        </ScrollView>
    )
}
