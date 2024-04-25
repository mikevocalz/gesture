import { View, Text, Dimensions,ImageBackground } from 'react-native'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { SolitoImage } from 'solito/image';
import {Div} from '@expo/html-elements'

const HeroWeb = ({heroImages}:{heroImages: string[]}) => {

  const pWidth = Dimensions.get("screen").width;
  const pHeight = Dimensions.get("screen").height;
  //const hero = heroImages?.slice(0, 3);
  const hero = heroImages

  return (
    <Div className="mb-[20px] flex max-h-[476px] w-full overflow-hidden rounded-xl">
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
        {hero?.map((photo, index) => (
          <ImageBackground
            key={index}
            resizeMode="cover"
            width={pWidth}
            alt={String(photo._id)}
            source={photo?.image}
            style={{
              flex: 1,
              width: '100%',
              maxWidth: 1280,
              maxHeight: 476,
              aspectRatio: 16 / 9,
            }}
          >
            <View
              style={{
                alignItems: index === 1 ? 'flex-end' : 'flex-start',
                marginBottom: index === 1 ? 30 : 0,
                paddingRight: index === 1 ? 30 : 0,
              }}
              className=" absolute bottom-[50px] left-3 h-1/3 w-full flex-1 px-3"
            >
              <Text
                style={{}}
                className="text-3xl font-bold text-white drop-shadow-2xl md:text-5xl"
              >
                {String(photo?.mainHeading)}
              </Text>
              <Text
                //numberOfLines={2}
                style={{
                  textAlign: index === 1 ? 'right' : 'left',
                }}
                className="leading-2 mb-3 mt-[6px] h-[300px] max-h-[390px] max-w-[52%] flex-wrap break-words	text-xl font-bold tracking-wide text-yellow-50 drop-shadow-2xl md:text-3xl"
              >
                {photo?.titleText}
              </Text>
            </View>
          </ImageBackground>
        ))}
      </Carousel>
    </Div>
  )
}

export default HeroWeb