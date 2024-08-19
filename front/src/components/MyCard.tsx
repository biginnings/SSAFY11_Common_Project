import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { colors } from '../constants/color';

interface MyCardProps {}

function MyCard({}: MyCardProps) {


  return (
    <View style={styles.container}>
      <Text style={styles.cardText}>등록된 카드가 없어요</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent : 'center'
  },
  cardText : {
    textAlign : 'center',
    marginBottom : 100,
    color : colors.BLACK,
    fontSize : 20
  }
});

export default MyCard;
