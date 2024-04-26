/* jsxImportSource react*/

import React, {useState, useLayoutEffect, useEffect, useCallback } from 'react'
import { ScreenScrollView } from '../ScreenScrollView'
import { useParams, useSearchParams } from 'solito/navigation'
import { View, Text, Dimensions, Pressable, Platform, ImageBackground } from 'react-native'
import { SolitoImage } from 'solito/image'
import { Link } from 'solito/link'
import { useRouter } from 'solito/navigation'

import { useNavigation } from 'expo-router'
import { Carousel } from 'react-responsive-carousel'

import { FontAwesome } from '@expo/vector-icons'
import DetailsCarousel from '../DetailsCarousel'
import Hero from '../hero/hero.web'
import ImageThumbCarousel from '../ImageThumbCarousel'
import StarRatingComponent from 'react-star-rating-component'

import {H4,H3, H2, Div, Span, A , P} from '@expo/html-elements'
import Review from '../Review'
import {reviews} from 'app/utils/reviewData'

const useUserParams = useParams<{
  id: number
  name: string
  title: string
  images: any
}>

const imagesData = [
  {
    id: 1,
    src: 'https://i.ibb.co/zNcmvKM/mikevocalz-Product-image-of-A-chocolate-cake-Use-A-high-resolu-7934e9b9-47d3-44d8-8764-48eb0926f234.jpg',
  },
  {
    id: 2,
    src: 'https://i.ibb.co/XfQ4DT9/mikevocalz-Product-image-of-A-chocolate-cake-Use-A-high-resolu-7934e9b9-47d3-44d8-8764-48eb0926f234.jpg',
  },
  {
    id: 3,
    src: 'https://i.ibb.co/qLSnCwz/mikevocalz-Product-image-of-A-chocolate-cake-Use-A-high-resolu-7934e9b9-47d3-44d8-8764-48eb0926f234.jpg',
  },
]

export default function ProductScreen({ route , heroImages}) {
  const { name, title, id, images } = useUserParams()

  const isWeb = Platform.OS === 'web'

  const { width } = Dimensions.get('screen')
  const isTab = width >= 600
  const sqWidth = width > 768 ? 100 : 136
  const sqHeight = width < 768 ? 400 : 600

  const pWidth = Dimensions.get('screen').width
  const pHeight = Dimensions.get('screen').height

  const [rating, setRating] = useState(4.5)

  const handleChange = useCallback(
    (value: number) => setRating(Math.round((rating + value) * 4.5) / 10),
    [rating],
  )

  let price

  return (
    <ScreenScrollView
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="always"
      useWindowScrolling
      scrollEventThrottle={16}
      contentContainerStyle={{ alignSelf: 'center', paddingBottom: 700 }}
      scrollEnabled
      contentContainerClassName="pb-[700px] md:pb-[300px] flex "
      className="min-h-full w-full max-w-7xl flex-1 items-center self-center bg-slate-100"
    >
      {/* <View className="mb-[20px] aspect-[16/10] flex-1 max-h-[600px] w-full overflow-hidden rounded-xl">
        <Carousel
          showArrows={false}
          showIndicators
          showThumbs={false}
          autoPlay={true}
          emulateTouch={true}
          showStatus={false}
          interval={5000}
          dynamicHeight={true}
          infiniteLoop
          width={'100%'}
          swipeable
        >
          {imagesData?.map((photo, index) => (
            <ImageBackground
              key={index}
              resizeMode="cover"
              width={pWidth}
              alt={String(photo.id)}
              source={photo?.src}
              style={{
               // flex: 1,
                width: '100%',
                maxWidth: 1280,
                maxHeight: 600,
                aspectRatio: 16 / 10,
              }}
            />
          ))}
        </Carousel>
      </View> */}

      <View className=" w-full  max-w-7xl flex-col justify-between  px-3 pt-8 lg:flex-row">
        <View className="P-4 max-h-full w-full rounded-t-[30px] pb-[60px] lg:h-auto  lg:w-[58%] lg:flex-none">
          <ImageThumbCarousel heroImages={imagesData} />
        </View>

        <View className=" container flex h-full max-h-full w-full items-center rounded-xl px-2  pb-[60px] pl-[10px] lg:mt-0 lg:h-auto lg:w-[40%] lg:flex-none">
          <Div className="relative -my-10 mb-4 w-full  items-start md:my-0">
            <h1 className="text-left  text-3xl font-bold text-gray-900">
              {title || 'German Chocolate Cake'}
            </h1>
            <View className="my-3 h-8 flex-row items-center space-x-3">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                starColor="#fdbf2e"
                onChange={handleChange}
              />
              <H4 className="text-gray-700">4 Ratings</H4>
              <View className="h-[30px] w-[1px] bg-gray-500" />
              <H3 className="rounded-md bg-[#46c4f6] px-3 py-1 text-sm font-bold text-white">
                Gesture Recommended
              </H3>
            </View>

            <View
              style={{ flexDirection: 'row' }}
              className="flew-row mt-2 flex w-full items-center justify-between space-x-3 px-2"
            >
              <Text className="my-2 text-2xl font-bold text-black">
                ${price || '49.99'}
              </Text>

              <Pressable
                onPress={() => null}
                className=" h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500"
              >
                <svg
                  fill="red"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </Pressable>
            </View>

            <View className="mb-3 w-full space-y-3">
              <P className="text-lg">
                Send this amazing treat to a special something, let them have
                their cake and eat it too. Cakes in this category will be:{' '}
              </P>

              <A>
                - 8"-11", bakery fresh, cake, from a bakery like 'Magnolia
                Bakery', 'Nothing Bundt Cakes'
              </A>
              <A>- Various types depend on market availability </A>

              <A>- May contain nuts and gluten </A>

              <A>
                - Sorry, no vegan option at this time As part of the price of
                this gesture, customers receive:
              </A>
              <A>- Free delivery and a customer satisfaction guarantee </A>

              <A>
                - Delivery by hand for local orders, and express shipping for
                statewide deliveries
              </A>
              <A>
                - Your own personalized e-message/signature included with gift{' '}
              </A>
              <A>- An amazing selfie of whatever you want included with gift</A>
            </View>

            <View className="my-4 h-[1px] w-full bg-gray-500" />

            <View className="flew-row w-full space-x-3">
              <Pressable className="my-5 w-full items-center rounded-xl bg-[#2b089f] py-3 md:w-[360px] md:py-[10px]">
                <Text className="text-xl font-bold text-white">
                  Pick This Gesture
                </Text>
              </Pressable>

              <View className="mt-3 flex-col space-y-2">
                <P>
                  NO HIDDEN FEES GUARANTEE NO HIDDEN SURPRISE GUARANTEE. Price
                  listed is all inclusive. (Includes delivery, shipping, and any
                  other fees). Just a heads up, product selection/s may vary
                  based on the local vendor availability in the delivery area.
                </P>

                <A>Some items may differ from the in-store price.</A>
              </View>
            </View>
          </Div>
        </View>
      </View>

      <View className="mb-10 mt-4 flex w-full pb-[300px]">
        {reviews.map((review, idx) => (
          <Review
            key={idx}
            id={review.id}
            name={review.name}
            title={review.title}
            joinDate={review.joinDate}
            reviewDate={review.reviewDate}
            textOne={review.textOne}
            textTwo={review.textTwo}
          />
        ))}
      </View>
    </ScreenScrollView>
  )
}
