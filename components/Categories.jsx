import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { CategoryCard } from '../components'

export const Categories = () => {
    return (
        <ScrollView className="">
            <CategoryCard />
        </ScrollView>
    )
}
