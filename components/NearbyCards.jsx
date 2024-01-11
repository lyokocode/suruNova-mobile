import { View } from 'react-native'
import { ProductCart } from './ProductCart'

export const NearbyCards = ({ product }) => {
    return (

        <View className="w-64">
            <ProductCart product={product} />
        </View>

    )
}
