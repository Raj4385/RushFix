import React, { Component } from 'react';
import {TouchableOpacity} from 'react-native';
import { Content, Container, Text } from "native-base";
import { Header } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

class ContactUs extends Component {
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
                        <Text style={{margin:5, fontWeight:"bold", fontSize:20}}> Contact Us </Text>
                        <Text style={{marginLeft:10, marginTop: 10}}> <Text style={{fontWeight:"bold"}}>Address:</Text> #7, Ascendas IT Park,</Text>
                        <Text style={{marginLeft:85}}>Taramani,</Text>
                        <Text style={{marginLeft:85}}>Chennai - 600113,</Text>
                        <Text style={{marginLeft:85}}>Tamil Nadu, India.</Text>
                        <Text style={{margin:10}}> <Text style={{fontWeight:"bold"}}>Phone:</Text> +919800000000</Text>
                        <Text style={{margin:10}}> <Text style={{fontWeight:"bold"}}>Email Address:</Text> AGHome@gmail.com</Text>

                    </Content>
                </Container>
            </ScrollView>
        );
    }
};

export default ContactUs;