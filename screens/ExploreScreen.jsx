import { View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Header, ProductCart } from '../components'
import { productData } from '../mockData/data'

export const ExploreScreen = () => {

    return (
        <View className="bg-white">
            <Header />
            <ScrollView className="w-screen min-h-screen flex-row flex-wrap gap-x-2 gap-y-4">
                <View className="w-screen min-h-screen flex-row flex-wrap gap-x-2 gap-y-4">
                    {
                        productData && productData.map(product => (
                            <View className="w-[48%]">
                                <ProductCart product={product} />
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View >
    )
}
