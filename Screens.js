import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExploreScreen, FavoritesScreen, HomeScreen, MessageScreen, ProductScreen, ProfileScreen, SellScreen, NearbyScreen, RegisterScreen } from './screens';
import { CameraIcon, ChatBubbleOvalLeftEllipsisIcon, GlobeAltIcon, HeartIcon, HomeIcon } from 'react-native-heroicons/outline';
import { LoginScreen } from './screens/LoginScreen';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Nearby" component={NearbyScreen} />
        </Stack.Navigator>
    );
}
const Screens = () => {
    const { auth } = useSelector(state => state.auth)

    return (

        <>
            {auth ? (
                <>
                    <Tab.Navigator
                        screenOptions={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarActiveTintColor: "#22c55e",
                            tabBarInactiveTintColor: "#27272a",
                            tabBarStyle: {
                                borderWidth: 0,
                            }
                        }}
                    >
                        <Tab.Screen name="Anasayfa" component={HomeStack}
                            options={{
                                tabBarIcon: ({ focused, color }) => {
                                    if (focused) {
                                        return <HomeIcon size={30} color={color} />
                                    }
                                    return <HomeIcon size={30} color={color} />
                                }
                            }}
                        />
                        <Tab.Screen name="Keşfet" component={ExploreScreen}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({ focused, color }) => {
                                    if (focused) {
                                        return <GlobeAltIcon size={30} color={color} />
                                    }
                                    return <GlobeAltIcon size={30} color={color} />
                                }
                            }}
                        />
                        <Tab.Screen name="Sat" component={SellScreen}
                            options={{
                                tabBarActiveTintColor: "#e11d48",
                                tabBarIcon: ({ focused, color, size }) => {
                                    if (focused) {
                                        return <CameraIcon size={40} color="#e11d48" />
                                    }
                                    return <CameraIcon size={40} color="#e11d48" />
                                }
                            }}
                        />
                        <Tab.Screen name="Mesajlar" component={MessageScreen}
                            options={{
                                tabBarIcon: ({ focused, color }) => {
                                    if (focused) {
                                        return <ChatBubbleOvalLeftEllipsisIcon size={30} color={color} />
                                    }
                                    return <ChatBubbleOvalLeftEllipsisIcon size={30} color={color} />
                                }
                            }}
                        />
                        <Tab.Screen name="Favoriler" component={FavoritesScreen}
                            options={{
                                tabBarIcon: ({ focused, color }) => {
                                    if (focused) {
                                        return <HeartIcon size={32} color={color} />
                                    }
                                    return <HeartIcon size={30} color={color} />
                                }
                            }}
                        />
                    </Tab.Navigator>
                </>) : (
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </Stack.Navigator>
            )}
        </>
    )
}

export default Screens