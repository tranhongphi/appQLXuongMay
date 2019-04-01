import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Item, Title, Right, Icon, Text, Content, Input, View, Footer, FooterTab, List, ListItem
} from "native-base";
import { StatusBar, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
export default class Hangxuat extends Component {
  render() {
    return (
      <Content>
        <List>
          <ListItem itemDivider style={styles.listdivider}>
            <Text>Áo thể thao Sima</Text>
            <View style={{justifyContent:'space-around',flexDirection:'row'}}>
              <Button ><Text>Sửa</Text></Button>
              <Button danger>
                <Text>Xóa</Text>
              </Button>
            </View>
          </ListItem>
          <ListItem style={styles.listitem}>
              <Text>Số Lượng</Text>
              <Text>200</Text>
          </ListItem>
          <ListItem style={styles.listitem}>
            <Text>Đơn Giá</Text>
            <Text>20.000.000đ</Text>
          </ListItem>
          <ListItem style={styles.listitem}>
            <Text>Thời Gian Xuất</Text>
            <Text>2019-03-01</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}