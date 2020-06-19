import React, { Component } from 'react';
import { Root } from "native-base";
import Routes from "./Route";
export default class App extends React.Component {
    render() {
        return (
            <Root>
                <Routes />
            </Root>
        );
    }
}