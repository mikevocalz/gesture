
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import { useState, FC, Fragment } from 'react'
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  SharedValue
} from 'react-native-reanimated'

import { SolitoImage } from 'solito/image'
import Carousel from 'react-native-reanimated-carousel'
import { Section } from '@expo/html-elements'


export default function DetailsCarousel({images}) {
  const [pagingEnabled, setPagingEnabled] = useState<boolean>(true)
  const [snapEnabled, setSnapEnabled] = useState<boolean>(true)
  const progressValue = useSharedValue<number>(0)


  const pWidth = Dimensions.get('window').width
  const pHeight = Dimensions.get('screen').height

  const isAndroid = Platform.OS === 'android'
const isTab = pWidth >= 600
const sqWidth = pWidth > 768 ? 100 : 136
const sqHeight = pWidth < 768 ? 400 : 600

  const PaginationItem: FC<{
    index: number
    backgroundColor: string
    length: number
    animValue: Animated.SharedValue<number>
  }> = (props) => {
    const { animValue, index, length, backgroundColor } = props;
    const width = 10;

    const animStyle = useAnimatedStyle(() => {
      let inputRange = [index - 1, index, index + 1];
      let outputRange = [-width, 0, width];

      if (index === 0 && animValue?.value > length - 1) {
        inputRange = [length - 1, length, length + 1];
        outputRange = [-width, 0, width];
      }

      return {
        transform: [
          {
            translateX: interpolate(
              animValue?.value,
              inputRange,
              outputRange,
              Extrapolation.CLAMP
            ),
          },
        ],
      };
    }, [animValue, index, length]);
    return (
      <View
        style={{
          backgroundColor: "white",
          width,
          height: width,
          borderRadius: 50,
          overflow: "hidden"
        }}
      >
        <Animated.View
          style={[
            {
              borderRadius: 50,
              backgroundColor,
              flex: 1,
            },
            animStyle,
          ]}
        />
      </View>
    );
  };



  return (
    <View className="max-h-500 w-full flex-1">
      <Carousel
        style={{
          maxWidth: 1280,
          width: pWidth,
          height: isTab ? 580 : 400,
        }}
        loop
        width={pWidth}
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        autoPlay={true}
        autoPlayInterval={6000}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        data={images}
        renderItem={({ item }: any) => (
          <View className="h-full max-h-[580px] w-full max-w-7xl items-center bg-red-800 ">
            <SolitoImage
              key={String(item.id)}
              priority
              height={sqHeight}
              width={pWidth}
              contentFit={'cover'}
              alt={item.id.toString()}
              src={item.src}
              //contentPosition={{ top: '25%', left: '50%' }}
              style={{
                //flex: 1,
                width: pWidth,
                height: isTab ? 580 : 400,
                // maxWidth: 1280,
                maxHeight: 580,
              }}
            />
            {!!progressValue && (
              <View
                className={`absolute mx-auto w-[100px] flex-row  justify-between ${isAndroid ? 'bottom-[5%]' : 'bottom-[6%]'} `}
              >
                {images.map((backgroundColor, index) => {
                  return (
                    <PaginationItem
                      backgroundColor={'#46c4f6'}
                      animValue={progressValue}
                      index={index}
                      key={index}
                      length={images.length}
                    />
                  )
                })}
              </View>
            )}
          </View>
        )}
      />
    </View>
  )
}

