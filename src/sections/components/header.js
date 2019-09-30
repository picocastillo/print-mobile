import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';

function Header(props){
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
          source={require('../../../assets/images/logo.jpeg')}
          style={styles.logo}
          />
          <View style={styles.right}>
          {props.children}
          </View>
        </View>
      </SafeAreaView>
    </View>
  )

}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain'
  },
  container: {
    padding: 20,
    flexDirection: 'row'
  },
  right: {
    flex: 1,
    flexDirection: 'row'
  }
})

export default Header;
