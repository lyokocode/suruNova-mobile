import { Button, Image, View, Platform, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { CameraIcon, PhotoIcon, TrashIcon } from 'react-native-heroicons/outline'
import * as ImagePicker from 'expo-image-picker';

export const ImageUpload = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View className=" bg-gray-200 rounded-lg px-5 py-3 flex-row items-center justify-between gap-x-3">
            {
                image ? (
                    <View className="w-full relative">
                        <Image
                            source={{
                                uri: image
                            }}
                            className="w-40 h-40  mx-auto rounded-full"
                        />
                        <TouchableOpacity onPress={() => setImage(null)} className="bg-gray-400  absolute w-[40px] h-[40px] rounded-full  right-0 top-0 flex items-center justify-center">
                            <TrashIcon size={30} color="#fff" />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <>
                        <View className="bg-gray-400  py-2 flex items-center justify-center rounded-md flex-1">
                            <CameraIcon size={30} color="#fff" />
                            <Text className="text-gray-50 text-lg">Kamera</Text>
                        </View>
                        <TouchableOpacity onPress={pickImage} className="bg-gray-400  py-2 flex items-center justify-center rounded-md flex-1">
                            < PhotoIcon size={30} color="#fff" />
                            <Text className="text-gray-50 text-lg">Galeri</Text>
                        </TouchableOpacity>

                    </>
                )
            }

        </View>
    )
}
