/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ListItem from '../Shared/ListItem';
import { SliderBox } from "react-native-image-slider-box";

const ITEM_WIDTH = Dimensions.get('window').width;

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require("../Assets/Electrician.jpg"),
        require("../Assets/Carpenter.jpg"),
        require("../Assets/Cleaner.jpg"),
        require("../Assets/InteriorDesigner.jpg"),
        require("../Assets/Painter.jpeg"),
        require("../Assets/Plumber.jpg"),
        require("../Assets/Mechanic.jpg")
      ],
      selectedCategory: -1
    };
    this.GetSubCategory = this.GetSubCategory.bind(this);
    this.OnBackClick = this.OnBackClick.bind(this);
  }

  GetSubCategory(categoryId) {
    this.setState({ selectedCategory: categoryId });
  }

  OnBackClick(){
    this.setState({selectedCategory : -1});
  }

  render() {
    var l_data = []
    var l_SubCategory = []
    var l_leftIcon, l_RightIcon;

    if(this.state.selectedCategory > -1)
    {
      l_leftIcon = <TouchableOpacity onPress={this.OnBackClick}><Icon name="arrow-circle-left" size={30} color="#fff" /></TouchableOpacity>
      l_RightIcon = <Icon name="shopping-cart" size={30} color="#fff" />
    }
    else
    {
      l_leftIcon = <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}><Icon name="bars" size={30} color="#fff" /></TouchableOpacity>
      l_RightIcon = ""
    }


    

    for (let i = 0; i < 7; i++) {
      if (i == 0) {
        var lineItem = {
          "name": "Electrician",
          "src": require("../Assets/Electrician.jpg"),
          "id": i
        }
      }
      else if (i == 1) {
        var lineItem = {
          "name": "Carpenter",
          "src": require("../Assets/Carpenter.jpg"),
          "id": i
        }
      }
      else if (i == 2) {
        var lineItem = {
          "name": "Cleaner",
          "src": require("../Assets/Cleaner.jpg"),
          "id": i
        }
      }
      else if (i == 3) {
        var lineItem = {
          "name": "Interior Design",
          "src": require("../Assets/InteriorDesigner.jpg"),
          "id": i
        }
      }
      else if (i == 4) {
        var lineItem = {
          "name": "Painter",
          "src": require("../Assets/Painter.jpeg"),
          "id": i
        }
      }
      else if (i == 5) {
        var lineItem = {
          "name": "Plumber",
          "src": require("../Assets/Plumber.jpg"),
          "id": i
        }
      }
      else {
        var lineItem = {
          "name": "Mechanic",
          "src": require("../Assets/Mechanic.jpg"),
          "id": i
        }
      }
      l_data.push(lineItem);
    }

    if (this.state.selectedCategory > -1) {
      l_SubCategory = <View>
        <View style={styles.tile}>
          <View style={{ margin: 5 }}>
            <Image source={require("../Assets/Wiring.jpg")} style={{ width: 100, height: 100, borderRadius: 100 / 2 }} />
          </View>
          <View style={{ margin: 40 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Wiring</Text>
          </View>
        </View>
        <View style={styles.tile}>
          <View style={{ margin: 5 }}>
            <Image source={require("../Assets/Fitting.jpg")} style={{ width: 100, height: 100, borderRadius: 100 / 2 }} />
          </View>
          <View style={{ margin: 40 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Equipment Fitting</Text>
          </View>
        </View>
      </View>
    }
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaProvider>
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <Header
                leftComponent={l_leftIcon}
                centerComponent={{ text: 'AG Home Application', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                 rightComponent={l_RightIcon}
                containerStyle={{
                  backgroundColor: '#FADA5E',
                  justifyContent: 'space-around',
                }}
              />
              {this.state.selectedCategory < 0 ?
              <SliderBox images={this.state.images} style={{ margin: 5, borderRadius: 6, width: null, height: 200 }} autoplay circleLoop /> : <></>
              }
              <View style={styles.container}>
                {this.state.selectedCategory > -1 ?
                  l_SubCategory
                  :
                  <FlatList
                    numColumns={2}
                    data={l_data}
                    renderItem={({ item }) => {
                      return <ListItem itemWidth={(ITEM_WIDTH - 20) / 2} data={item} GetSubCategory={this.GetSubCategory} />
                    }}
                    keyExtractor={item => item.id}
                  />
                }
              </View>
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  tile: {
    backgroundColor: '#ffffff',
    height: 110,
    margin: 5,
    flex: 1,
    flexDirection: 'row'
  }
});

export default MainPage;
