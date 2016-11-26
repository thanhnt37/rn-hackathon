const React = require('react');
const {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    TouchableOpacity
} = require('react-native');
import {Actions, Scene, Router} from 'react-native-router-flux';

const { Component } = React;

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

module.exports = class Menu extends Component {
    render() {
        return (
            <ScrollView scrollsToTop={false} style={{}}>
                <View style={{ backgroundColor: '#F5FCFF', paddingBottom: 10 }}>
                    <Image
                        style={{ resizeMode: 'contain', width: 180, height: 180, margin: 35, marginBottom: 20 }}
                        source={require('./../img/avatar.png')}
                    />
                    <Text style={{ fontSize: 20, fontWeight: "600", textAlign: "center" }}>Nguyễn Tất Thành</Text>
                </View>

                <View>
                    <TouchableOpacity
                        style={{  borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                        onPress={() => {Actions.articles(); this.props.toggle()}}
                    >
                        <Text
                            style={{ textAlign: "center", padding: 15, fontSize: 16 }}>
                            Trang Chủ
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{  borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                        onPress={() => {Actions.articles({id: 2}); this.props.toggle()}}
                    >
                        <Text
                            style={{ textAlign: "center", padding: 15, fontSize: 16 }}>
                            Điện Thoại
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{  borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                        onPress={() => {Actions.articles({id: 3}); this.props.toggle()}}
                    >
                        <Text
                            style={{ textAlign: "center", padding: 15, fontSize: 16 }}>
                            Xe & Cuộc Sống
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{  borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                        onPress={() => {Actions.articles({id: 4}); this.props.toggle()}}
                    >
                        <Text
                            style={{ textAlign: "center", padding: 15, fontSize: 16 }}>
                            Lập Trình
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{  borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                        onPress={() => { this.props.logout(); Actions.login(); this.props.toggle()}}
                    >
                        <Text
                            style={{ textAlign: "center", padding: 15, fontSize: 16 }}>
                            Thoát
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
});
