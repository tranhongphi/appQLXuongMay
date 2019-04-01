import React, { Component } from "react";
import {
    Header, Left, Container, Button, Body, Item, Title, Right, Icon, Text, Content, Input, View, Footer, FooterTab, List, ListItem
} from "native-base";
import { StatusBar, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles";
export default class Cthanggiaonv extends Component {
    render() {
        return (
            <Content>
                <List >
                    <ListItem itemDivider style={styles.listdivider}>
                        <Text style={styles.textlist}>Dây rút</Text>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Text>Đơn vị</Text>
                        <Text>cái</Text>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Text>Số lượng</Text>
                        <Text>2000</Text>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Text>Đơn giá</Text>
                        <Text>200.000đ</Text>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Text>Thời gian nhập</Text>
                        <Text>2019-03-02</Text>
                    </ListItem>
                    <ListItem itemDivider style={[styles.listitem,{height:500}]}>
                        <Button style={{flex:1,marginRight:10,justifyContent:'center'}}><Text>Sửa</Text></Button>
                        <Button style={{flex:1,justifyContent:'center'}} danger><Text>Xóa</Text></Button>
                    </ListItem>
                </List>
            </Content>
        );
    }
}