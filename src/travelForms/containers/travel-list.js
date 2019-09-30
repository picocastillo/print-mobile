import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';

class TravelList extends Component {
  render(){
    const list = [
      {
        title: "Order 2322",
        key: 1
      },
      {
        date: "12/2/12",
        key: 2
      },

    ];
    return (
        <FlatList
          data={list}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
    )
  }
}

export default TravelList;
