'use client'
import { Text, View, Image, Pressable } from "react-native"
import { FC, ReactNode, useState } from "react"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MotiLink } from 'solito/moti/app'
import { useRouter } from 'solito/navigation'


interface ButtonLinkProps {
  children: ReactNode,
  href: string,
  as?: string | undefined,
  active: boolean,
  onPress: () => void,

}



const buttons = [
  {
    id: 'first',
    name: 'Home',
    href: '/'
  },

  {
    id: 'third',
  name: 'Feed',
    href: '/feed'
  },
  {
    id: 'fourth',
    name: 'Orders',
    href: '/orders'
  }
]


const ButtonLink = ({
  children,
  href,
  as,
  active,
  onPress,
}: ButtonLinkProps) => (
  <MotiLink
    href={href}
    as={as}
    active={active}
    onPress={onPress}
    animate={({ hovered, pressed }) => {
      'worklet'

      return {
        scale: pressed ? 0.98 : hovered ? 1.03 : 1,
      }
    }}
    transition={{
      type: 'timing',
      duration: 150,
    }}
  >
    {children}
  </MotiLink>
)


const SideBar: FC<any> = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [active, setActive] = useState('first');

  const router = useRouter()
  const { push} = router

  return (
    <>
      {showSidebar ? (
        <View
          className="fixed right-2 top-[20px] z-50 flex cursor-pointer items-center text-4xl "
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Icon name="close" size={40} color="#2c09a1" />
        </View>
      ) : (
        <View
          onClick={() => setShowSidebar(!showSidebar)}
          className="z-60 top-13 absolute right-2 flex cursor-pointer items-center"
        >
          <Icon name="menu" size={38} color="#2c09a1" />
        </View>
      )}

      <View
        style={{ height: '100vh' }}
        onClick={() => setShowSidebar(!showSidebar)}
        className={`shadow-3xl fixed right-0 top-0  h-full w-full bg-[#9c9b9b9d] text-white transition-opacity duration-700 ease-in   ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <View
          style={{ zIndex: 1000, height: '100vh' }}
          className="duration-400 fixed  bottom-0 right-0 top-0 w-screen  max-w-[400px] flex-1  space-y-2 border-l-[0.5px]  bg-zinc-100 pt-[130px] opacity-100 ease-in-out"
        >
          <View className="absolute left-[20px] top-[90px] w-full flex-row justify-between">
            <View className=" flex-row items-center ">
              <Pressable
                href="/studio"
                className=" h-[50px] w-[50px] overflow-hidden rounded-full border-[1px] border-neutral-950 hover:opacity-[80%] "
              >
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="User Avatar"
                  style={{ aspectRatio: 4 / 4, width: 50, height: 50 }}
                />
              </Pressable>
              <Text className="ml-3 text-xl font-bold text-black">Mike</Text>
            </View>
            <View className="flex-row items-center">
              <img
                alt="settings"
                style={{
                  height:30,
                  width: 30,
                  marginRight:35
                }}
                src="https://www.svgrepo.com/show/511122/settings.svg"
              />
              {/* <Text className=" text-md mr-[35px]  text-black">
                View Profile
              </Text> */}
            </View>
          </View>

          <View style={{ marginTop: 40 }} className="relative mt-[100px]" />
          {buttons.map((button: any, idx: number) => (
            <>
              <ButtonLink
                key={button.id}
                active={active === button.id}
                href={button.href}
                onPress={() => {
                  setActive(button.id)
                  setShowSidebar(!showSidebar)
                }}
              >
                <Text
                  className={`ml-[50px] text-[18px] font-bold leading-10 tracking-wide lg:flex  ${active ? 'text-[#2b089f] ' : 'text-black'}`}
                >
                  {button.name}
                </Text>
              </ButtonLink>
              <View className="h-[0.3px] min-w-[100vh] bg-black" />
            </>
          ))}
        </View>
      </View>
    </>
  )
}

export default SideBar