import { Dimensions,  Platform, StyleSheet,Image, ImageBackground,Text, View } from 'react-native'
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

export default function Hero ({ heroImages }: { heroImages: string[] })  {
  const [pagingEnabled, setPagingEnabled] = useState<boolean>(true)
  const [snapEnabled, setSnapEnabled] = useState<boolean>(true)
  const progressValue = useSharedValue<number>(0)


  const pWidth = Dimensions.get('screen').width
  const pHeight = Dimensions.get('screen').height

  const isAndroid = Platform.OS === 'android'
const isTab = pWidth >= 600
const sqWidth = pWidth > 768 ? 100 : 136
const sqHeight = pWidth < 768 ? 400 : 600

  const PaginationItem: FC<{
    index: number
    backgroundColor: string
    length: number
    animValue: SharedValue<number>
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

console.log('hero images: ', heroImages)

  return (
    <View className="flex mb-[20px] max-h-[400px]  w-full max-w-7xl overflow-hidden rounded-xl">
      <Carousel
        style={{
          flexGrow:1,
          maxWidth: 1280,
          width: pWidth,
          height: isTab ? 400 : 300,
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
        data={heroImages}
        renderItem={({ item, index}):any => (
          <ImageBackground
            key={item._id}
            //height={pWidth/2}
            resizeMode='cover'
            alt={String(item._id)}
            source={item.image}
           //className='flex-1 w-full max-w-[1280px] max-h-[300px] aspect-[16/9]'
            style={{
              flex: 1,
              width: pWidth,
              maxWidth: 1280,
              maxHeight: 300,
              aspectRatio: 16/9,
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
                {String(item?.mainHeading)}
              </Text>
              <Text
                numberOfLines={2}
                style={{
                  textAlign: index === 1 ? 'right' : 'left',
                }}
                className="leading-2 mb-3 mt-[6px] max-h-[200px] max-w-[52%] flex-wrap break-words	text-xl font-bold tracking-wide text-yellow-50 drop-shadow-2xl md:text-3xl"
              >
                {item?.titleText}
              </Text>
            </View>
       

            {!!progressValue && (
              <View
                className={`absolute mx-auto w-[100px]  flex-row  justify-between ${isAndroid ? 'bottom-[5%]' : 'bottom-[6%]'} `}
              >
                {heroImages.map((backgroundColor, index) => {
                  return (
                    <PaginationItem
                      backgroundColor={'#46c4f6'}
                      animValue={progressValue}
                      index={index}
                      key={index}
                      length={heroImages.length}
                    />
                  )
                })}
              </View>
            )}
          </ImageBackground>
        )}
      />
    </View>
  )
}

