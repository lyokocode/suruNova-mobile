import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView>
            {/* header */}
            <View className="mt-8" >
                <Image
                    className="w-10 h-10 rounded-full bg-gray-300"
                    source={{
                        uri: "https://pbs.twimg.com/profile_images/1740476733659254785/S3chCct-_400x400.jpg"
                    }}
                />

            </View>
        </SafeAreaView>
    )
}
