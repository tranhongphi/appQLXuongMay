import React, { Component ,props} from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Button, Icon, Segment, Left, Right, Item } from 'native-base';
import { Image } from 'react-native'
import HSanpham from './Header/HSanpham'
export default class Sanpham extends Component {
    render() {
        return (
            <DSsanpham/>
        );
    }
}
class DSsanpham extends Component{
    render(){
        return(
            <Content>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={require('../../../images/avt.jpg')} />
                        </Left>
                        <Body>
                            <Text>Quần bò</Text>
                            <Text note numberOfLines={1}>Giá: 200.000đ</Text>
                            <Text note numberOfLines={2}>Tổng sô: 600</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button style={{ width: 40, justifyContent: 'center', marginRight: 10, backgroundColor: '#0288D1' }}><Image source={require('../../../images/edit.png')} /></Button>
                            <Button danger style={{ width: 40, justifyContent: 'center' }}><Image source={require('../../../images/erase.png')} /></Button>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={require('../../../images/avt.jpg')} />
                        </Left>
                        <Body>
                            <Text>Quần bò</Text>
                            <Text note numberOfLines={1}>Giá: 200.000đ</Text>
                            <Text note numberOfLines={2}>Tổng sô: 600</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button style={{ width: 40, justifyContent: 'center', marginRight: 10, backgroundColor: '#0288D1' }}><Image source={require('../../../images/edit.png')} /></Button>
                            <Button danger style={{ width: 40, justifyContent: 'center' }}><Image source={require('../../../images/erase.png')} /></Button>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={require('../../../images/avt.jpg')} />
                        </Left>
                        <Body>
                            <Text>Quần bò</Text>
                            <Text note numberOfLines={1}>Giá: 200.000đ</Text>
                            <Text note numberOfLines={2}>Tổng sô: 600</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button style={{ width: 40, justifyContent: 'center', marginRight: 10, backgroundColor: '#0288D1' }}><Image source={require('../../../images/edit.png')} /></Button>
                            <Button danger style={{ width: 40, justifyContent: 'center' }}><Image source={require('../../../images/erase.png')} /></Button>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={require('../../../images/avt.jpg')} />
                        </Left>
                        <Body>
                            <Text>Quần bò</Text>
                            <Text note numberOfLines={1}>Giá: 200.000đ</Text>
                            <Text note numberOfLines={2}>Tổng sô: 600</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button style={{ width: 40, justifyContent: 'center', marginRight: 10, backgroundColor: '#0288D1' }}><Image source={require('../../../images/edit.png')} /></Button>
                            <Button danger style={{ width: 40, justifyContent: 'center' }}><Image source={require('../../../images/erase.png')} /></Button>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        )
    }
}
class Topsanpham extends Component {
    render() {
        return (
            <Content>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={require('../../../images/avt.jpg')} />
                        </Left>
                        <Body>
                            <Text>Áo thể thao Sima</Text>
                        </Body>
                        <Right >
                            <Text>Số lượng: 1000</Text>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={require('../../../images/avt.jpg')} />
                        </Left>
                        <Body>
                            <Text>Áo thể thao Sima</Text>
                        </Body>
                        <Right >
                            <Text>Số lượng: 1000</Text>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={require('../../../images/avt.jpg')} />
                        </Left>
                        <Body>
                            <Text>Áo thể thao Sima</Text>
                        </Body>
                        <Right >
                            <Text>Số lượng: 1000</Text>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={require('../../../images/avt.jpg')} />
                        </Left>
                        <Body>
                            <Text>Áo thể thao Sima</Text>
                        </Body>
                        <Right >
                            <Text>Số lượng: 1000</Text>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        )
    }
}