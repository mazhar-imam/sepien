import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Card = ({title, about, level, tags, price}) => {
  let color = '';
  if (level === 'Beginner') {
    color = '#4dc8d6';
  } else if (level === 'Intermediate') {
    color = '#cc9e33';
  } else {
    color = '#ae275f';
  }

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={{marginTop: 15}}>
          <Image
            style={{height: 100, width: 85, borderRadius: 8}}
            source={require('../assets/yoga.png')}
          />
        </View>
        <View style={{flex: 1, width: '100%', paddingLeft: 15}}>
          <View style={styles.bannerContainer}>
            <View style={[styles.banner, {backgroundColor: color}]}>
              <Text style={{color: '#fff', fontSize: 10}}>{level}</Text>
            </View>
          </View>
          <Text style={{color: '#333', fontSize: 16, fontWeight: '400'}}>
            {title}
          </Text>
          <View style={{width: '100%', height: 40}}>
            <Text style={{color: '#aaaaaa', marginRight: 40}}>{about}</Text>
          </View>
          <View style={styles.tagsContainer}>
            <View style={styles.tags}>
              <Text style={{color: '#000', fontSize: 12}}>{tags}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.lower}>
        <View
          style={{alignItems: 'center', justifyContent: 'center', padding: 5}}>
          <Text style={{color: '#40C057', fontSize: 16, fontWeight: '500'}}>
            <Image source={require('../assets/rupee.png')} />
            {price}
          </Text>
          <Text style={{color: 'grey', fontSize: 10}}>Per month</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    height: 175,
    marginBottom: 15,
    borderRadius: 12,
  },
  upper: {
    flexDirection: 'row',
    paddingLeft: 5,
  },
  lower: {
    // backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bannerContainer: {
    width: '100%',
    height: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  banner: {
    width: 90,
    height: 22,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tags: {
    backgroundColor: '#d5c262',
    width: 50,
    height: 22,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    width: '100%',
    borderWidth: 0.5,
    borderStyle: 'dashed',
  },
});
