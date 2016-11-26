
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    ListView,
    Alert
} from 'react-native';
import Dimensions from 'Dimensions';
import {Actions, Scene, Router} from 'react-native-router-flux';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const USER_NAME = 'admin';
const PASSWORD  = '123';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            pass: ""
        };

        this.checkLogin = this.checkLogin.bind(this);
    }

    checkLogin() {
        if( !this.state.user || !this.state.pass ) {
            Alert.alert(
                'Error !!!',
                'Pleases fill User Name or Password',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')}
                ]
            )
        } else if( this.state.user === USER_NAME && this.state.pass === PASSWORD ) {
            this.props.login();
            Actions.articles({});
        } else {
            Alert.alert(
                'Error !!!',
                'Wrong User Name or Password !!!',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')}
                ]
            )
        }
    }

    render() {
        return (
            <View style={[login.container, {flexDirection: "column"}]}>
                <View style={{marginTop: 50, flex: 0.2, flexDirection: "row", alignItems: "center"}}>
                    <Image resizeMode="contain" style={[login.logo, {}]}
                        source={require('./../img/logo.png')}
                    />
                </View>

                <View style={[login.loginForm, {}]}>
                    <TextInput
                        onChangeText = { (text) => this.setState({user: text.toLowerCase()}) }
                        style={login.inputLogin}
                        placeholder="User Name" placeholderTextColor="rgb(0, 0, 0)"
                    />
                    <Image
                        style={{height: 1, width: deviceWidth * 0.8}}
                        source={require('./../img/input-checkin.png')}
                    />
                    <TextInput
                        secureTextEntry={true}
                        onChangeText = { (text) => this.setState({pass: text}) }
                        style={login.inputLogin}
                        placeholder="Password" placeholderTextColor="rgb(0, 0, 0)"
                    />
                </View>

                <View style={{ flex: 0.3 }}>
                    <TouchableOpacity style={[login.buttonLogin, { marginBottom: 10 }]} onPress={ this.checkLogin }>
                        <Text style={[login.textButtonLogin, {}]}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const login = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(39, 148, 206)'
    },
    logo: {
        width: 150,
        height: 150
    },
    loginForm: {
        width: deviceWidth * 0.8,
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 5,
        marginTop: 30
    },
    inputLogin: {
        width: deviceWidth * 0.8,
        height: 45,
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 5,
        paddingLeft: 20,
        fontSize: 14
    },
    buttonLogin: {
        backgroundColor: "rgb(100, 179, 220)",
        height: 40,
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 5
    },
    textButtonLogin: {
        width: deviceWidth * 0.8,
        textAlign: "center",
        color: "rgb(255, 255, 255)"
    },
    buttonRegister: {
        backgroundColor: "rgb(100, 179, 220)",
        height: 40,
        justifyContent: "center",
        borderRadius: 5
    },
    textButtonRegister: {
        width: deviceWidth * 0.8,
        textAlign: "center",
        color: "rgb(255, 255, 255)"
    }
});

module.exports = Login;