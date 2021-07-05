import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, width: '100%', paddingHorizontal: 5}}>
        <View style={styles.topBar}>
          <View style={{flex: 4, alignItems: 'center', flexDirection: 'row'}}>
            <Text style={styles.textStyle}>encoded_programmer</Text>
            <View style={styles.downArroe}>
              <Icon name="angle-down" size={20} />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View
              style={{borderWidth: 2, borderRadius: 5, paddingHorizontal: 2}}>
              <Icon name="plus" size={20} />
            </View>
            <Icon name="bars" size={20} />
          </View>
        </View>

        <View style={{height: 120, flexDirection: 'row', marginTop: 10}}>
          <View style={{width: 120, padding: 10}}>
            <View style={{flex: 1, borderRadius: 60, overflow: 'hidden'}}>
              <Image
                source={require('./assets/encode.jpg')}
                style={{width: '100%', height: '100%'}}
              />
            </View>
          </View>
          <View style={styles.followers}>
            <Text style={styles.textStyle}>7</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.followers}>
            <Text style={styles.textStyle}>26</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.followers}>
            <Text style={styles.textStyle}>10</Text>
            <Text>Following</Text>
          </View>
        </View>

        <View style={{paddingHorizontal: 10}}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Prabhat Ranjan</Text>
          <Text style={{fontSize: 17, color: 'grey'}}>Personal Blog</Text>
          <Text style={{fontSize: 17}}>Programmer</Text>
          <Text style={{fontSize: 17}}>SELECT *</Text>
          <Text style={{fontSize: 17}}>FROM "WORLD"</Text>
          <Text style={{fontSize: 17}}>
            WHERE "SOMEONE"...<Text>more</Text>
          </Text>
          <Text style={{fontSize: 16, color: 'blue'}}>
            www.sanganastery.live/
          </Text>

          <View style={styles.button}>
            <Text style={{fontWeight: 'bold'}}>Edit Profile</Text>
          </View>
          <View style={{width: '100%', flexDirection: 'row', marginTop: 5}}>
            <View style={styles.smallbutton}>
              <Text style={{fontWeight: 'bold'}}>Insights</Text>
            </View>
            <View style={styles.smallbutton}>
              <Text style={{fontWeight: 'bold'}}>Email Address</Text>
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
          <View
            style={{
              width: '100%',
              height: 60,
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <View style={[styles.menuButton, {borderBottomWidth: 1}]}>
              <Icon name="table" size={20} />
            </View>
            <View style={[styles.menuButton]}>
              <Icon name="video" size={20} />
            </View>
            <View style={[styles.menuButton]}>
              <Icon name="id-badge" size={20} />
            </View>
          </View>
        </View>
        <View style={styles.bottomBar}>
          <Icon name="home" size={20} />
          <Icon name="search" size={20} />
          <Icon name="video" size={20} />
          <Icon name="heart" size={20} />
          <Icon name="user-circle" size={20} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 0.2,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  downArroe: {
    height: '100%',
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
  followers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    borderRadius: 5,
    borderWidth: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 15,
  },
  smallbutton: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  menuButton: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  bottomBar: {
    height: 45,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 0.2,
  },
});
