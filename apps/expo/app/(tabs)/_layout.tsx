import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Dimensions, Image, Platform, Pressable,Text, View} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import Header from 'app/components/header';
import LogoView from 'app/components/LogoView'

import Logo from '../../assets/images/GESTURE-LOGO.png';
import { TabBarIcon}  from 'app/components/TabBarIcon';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/


export default function TabLayout() {
const headerHeight = useHeaderHeight();

const {width} = Dimensions.get('screen');
const isTab = width >= 600;
const isAndroid = Platform.OS === 'android'

  return (
    <Tabs
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}

      screenOptions={{
        tabBarActiveTintColor: '#dc9b02',
        tabBarInactiveTintColor: '#1e066e',
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerTitleAlign: 'center',
        headerTitle: (props) => (
          <Image
            alt={'logo-image'}
            source={require('../../assets/images/GESTURE-LOGO.png')}
            style={{
              flex: 1,
              resizeMode: 'contain',
              width: isTab ? 200 : 150,
              height: 50,
            }}
          />
        ),
        headerStyle: {
          backgroundColor: '#fff',
          height: isTab ? 100 : undefined,
          elevation: 0,
          borderBottomWidth: 0,
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          height: isTab ? 80 : isAndroid ? 52 : 76,
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: isTab ? 20 : 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerLeft: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="shopping-cart"
                    size={isTab ? 34 : 30}
                    color={'#2b089f'}
                    style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="user-circle"
                    size={isTab ? 34 : 30}
                    color={'#2b089f'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'G-Feed',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="th-large" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-ul" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </Tabs>
  )
}
