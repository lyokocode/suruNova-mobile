import { View, ScrollView } from 'react-native'
import { Categories, FeaturedRow, Header } from '../components'

export const HomeScreen = () => {

    return (
        <View className="bg-white pt-5 flex-1">
            <Header />

            {/* body */}

            <ScrollView
                className=""
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                {/* Categories */}
                <Categories />

                {/* Featured Rows */}
                <FeaturedRow
                    title="Yakındaki ilanlar!"
                    description="Konumuna en yakın ilanları gör."
                    featuredCategory="featured"
                />

                <FeaturedRow
                    title="En çok görüntülenen ilanlar!"
                    description="Kullanıcıların en çok görüntülediği ilanlar. "
                    featuredCategory="featured"
                />
                <FeaturedRow
                    title="En iyi satıcılar!"
                    description="En yüksek puanı almış satıcıların ilanları. "
                    featuredCategory="featured"
                />
            </ScrollView>

        </View>

    )
}
