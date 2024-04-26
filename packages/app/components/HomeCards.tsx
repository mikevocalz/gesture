/* jsxImportSource react*/
'use client'

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Dimensions,
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRouter } from 'solito/navigation'
import { SolitoImage  } from 'solito/image'


interface HomeCardProps {
  title: string
  data: any
}

const {width } = Dimensions.get('window')
export default function HomeCards({ title, data }: HomeCardProps) {
  //const navigation = useNavigation()

  const isSmall = width < 479;

  const router = useRouter()

  const onPress = (item: any) => {
    //navigation.navigate('two', { occassionData })
    //let productID = item.id
    let productID = item._id

    let title = item.text
    let img1 = item.img

    router.push(`/product/${productID}`, { productID })
  }

  const renderMovieCards = ({ item, index }) => {
    return (
      <Pressable
        className=" flex-1 overflow-hidden rounded-xl bg-zinc-100 drop-shadow-md hover:scale-105 h-[220px] w-[160px] md:h-[440px] md:w-[360px] "
        onPress={() => onPress(item)}
      >
        {/* <Image
          alt={'image-1'}
          resizeMode="cover"
          className="flex h-[180px] w-[160px] rounded-t-xl md:h-[380px] md:w-[360px]"
          source={{
            uri: item.image,
          }}
        /> */}
        <SolitoImage
          alt={'image-1'}
          contentFit="cover"
          src={item.image}
          priority
          width={isSmall ? 160 : 180}
          height={isSmall ? 360 : 390}
          style={{
           display: 'flex',
           borderTopRightRadius: 10,
           borderTopLeftRadius: 10,
          width:isSmall ? 160 : 360,
          height: isSmall ? 180 : 390,
          //aspectRatio: 3/4
          }}
        />
        <View className="w-[160px] max-h-[100px] z-40 flex-row justify-center justify-between  rounded-b-xl p-2 md:w-[360px]  md:p-5">
          <Text numberOfLines={1} className="w-[90px] font-medium md:w-[200px]">
            {item.name}
          </Text>
          <Text className="font-bold">${item.price}</Text>
        </View>
      </Pressable>
    )
  }

  return (
    <View className="pl-[10px] h-[320px] min-h-[360px] md:h-[600px]">
      <Text className="mb-4 ml-[1px] text-3xl font-extrabold tracking-wide">
        {title}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        contentContainerClassName='flex pr-[100px]'
        className="mb-1 flex h-[290px] min-h-[340px] pl-[20px] pr-[100px] pt-9 md:mb-6 md:h-[500px]"
        renderItem={renderMovieCards}
        ItemSeparatorComponent={() => <View className="w-7 md:w-10"></View>}
      />
    </View>
  )
}
