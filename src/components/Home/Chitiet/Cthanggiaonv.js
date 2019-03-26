import React, { Component } from "react";
import {
    Header, Left, Container, Button, Body, Item, Title, Right, Icon, Text, Content, Input, View, Footer, FooterTab, List, ListItem
} from "native-base";
import { StatusBar, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles";
export default class Cthanggiaonv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ktra: "Đã trả"
        }
    }
    render() {
        return (
            <Content>
                <List >
                    <ListItem itemDivider style={styles.listdivider}>
                        <Text style={styles.textlist}>Áo thể thao bi to</Text>
                        <Button onPress={() => { this.kt() }} success={this.state.ktra === "Đã trả" ? true : false} warning={this.state.ktra === "Chưa trả" ? true : false} ><Text>{this.state.ktra}</Text></Button>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Text>Số Lượng</Text>
                        <Text>20</Text>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Text>Đơn Giá</Text>
                        <Text>20.000.000đ</Text>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Text>Thời Gian Xuất</Text>
                        <Text>2019-03-01</Text>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Text>Tên thợ</Text>
                        <Text>Đp Tú</Text>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Text>Màu sắc</Text>
                        <Text>Trắng</Text>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Text>Kích thước</Text>
                        <Text>S</Text>
                    </ListItem>
                    <ListItem itemDivider style={[styles.listitem,{height:500}]}>
                        <Button style={{flex:1,marginRight:10,justifyContent:'center'}}><Text>Sửa</Text></Button>
                        <Button style={{flex:1,justifyContent:'center'}} danger><Text>Xóa</Text></Button>
                    </ListItem>
                </List>
            </Content>
        );
    }
    kt() {
        if (this.state.ktra == "Đã trả")
            this.setState({ ktra: "Chưa trả" })
        else
            this.setState({ ktra: "Đã trả" })
    }
}