'use client'
import { Text, View, Image } from "react-native"
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
    id: 'second',
    name: 'Search',
    href: '/search'
  },
  {
    id: 'third',
  name: 'Feed',
    href: '/feed'
  },
  {
    id: 'fourth',
    name: 'Specials',
    href: '/specials'

  
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
                  className={`ml-[60px] text-[18px] font-bold leading-10 tracking-wide lg:flex  ${active ? 'text-[#2b089f] ' : 'text-black'}`}
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