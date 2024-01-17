import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { ImageUpload } from '../components';

export const RegisterScreen = () => {
    const navigation = useNavigation()

    return (
        <View className="flex-1 items-center justify-center ">

            <Image
                source={require("../assets/background.png")}
                className="w-full h-full absolute top-0 left-0"
            />

            <Formik
                initialValues={{
                    step: 1,
                    // lastStep: 3,

                    // step 1
                    name: "",
                    location: "",

                    // step 2

                    email: "",
                    phoneNumber: "",

                    // step 3
                    avatar: ""


                }}
                onSubmit={values => console.log(values)}
            >
                {({ values, setFieldValue }) => {


                    const [pickedDocument, setPickedDocument] = useState(null);

                    const prevHandle = () => {
                        setFieldValue('step', values.step - 1)
                    }
                    const nextHandle = () => {
                        setFieldValue('step', values.step + 1)
                    }
                    return (
                        <View className=" w-2/3 flex  space-y-4">
                            <Text className="text-center text-2xl text-gray-200 mb-4">Sürünovaya Hoşgeldin!</Text>
                            {
                                values.step == 1 && (
                                    <TextInput
                                        className=" border border-1 border-gray-400 px-4 py-3 rounded-2xl bg-white placeholder:text-gray-700"
                                        placeholder='İsim ve Soyisim'
                                    />
                                )
                            }
                            {
                                values.step == 2 && (
                                    <View className="flex gap-y-3">
                                        <TextInput
                                            className="border border-1 border-gray-400 px-4 py-3 rounded-2xl bg-white placeholder:text-gray-700"
                                            placeholder='email'
                                        />
                                        <TextInput
                                            className="border border-1 border-gray-400 px-4 py-3 rounded-2xl bg-white placeholder:text-gray-700"
                                            placeholder='telefon numarası'
                                        />
                                    </View>
                                )
                            }
                            {
                                values.step == 3 && (
                                    <View className="flex gap-y-3">
                                        <ImageUpload />
                                    </View>
                                )
                            }

                            <View className="flex-row items-center justify-between">
                                {values.step > 1 && (
                                    <TouchableOpacity onPress={() => prevHandle()} className="bg-red-500 w-1/3 flex items-center justify-center px-3 py-2 rounded-lg ">
                                        <Text className="text-lg text-white">önceki</Text>
                                    </TouchableOpacity>
                                ) || <View />}
                                {
                                    values.step == 3 ? (
                                        <TouchableOpacity className="bg-teal-400 w-1/3 flex items-center justify-center px-3 py-2 rounded-lg ">
                                            <Text className="text-lg text-white">Kaydet</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={() => nextHandle()} className="bg-teal-400 w-1/3 flex items-center justify-center px-3 py-2 rounded-lg ">
                                            <Text className="text-lg text-white">sonraki</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>
                    )
                }}
            </Formik>

            {/* link */}
            <View className="flex-row gap-x-2 items-center absolute bottom-[20%] right-[10%]">
                <Text className="text-center text-base text-white font-light">Zaten bir hesabın var mı?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text className="font-medium text-white text-lg  underline">Giriş yap</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

