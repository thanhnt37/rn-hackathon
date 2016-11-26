import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Alert,
    Image
} from 'react-native';
import Dimensions from 'Dimensions';
import {Actions, Scene, Router} from 'react-native-router-flux';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

var data = [
    {
        id: 1,
        title: '[Hà Nội - 25/11] Hackathon tập làm app Android và iOS bằng React Native trong 8 tiếng',
        image: 'https://blog.algolia.com/wp-content/uploads/2015/12/react-native.png',
        author: 'Duy Luân',
        category_id: 1,
        time: '5 phút trước',
        description: 'Mời anh em developer Hà Nội đến tham dự một buổi Hackathon làm quen với React Native. Nếu anh em chưa biết thì React Native là một bộ framework do chính Facebook phát triển, nó cho phép bạn viết app native cho iOS, Android, Windows bằng javascript. Framework này rất dễ dùng, tốc độ phát triển nhanh chóng, học cũng rất dễ nhất là với anh em nào đã có kinh nghiệm làm web.'
    },
    {
        id: 2,
        title: 'Tiểu sử Ngọc Trinh - Nữ hoàng nội y - Người nổi tiếng',
        author: 'Duy Luân',
        image: 'http://media.tiin.vn//archive/imageslead/280/201607/20160701/thumb00_091833663650582.jpg',
        category_id: 1,
        time: '5 phút trước',
        description: 'Mời anh em developer Hà Nội đến tham dự một buổi Hackathon làm quen với React Native. Nếu anh em chưa biết thì React Native là một bộ framework do chính Facebook phát triển, nó cho phép bạn viết app native cho iOS, Android, Windows bằng javascript. Framework này rất dễ dùng, tốc độ phát triển nhanh chóng, học cũng rất dễ nhất là với anh em nào đã có kinh nghiệm làm web.'
    },
    {
        id: 3,
        title: 'Ngoc Trinh : Lộ hình ảnh thật chưa photoshop của Ngọc Trinh',
        author: 'Duy Luân',
        image: 'http://trangdiemcanhan.net/tdcn-media/uploads/2014/10/ngoc-trinh.png',
        category_id: 2,
        time: '5 phút trước',
        description: 'Mời anh em developer Hà Nội đến tham dự một buổi Hackathon làm quen với React Native. Nếu anh em chưa biết thì React Native là một bộ framework do chính Facebook phát triển, nó cho phép bạn viết app native cho iOS, Android, Windows bằng javascript. Framework này rất dễ dùng, tốc độ phát triển nhanh chóng, học cũng rất dễ nhất là với anh em nào đã có kinh nghiệm làm web.'
    },
    {
        id: 4,
        title: 'Ngọc Trinh : Sao Hàn cũng phải bái phục cách cư xử của Ngọc Trinh',
        author: 'Duy Luân',
        image: 'http://u.planb.com.br/wp-content/uploads/2016/02/react3.jpg',
        category_id: 2,
        time: '5 phút trước',
        description: 'Mời anh em developer Hà Nội đến tham dự một buổi Hackathon làm quen với React Native. Nếu anh em chưa biết thì React Native là một bộ framework do chính Facebook phát triển, nó cho phép bạn viết app native cho iOS, Android, Windows bằng javascript. Framework này rất dễ dùng, tốc độ phát triển nhanh chóng, học cũng rất dễ nhất là với anh em nào đã có kinh nghiệm làm web.'
    },
    {
        id: 5,
        title: 'Khắc Tiệp nghẹn vì Ngọc Trinh lẫn Kỳ Hân lên xe hoa trong 2016',
        author: 'Duy Luân',
        image: 'http://vnmedia.vn/dataimages/201511/original/images1600391_12.jpg',
        category_id: 3,
        time: '5 phút trước',
        description: 'Mời anh em developer Hà Nội đến tham dự một buổi Hackathon làm quen với React Native. Nếu anh em chưa biết thì React Native là một bộ framework do chính Facebook phát triển, nó cho phép bạn viết app native cho iOS, Android, Windows bằng javascript. Framework này rất dễ dùng, tốc độ phát triển nhanh chóng, học cũng rất dễ nhất là với anh em nào đã có kinh nghiệm làm web.'
    },
    {
        id: 6,
        title: 'Phát hờn với vòng 3 cong cớn của Ngọc Trinh - Gia đình & Pháp luật',
        author: 'Duy Luân',
        image: 'http://media.doisongphapluat.com/449/2015/7/22/ngoc-trinh.jpg',
        category_id: 3,
        time: '5 phút trước',
        description: 'Mời anh em developer Hà Nội đến tham dự một buổi Hackathon làm quen với React Native. Nếu anh em chưa biết thì React Native là một bộ framework do chính Facebook phát triển, nó cho phép bạn viết app native cho iOS, Android, Windows bằng javascript. Framework này rất dễ dùng, tốc độ phát triển nhanh chóng, học cũng rất dễ nhất là với anh em nào đã có kinh nghiệm làm web.'
    },
    {
        id: 7,
        title: 'Vòng 3 thật của Ngọc Trinh khi không sử dụng quần độn',
        author: 'Duy Luân',
        image: 'http://media.ngoisao.vn/resize_580/news/2016/09/14/ngoc-trinh-ngot-ngao12-ngoisao.vn.jpg',
        category_id: 4,
        time: '5 phút trước',
        description: 'Mời anh em developer Hà Nội đến tham dự một buổi Hackathon làm quen với React Native. Nếu anh em chưa biết thì React Native là một bộ framework do chính Facebook phát triển, nó cho phép bạn viết app native cho iOS, Android, Windows bằng javascript. Framework này rất dễ dùng, tốc độ phát triển nhanh chóng, học cũng rất dễ nhất là với anh em nào đã có kinh nghiệm làm web.'
    },
    {
        id: 8,
        title: 'Ngọc Trinh lại khoe vòng 1 và đường cong nóng bỏng',
        author: 'Duy Luân',
        image: 'http://afamily1.mediacdn.vn/k:thumb_w/600/8JtZYBME2SUtEok2WIOUV7c3Os5pvZ/Image/2016/09/3-11-7db63/ngoc-trinh.jpg',
        category_id: 4,
        time: '5 phút trước',
        description: 'Mời anh em developer Hà Nội đến tham dự một buổi Hackathon làm quen với React Native. Nếu anh em chưa biết thì React Native là một bộ framework do chính Facebook phát triển, nó cho phép bạn viết app native cho iOS, Android, Windows bằng javascript. Framework này rất dễ dùng, tốc độ phát triển nhanh chóng, học cũng rất dễ nhất là với anh em nào đã có kinh nghiệm làm web.'
    }
];

