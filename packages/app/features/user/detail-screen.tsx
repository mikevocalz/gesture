'use client'
import { createParam } from 'solito'
import { TextLink, useRouter } from 'solito/navigation'
import { View, Text, Pressable, Dimensions, Platform } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { useParams } from 'solito/navigation'
import Hero from 'app/components/hero/hero.web'
type Params = { id: string; item: string }

export function UserDetailScreen() {
  const params = useParams()
 const router = useRouter()


 console.log('im params: ', params)
    
 const width = Dimensions.get('window').width

  return (
    <View className="min-h-screen w-full max-w-7xl flex-1 items-center self-center bg-blue-300">
      {/* <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text> */}

      <Text className="mb-4 text-center font-bold">Hello</Text>

      <Pressable
        onPress={() => router.back()}
        className="items-center justify-center rounded-xl bg-red-800 px-5 py-3"
      >
        <Text className="text-center font-bold">Go Back</Text>
      </Pressable>
      {Platform.OS !== 'web' ? (
        <View style={{ flex: 1 }}>
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => (
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  justifyContent: 'center',
                }}
              >
                <Text style={{ textAlign: 'center', fontSize: 30 }}>
                  {index}
                </Text>
              </View>
            )}
          />
        </View>
      ) : (
        <Hero heroImages={[...new Array(6).keys()]} />
      )}
    </View>
  )
}
