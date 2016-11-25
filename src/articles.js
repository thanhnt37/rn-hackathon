import React from 'react';

import {
    Component,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Alert,
    Image
} from 'react-native';

var data = [
    {
        title: 'Chủ đầu tư Leman: Thu Minh đã thanh lý hợp đồng căn hộ từ lâu',
        subTitle: 'và đã trả đủ tiền gốc và lãi',
        like: 5,
        author: 'ThanhNT',
        comment: 10
    },
    {
        title: 'Bạn luôn ‘cô độc’ giữa đám đông? Xin chúc mừng, bạn đã có 1 phẩm chất của Bill Gates, Mark Zuckerberg',
        subTitle: '',
        like: 3,
        author: 'TanNg',
        comment: 2
    },
    {
        title: 'UBND Hà Nội kiến nghị Thủ tướng tạm dừng ký hợp đồng với nhà thầu Trung Quốc tại dự án nước sông Đà',
        subTitle: 'mạnh tay lên các cụ',
        like: 3,
        author: 'TanNg',
        comment: 7
    },
    {
        title: 'Vỗ mông vợ bạn nhậu, người chết, kẻ vào tù',
        subTitle: 'Thanh Niên có cái tít vô địch quá :))',
        like: 3,
        author: 'Justin',
        comment: 7
    },
    {
        title: 'Chiếc đồng hồ giúp Seiko ngang tầm bất cứ hãng đồng hồ nào',
        subTitle: 'Mẹ dặn đi làm ráng kiếm đủ tiền mua con này đeo cho nó sang',
        like: 4,
        author: 'Justin',
        comment: 5
    },
    {
        title: 'Chủ đầu tư Leman: Thu Minh đã thanh lý hợp đồng căn hộ từ lâu',
        subTitle: 'và đã trả đủ tiền gốc và lãi',
        like: 5,
        author: 'ThanhNT',
        comment: 10
    },
    {
        title: 'Bạn luôn ‘cô độc’ giữa đám đông? Xin chúc mừng, bạn đã có 1 phẩm chất của Bill Gates, Mark Zuckerberg',
        subTitle: '',
        like: 3,
        author: 'TanNg',
        comment: 2
    },
    {
        title: 'UBND Hà Nội kiến nghị Thủ tướng tạm dừng ký hợp đồng với nhà thầu Trung Quốc tại dự án nước sông Đà',
        subTitle: 'mạnh tay lên các cụ',
        like: 3,
        author: 'TanNg',
        comment: 7
    },
    {
        title: 'Vỗ mông vợ bạn nhậu, người chết, kẻ vào tù',
        subTitle: 'Thanh Niên có cái tít vô địch quá :))',
        like: 3,
        author: 'Justin',
        comment: 7
    },
    {
        title: 'Chiếc đồng hồ giúp Seiko ngang tầm bất cứ hãng đồng hồ nào',
        subTitle: 'Mẹ dặn đi làm ráng kiếm đủ tiền mua con này đeo cho nó sang',
        like: 4,
        author: 'Justin',
        comment: 5
    }
];

var Articles = React.createClass({
    getInitialState() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(data)
        };
    },

    renderRow(data, sectionID, rowID) {
        return (
            <View style={styles.rowListView}>
                <View style={{
                    flex: 0.85,
                    borderRightWidth: 1,
                    borderRightColor: "rgb(226, 226, 226)",
                    paddingRight: 10
                }}>
                    <View style={{}}>
                        <Text>
                            {data.title}
                            <Text style={{ fontSize: 12, color: 'rgb(70, 119, 168)' }}> - {data.subTitle}</Text>
                        </Text>

                    </View>
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                        <Text style={{ marginRight: 8, fontSize: 11 }}>{data.like} Like</Text>
                        <Text style={{ marginRight: 8, fontSize: 11 }}>{data.author}</Text>
                        <Text style={{ fontSize: 11 }}>{data.comment} Comment</Text>
                    </View>
                </View>

                <TouchableHighlight style={{
                    flex: 0.15,
                    padding: 10
                }}>
                    <Text onPress={this._handlePress }>Share</Text>
                </TouchableHighlight>
            </View>
        );
    },

    sendImages() {
        Alert.alert(
            'Response return',
            'Data here',
            [
                {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
        )
    },

    renderHeader() {
        return (
            <View style={{flex: 0, padding: 4, flexDirection: "row", justifyContent: "space-between", backgroundColor: "rgb(255, 69, 69)"}}>
                <TouchableHighlight style={{
                    borderRightWidth: 1,
                    borderRightColor: '#ccc',
                    flex: 0.5,
                    padding: 4,
                    justifyContent: 'center'
                }}>
                    <Text style={{textAlign: 'center'}}>Gửi Tin</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={{
                        borderLeftWidth: 1,
                        borderLeftColor: '#ccc',
                        flex: 0.5,
                        padding: 4,
                        justifyContent: 'center'
                    }}
                    onPress={this.sendImages}
                >
                    <Text style={{textAlign: 'center'}}>Gửi Ảnh</Text>
                </TouchableHighlight>
            </View>
        );
    },

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={{alignItems: 'flex-end', width: 30, height: 30, borderWidth: 1 }}
                        source={require('./img/menu.png')}
                    />
                    <View style={{ flex: 1 }}>
                        <Text style={{borderWidth: 1, textAlign: 'center', fontSize: 24, color: 'rgb(233, 255, 247)', marginTop: 10}}>
                            Tinh Tế
                        </Text>
                    </View>
                </View>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    renderHeader={this.renderHeader.bind(this)}
                />

                <View style={styles.content}>
                    <Text>Menu here</Text>
                </View>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    header: {
        // flex: 1, 
        flexDirection: "row",
        padding: 10,
        backgroundColor: "rgb(21, 40, 255)",
        justifyContent: 'center'
    },
    content: {
        padding: 10
    },
    rowListView: {
        flex: 0,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: "rgb(254, 254, 254)",
        borderBottomWidth: 1,
        borderBottomColor: "rgb(226, 226, 226)"
    }
});

module.exports = Articles;