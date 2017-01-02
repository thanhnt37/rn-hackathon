import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView
} from 'react-native';
import Dimensions from 'Dimensions';
import {Actions, Scene, Router} from 'react-native-router-flux';
import MapView, { Marker } from 'react-native-maps';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({lastPosition});

            this.setState({region:{
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }});
        });
    }

    componentWillUnmount() {
        // navigator.geolocation.clearWatch(this.watchID);
    }

    onRegionChange = (region) => {
        // this.setState({ region:region });
    }

    render() {
        return (
            <View style={map.container}>
                <View style={map.header}>
                    <TouchableHighlight onPress={() => this.props.toggle()}>
                        <Image
                            style={ map.toggleMenu }
                            source={require('./../img/menu.png')}
                        />
                    </TouchableHighlight>
                    <View style={{ flex: 1 }}>
                        <Text style={ map.brand }>
                            <Image
                                style={ map.logo }
                                source={require('./../img/logo.png')}
                            />
                            Tinh Tế
                        </Text>
                    </View>
                </View>

                <View style={map.content}>
                    <MapView
                        style={map.map}
                        region={this.state.region}
                        onRegionChange={this.onRegionChange}
                    />
                </View>
            </View>
        );
    }
}

const map = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    header: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: "rgb(21, 40, 255)",
        justifyContent: 'center'
    },
    toggleMenu: {
        width: 30, height: 30, marginTop: 15
    },
    brand: {
        textAlign: 'center', fontSize: 24, color: 'rgb(233, 255, 247)', marginTop: 15
    },
    logo: {
        width: 35, height: 35, marginTop: 10, marginRight: 8
    },
    content: {
        flex: 0,
        flexDirection: 'column',
        padding: 10,
        marginBottom: 10,
        backgroundColor: "rgb(254, 254, 254)",
        borderBottomWidth: 1,
        borderBottomColor: "rgb(226, 226, 226)"
    },
    map: {
        width: deviceWidth - 20,
        height: deviceHeight - 90
    }
});

module.exports = Map;