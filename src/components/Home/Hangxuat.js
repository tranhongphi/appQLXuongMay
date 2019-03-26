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
          <ListItem itemDivider>
            <View>
              <Text>Áo thể thao Sima</Text>
              {/* <View style={styles.viewhang}>
                <Button>Sửa</Button>
                <Button>Xóa</Button>
              </View> */}
            </View>
          </ListItem>
          <ListItem>
            <View style={styles.viewhang}>
              <Text>Số Lượng</Text>
              <Text>200</Text>
            </View>
          </ListItem>
          <ListItem>
            <View style={styles.viewhang}>qqsa
              <Text>Đơn Giá</Text>
              <Text>20.000.000đ</Text>
            </View>
          </ListItem>
          <ListItem>
            <View style={styles.viewhang}>
              <Text>Thời Gian Xuất</Text>
              <Text>2019-03-01</Text>
            </View>

          </ListItem>
        </List>
      </Content>
    );
  }
}