/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';
const SideMenu = require('react-native-side-menu');

import Login from './src/components/Login';
import Articles from './src/components/Articles';
import Article from './src/components/Article';
import LeftNavigation from './src/components/LeftNavigation';

class Index extends React.Component {
    render() {
        return <Router hideNavBar={true}>
            <Scene key="root">
                <Scene key="articles" component={Articles} toggle={ this.props.toggle }/>
                <Scene key="article" component={Article} />
                <Scene key="login" component={Login} initial={true} login={this.props.login}/>
            </Scene>
        </Router>
    }
}

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.isLogin = false;
    }
    state = {
        isOpen: false
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item
        });
    }

    renderIsLogin() {

    }

    login() {
        this.setState({
            isLogin: true
        }, () => {
            Actions.articles();
        });
    }

    logout() {
        this.setState({
            isLogin: false
        });
    }

    render() {
        const menu = <LeftNavigation logout={this.logout.bind(this)} toggle={this.toggle}  navigator={navigator}/>;

        if( this.state.isLogin === true ) {
            return (
                <SideMenu menu={menu}
                          disableGestures={false}
                          isOpen={this.state.isOpen}
                          onChange={(isOpen) => this.updateMenuState(isOpen)}
                >
                    <Index login={this.login.bind(this)} toggle={this.toggle}/>
                </SideMenu>
            );
        } else {
            return <Index login={this.login.bind(this)} toggle={this.toggle}/>;
        }

    }
}

AppRegistry.registerComponent('hackathon', () => Application);
