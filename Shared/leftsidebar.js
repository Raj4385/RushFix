import React, { Component } from "react"
import { Content, List, ListItem, Container, Left, Right, Icon, Text } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationActions } from 'react-navigation';


export default class LeftSideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    navigateToScreen = (route) => () => {
        const navigate = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigate);
    }

    render() {
        return (
            <ScrollView>
                <Container>
                    <Content>
                        <List>
                            <ListItem onPress={() => this.props.navigation.navigate('AboutUs')}>
                                <Left>
                                    <Text>About Us</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem onPress={() => this.props.navigation.navigate('MainPage')}>
                                <Left>
                                    <Text>Home</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem onPress={() => this.props.navigation.closeDrawer()}>
                                <Left>
                                    <Text>Sign In</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem onPress={() => this.props.navigation.closeDrawer()}>
                                <Left>
                                    <Text>Profile</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem onPress={() => this.props.navigation.closeDrawer()}>
                                <Left>
                                    <Text>Status</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem onPress={() => this.props.navigation.navigate('ContactUs')}>
                                <Left>
                                    <Text>Contact Us</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
            </ScrollView>
        )
    }
}