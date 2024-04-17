import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { getHeaderTitle, useHeaderHeight } from '@react-navigation/elements'
import { StatusBar } from 'expo-status-bar'


const screenWidth = Dimensions.get('window');

export default function LogoView({ props }) {

    const { navigation, route, options, back } = props;
    const title = getHeaderTitle(options, route.name);
   
    return (
      <View style={[styles.header, { height: hHeight }]}>

        <View style={styles.container}>
          {back && <Text>back</Text>}
          {title === 'index' ? <Text>Yeah Boy</Text> :
          <Text style={styles.title}>{title}</Text>
    }
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        padding: 15,
        backgroundColor: "blue",
        flexDirection: "row",
        alignItems: "center",
    },
    backButton: {
        zIndex: 1,
    },
    title: {
        flex: 1,
        textAlign: "center",
        flexDirection: "column",
        fontSize: 24,
        fontWeight: "bold",
        // marginLeft: -26,
    },
    header: {
        backgroundColor: 'red',
    }
  })