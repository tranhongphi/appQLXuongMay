import React, { Component } from "react";
import {
    Header, Left, Container, Button, Body, Item, List, ListItem, Right, Icon, Text, Content, Input, View, Footer, FooterTab, Badge
} from "native-base";
import styles from "./styles";
import {Image} from 'react-native'
export default class Hanghoa extends Component {
    render() {
        return (
            <Content>
                <List style={{flex:6}}>
                    <ListItem >
                        <Left>
                            <Image source={require('../../../images/sanpham.png')}/>
                            <Text style={styles.textlisthh}>Sản phẩm</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                        <Image source={require('../../../images/danhmuc.png')}/>
                            <Text style={styles.textlisthh}>Danh mục</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                        <Image source={require('../../../images/tonkho.png')}/>
                            <Text style={styles.textlisthh}>Tồn kho</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                        <Image source={require('../../../images/hangnhap.png')}/>
                            <Text style={styles.textlisthh}>Hàng nhập</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                        <Image source={require('../../../images/hangxuat.png')}/>
                            <Text style={styles.textlisthh}>Hàng xuất</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                        <Image source={require('../../../images/hanggiao.png')}/>
                            <Text style={styles.textlisthh}>Hàng giao nhân viên</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                        <Image source={require('../../../images/luongnv.png')}/>
                            <Text style={styles.textlisthh}>Lương nhân viên</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                </List>
            </Content>
        )
    }
}