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

class Article extends React.Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource( {rowHasChanged: (r1, r2) => r1 !== r2});

        if( this.props == undefined || this.props.id == undefined) {
            this.state = { article: data[0], dataSource: ds.cloneWithRows(data)};
        } else {
            for (index = 0; index < data.length; ++index) {
                if( data[index].id == this.props.id ) {
                    this.state = { article: data[index], dataSource: ds.cloneWithRows(data)};
                }
            }
        }
    }

    renderRow(data, sectionID, rowID) {
        return (
            <View style={{ padding: 10, paddingBottom: 0, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity>
                        <Text onPress={() => Actions.article({id: data.id})} style={{ fontSize: 16 }}>{data.title}</Text>
                    </TouchableOpacity>
                </View>

                <View style={[article.articleInfo, {paddingBottom: 10 }]}>
                    <Text style={{ flex: 0.5, marginTop: 5, color: "#ccc" }}>{data.author}</Text>
                    <Text style={{ marginTop: 5, marginRight: 10, color: "#ccc" }}>{data.time}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={article.container}>
                <View style={article.header}>
                    <TouchableHighlight onPress={() => Actions.pop()}>
                        <Image
                            style={ article.toggleMenu }
                            source={require('./../img/back.png')}
                        />
                    </TouchableHighlight>
                    <View style={{ flex: 1 }}>
                        <Text style={ article.brand }>
                            <Image
                                style={ article.logo }
                                source={require('./../img/logo.png')}
                            />
                            Tinh Tế
                        </Text>
                    </View>
                </View>

                <View style={article.content}>
                    <Text style={{ fontSize: 16 }}>{this.state.article.title}</Text>

                    <View style={ article.articleInfo }>
                        <View style={ article.author }>
                            <Image
                                style={ article.authorAvatar }
                                source={require('./../img/avatar.png')}
                            />
                            <View style={ article.authorName }>
                                <Text>{data.author}</Text>
                                <Text style={{ marginTop: 5, color: "#ccc" }}>{this.state.article.time}</Text>
                            </View>
                        </View>

                        <View style={{ flex: 0.5 }}>
                            <Image resizeMode='contain' style={ article.countView }
                                   source={require('./../img/count-view.png')}
                            />
                        </View>
                    </View>

                    <Image resizeMode='contain' style={ article.articleImage }
                           // source={require('./../img/ReactNative.png')}
                           source={{ uri: this.state.article.image }}
                    />

                    <View style={{ padding: 10 }}>
                        <Text style={{ textAlign: "justify" }}>{this.state.article.description}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex:0.4, borderWidth: 1, height: 1, marginTop: 10 }}></View>
                    <View style={{ flex:0.2 }}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "800" }}>Shared</Text>
                    </View>
                    <View style={{ flex:0.4, borderWidth: 1, height: 1, marginTop: 10 }}></View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", borderBottomWidth: 2, paddingBottom: 10 }}>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 60, height: 60, marginTop: 7, marginRight: 5 }}
                            source={require('./../img/shared/imess-share.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 75, height: 75, marginRight: 5 }}
                            source={require('./../img/shared/fb-share.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 60, height: 60, marginTop: 8, marginRight: 10 }}
                            source={require('./../img/shared/twitter-share.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 60, height: 60, marginTop: 8 }}
                            source={require('./../img/shared/g-plus.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={{ fontSize: 16, fontWeight: "800", marginTop: 10, paddingLeft: 10 }}>Recommend</Text>

                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                    />
                </View>
            </ScrollView>
        );
    }
}

const article = StyleSheet.create({
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

module.exports = Article;