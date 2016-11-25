/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    ListView
} from 'react-native';
import Dimensions from 'Dimensions';

var Articles = require('./src/articles.js');

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class hackathon extends Component {
    pressLogin() {
        console.log('alo');
    }

    render() {
        return (
            <View style={[login.container, {flexDirection: "column"}]}>
                <View style={{marginTop: 50, flex: 0.2, flexDirection: "row", alignItems: "center"}}>
                    <Image
                        style={[login.logo, {}]}
                        source={require('./icon-checkin.png')}
                    />
                </View>

                <View style={[login.loginForm, {}]}>
                    <TextInput
                        style={login.inputLogin}
                        placeholder="E-mail" placeholderTextColor="rgb(0, 0, 0)"
                    />
                    <Image
                        style={{height: 1, width: deviceWidth * 0.8}}
                        source={require('./input-checkin.png')}
                    />
                    <TextInput
                        style={login.inputLogin}
                        placeholder="Password" placeholderTextColor="rgb(0, 0, 0)"
                    />
                </View>

                <View style={{ }}>
                    <TouchableOpacity style={[login.buttonLogin, {}]} onPress={() => this.pressLogin()}>
                        <Text style={[login.textButtonLogin, {}]}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, height: 30, justifyContent: "center", width: deviceWidth * 0.8 }}>
                    <Text style={{flex: 0.3, width: deviceWidth * 0.8, textAlign: "center" }}>OR</Text>
                </View>
                <View style={{ flex: 0.2 }}>
                    <TouchableOpacity style={[login.buttonRegister, {}]} onPress={() => this.pressLogin()}>
                        <Text style={[login.textButtonRegister, {}]}>ĐĂNG KÝ</Text>
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
        width: 140,
        height: 140
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


class Articles_2 extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {"id": 1, "name": "thanh"},
                {"id": 2, "name": "trung"},
                {"id": 3, "name": "tien"}
            ])
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData.name}</Text>}
            />
        );
    }
} 

AppRegistry.registerComponent('hackathon', () => Articles);
