'use client'
import { View, Text, Pressable, useWindowDimensions } from 'react-native'
import Image from "next/image";
import { Link } from 'solito/link';
import { SolitoImage } from 'solito/image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Footer, Header, Nav } from '@expo/html-elements'
import SideBar from './SideBar';
import { MotiLink } from 'solito/moti/app'
import { usePathname } from 'solito/navigation'
import GestureLogo from './svgs/GestureLogo';




const headerLinks: Array<{
  pathname: string
  isActive(pathname: string): boolean
  name: string
  protected?: boolean
}> = [
  {
    pathname: '/',
    isActive: (pathname) => pathname === '/',
    name: 'Home',
  },
  {
    pathname: '/feed',
    isActive: (pathname) => pathname.startsWith('/feed'),
    name: 'Feed',
    protected: false,
  },
  {
    pathname: '/account',
    isActive: (pathname) => pathname.startsWith('/account'),
    name: 'Account',
  },
  {
    pathname: '/orders',
    isActive: (pathname) => pathname.startsWith('/orders'),
    name: 'Orders',
  },
  {
    pathname: '/studio',
    isActive: (pathname) => pathname.startsWith('/studio'),
    name: 'Admin',
  },
]

export function WebHeader() {
  let session
  let comments
  const items: number = 10

  const { width, height } = useWindowDimensions();
  const pathname = usePathname()


  return (
    <Header className='headingNav inset-x-0 fixed top-0 right-0' >
      <View className='sticky flex-1 w-full drop-shadow-xl  left-0 top-0 right-0 z-30 flex items-center justify-center bg-gray-100  h-[80px] '>
        <View className=' flex-row w-screen max-w-7xl pr-2 justify-between'>
          <View className="flex items-center justify-center ml-1 ">
            <Link href="/">
              <Pressable className="relative h-[70px] ml-2 cursor-pointer transition hover:opacity-90">
                <GestureLogo width={180} height={74} />
              </Pressable>
            </Link>
          </View>
          <Nav
            className="hiddenNav"
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}  >


            {headerLinks.map((headerLink: any, idx: number) => {
              const active = headerLink.isActive(pathname)

              return (
                <MotiLink
                  key={idx}
                  href={headerLink.pathname}
                  animate={({ hovered, pressed }) => {
                    'worklet'
                    return {
                      scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                    }
                  }}
                  transition={{
                    type: 'timing',
                    duration: 150,
                  }}
                  style={{ marginHorizontal: 8 }}
                >
                  <Text
                    className={`hidden text-[16px] font-bold leading-10 tracking-wide lg:flex  ${active ? 'text-[#2c09a1] ' : 'text-black'}`}
                  >
                    {headerLink.name}
                  </Text>
                </MotiLink>
              )
            }
            )}


          </Nav>
          {width <= 800 &&
            <View className="flex items-center flex-row justify-center ">
              <SideBar />
            </View>
          }
        </View>
      </View>
    </Header>
  )
}


