import React, { Component } from "react";
import {
    Header, Left, Container, Button, Body, Item, Title, Right, Icon, Text, Content, Input, View, Footer, FooterTab, List, ListItem
} from "native-base";
import { StatusBar, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
export default class Cthanggiaonv extends Component {
    render() {
        return (
            <Content>
                <List >
                    <ListItem itemDivider style={styles.listdivider}>
                        <Text style={styles.textlist}>Tên nv</Text>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Text>Số lô</Text>
                        <Text>20</Text>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Text>Số sp</Text>
                        <Text>200</Text>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Text>Tổng lương</Text>
                        <Text>2.000.000.000đ</Text>
                    </ListItem>
                    <ListItem itemDivider style={{height:500}}>
                    </ListItem>
                </List>
            </Content>
        );
    }
}