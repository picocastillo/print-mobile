import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from './src/screens/container/home';

type Props = {};

export default class App extends Component<Props> {
  render(){
    return (
      <Home>
        <Text>Header</Text>
        <Text>Content</Text>
        <Text>Footer</Text>
      </Home>
    )
  }
}

// import { Constants } from 'expo';
//
// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>
//           Hello, world!
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#34495e',
//   },
// });
