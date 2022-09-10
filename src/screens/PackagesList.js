import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '../components/Card';

const PackagesList = () => {
  const [activeTab, setActivetab] = useState('Programs');
  const [packageData, setpackageData] = useState();

  const graphQlUrl = 'https://apidev4.sapien.systems/graphql';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      axios({
        url: graphQlUrl,
        method: 'post',
        data: {
          query: `
          query{
            fitnesspackages{
              data{
                id
                attributes{
                  packagename
                  level
                  aboutpackage
                 mode
                  tags
                  fitnesspackagepricing
                  
                }
              }
            }
          }`,
        },
      }).then(result => {
        setpackageData(result.data.data.fitnesspackages.data);
      });
    } catch (error) {
      console.log('Api Fetch error>>', error);
    }
  };

  const TabItem = ({title}) => (
    <TouchableOpacity
      style={{
        flex: 1,
        marginHorizontal: 1,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => setActivetab(title)}>
      <Text style={styles.tabText}>{title}</Text>
      {<View style={styles.underline(activeTab, title)}></View>}
    </TouchableOpacity>
  );

  return (
    <View style={styles.constainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Movement</Text>
        <View style={styles.tabList}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TabItem title="Tracker" />
            <TabItem title="Workouts" />
            <TabItem title="Programs" />
            <TabItem title="Teachers" />
            <TabItem title="Brands" />
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: 15,
          flexDirection: 'row',
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <Circle color={'#171c3f'} title="Yoga" />
          <Circle color={'#9598ae'} title="Zumba" />
          <Circle color={'#9598ae'} title="Martial Arts" />
          <Circle color={'#9598ae'} title="Running" />
          <Circle color={'#9598ae'} title="Cycling" />
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          marginTop: 40,
        }}>
        <View style={{width: '100%', paddingHorizontal: 30}}>
          <FlatList
            data={packageData}
            renderItem={({item}) => (
              <Card
                title={item.attributes.packagename}
                about={item.attributes.aboutpackage}
                level={item.attributes.level}
                tags={item.attributes.tags}
                price={item.attributes.fitnesspackagepricing[0].mrp}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default PackagesList;

const Circle = ({color, title}) => (
  <View style={{alignItems: 'center', justifyContent: 'center'}}>
    <View style={[styles.circle, {backgroundColor: color}]}></View>
    <Text style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 5,
    paddingTop: 3,
  },
  header: {
    width: '100%',
    height: 180,
    backgroundColor: '#171c3f',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 20,
  },
  tabList: {
    width: '100%',
    height: 50,
    marginTop: 60,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  tabText: {
    color: '#fff',
  },
  underline: (activeTab, title) => ({
    width: 80,
    backgroundColor: activeTab === title ? '#fff' : '#171c3f',
    height: 1,
    marginTop: 3,
    alignSelf: 'center',
  }),
  circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    margin: 12,
  },
});
