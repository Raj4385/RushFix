import React, { Component } from 'react';
import {TouchableOpacity} from 'react-native';
import { Content, Container, Text } from "native-base";
import { Header } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

class AboutUs extends Component {
    render() {
        return (
            <ScrollView>
                <Header
                    leftComponent={<TouchableOpacity onPress={() => this.props.navigation.openDrawer()}><Icon name="bars" size={30} color="#fff" /></TouchableOpacity>}
                    centerComponent={{ text: 'AG Home Application', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    rightComponent={<TouchableOpacity onPress={() => this.props.navigation.navigate('MainPage')}><Icon name="home" size={30} color="#fff" /></TouchableOpacity>}
                    containerStyle={{
                        backgroundColor: '#FADA5E',
                        justifyContent: 'space-around',
                    }}
                />
                <Container>
                    <Content>
                        <Text style={{margin:5, fontWeight:"bold",fontSize:20}}> About AG </Text>
                        <Text style={{margin:10}}> &nbsp; &nbsp; &nbsp;We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We sell great products to solve your home needs. </Text>
                        <Text style={{margin:10}}> &nbsp; &nbsp; &nbsp;Our products are suitable for all types pf families willing to improve their lifestyle. </Text>
                    </Content>
                </Container>
            </ScrollView>
        );
    }
};

export default AboutUs;