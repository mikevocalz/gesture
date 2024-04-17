import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';

interface TabBarIconProps {
  name: ComponentProps<typeof FontAwesome>['name']
  color: string
}

export const TabBarIcon = (props: TabBarIconProps) => {
  return(
    <FontAwesome size={28} style={styles.tabBarIcon} {...props} />
  ) 
};

export const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -4,
  },
});
