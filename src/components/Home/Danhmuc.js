import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';
import { Image, TouchableOpacity } from 'react-native'
export default class Hanggiaonv extends Component {
    render() {
        return (

            <Content>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={require('../../../images/avt.jpg')} />
                        </Left>
                        <Body>
                            <Text>Quần bò</Text>
                            <Text note numberOfLines={1}>Tên ngắn: Qb</Text>
                            <Text note numberOfLines={2}>Mô tả: aaaaaaaaaaaaa</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Icon type="FontAwesome" name="ellipsis-v" />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={require('../../../images/avt.jpg')} />
                        </Left>
                        <Body>
                            <Text>Quần bò</Text>
                            <Text note numberOfLines={1}>Tên ngắn: Qb</Text>
                            <Text note numberOfLines={2}>Mô tả: aaaaaaaaaaaaa</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Icon type="FontAwesome" name="ellipsis-v" />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={require('../../../images/avt.jpg')} />
                        </Left>
                        <Body>
                            <Text>Quần bò</Text>
                            <Text note numberOfLines={1}>Tên ngắn: Qb</Text>
                            <Text note numberOfLines={2}>Mô tả: aaaaaaaaaaaaa</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Icon type="FontAwesome" name="ellipsis-v" />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={require('../../../images/avt.jpg')} />
                        </Left>
                        <Body>
                            <Text>Quần bò</Text>
                            <Text note numberOfLines={1}>Tên ngắn: Qb</Text>
                            <Text note numberOfLines={2}>Mô tả: aaaaaaaaaaaaa</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Icon type="FontAwesome" name="ellipsis-v" />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={require('../../../images/avt.jpg')} />
                        </Left>
                        <Body>
                            <Text>Quần bò</Text>
                            <Text note numberOfLines={1}>Tên ngắn: Qb</Text>
                            <Text note numberOfLines={2}>Mô tả: aaaaaaaaaaaaa</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Icon type="FontAwesome" name="ellipsis-v" />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        );
    }
}