class Articles extends React.Component{
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource( {rowHasChanged: (r1, r2) => r1 !== r2});
        var newData = [];
        if( this.props == undefined || this.props.id == undefined) {
            newData = data;
        } else {
            for (index = 0; index < data.length; ++index) {
                if( data[index].category_id == this.props.id ) {
                    newData.push(data[index]);
                }
            }
        }

        this.state = { dataSource: ds.cloneWithRows(newData)};
    }

    renderRow(data, sectionID, rowID) {
        return (
            <View style={articles.rowListView}>
                <View style={{ flex: 1 }}>
                    <Text onPress={() => Actions.article({id: data.id})} style={{ fontSize: 16 }}>{data.title}</Text>
                </View>

                <View style={ articles.articleInfo }>
                    <View style={ articles.author }>
                        <Image
                            style={ articles.authorAvatar }
                            source={require('./../img/avatar.png')}
                        />
                        <View style={ articles.authorName }>
                            <Text>{data.author}</Text>
                            <Text style={{ marginTop: 5, color: "#ccc" }}>{data.time}</Text>
                        </View>
                    </View>

                    <View style={{ flex: 0.5 }}>
                        <Image resizeMode='contain' style={ articles.countView }
                               source={require('./../img/count-view.png')}
                        />
                    </View>
                </View>

                <TouchableHighlight onPress={() => Actions.article({id: data.id})}>
                    <Image resizeMode='contain' style={ articles.articleImage }
                           // source={require('./../img/ReactNative.png')}
                           source={{ uri: data.image }}
                    />
                </TouchableHighlight>

                <View style={{ padding: 10 }}>
                    <Text style={{ textAlign: "justify" }}>{data.description}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={articles.container}>
                <View style={articles.header}>
                    <TouchableHighlight onPress={() => this.props.toggle()}>
                        <Image
                            style={ articles.toggleMenu }
                            source={require('./../img/menu.png')}
                        />
                    </TouchableHighlight>
                    <View style={{ flex: 1 }}>
                        <Text style={ articles.brand }>
                            <Image
                                style={ articles.logo }
                                source={require('./../img/logo.png')}
                            />
                            Tinh Tế
                        </Text>
                    </View>
                </View>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

const articles = StyleSheet.create({
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
    rowListView: {
        flex: 0,
        flexDirection: 'column',
        padding: 10,
        marginBottom: 10,
        backgroundColor: "rgb(254, 254, 254)",
        borderBottomWidth: 1,
        borderBottomColor: "rgb(226, 226, 226)"
    },
    articleInfo: {
        flexDirection: "row", marginTop: 5
    },
    author: {
        flex: 0.5, height: 60, flexDirection: "row"
    },
    authorAvatar: {
        width: 40, height: 40, marginTop: 5
    },
    authorName: {
        paddingTop: 8, paddingLeft: 10
    },
    countView: {
        width: 170, marginTop: 10
    },
    articleImage: {
        width: (deviceWidth - 20), height: 170
    },
});

Articles.propsType = {
    id: React.PropTypes.string
};

module.exports = Articles;
