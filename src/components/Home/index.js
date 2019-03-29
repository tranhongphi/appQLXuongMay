import React, { Component } from "react";
import Bangthongke from './Bangthongke'
import Hanghoa from './Hanghoa'
import Hangxuat from './Hangxuat'
import Nguoidung from './Nguoidung'
import Hanggiaonv from './Hanggiaonv'
import Luongnv from './Luongnv';
import Hangnhap from './Hangnhap'
import Danhmuc from './Danhmuc'
import Sanpham from './Sanpham'
import Tonkho from './Tonkho'

import HSanpham from './Header/HSanpham'
import Chitiet from './Chitiet/Cthanggiaonv';
import SPMoi from './SPMoi'
import SPBanChay from './SPBanChay';
import NhanVienMoi from './NhanVienMoi'
import NVThuNhapCao from './NVThuNhapCao'
import {
  Header, Left, Container, Button, Segment, Body, Item, List, ListItem, Right, Icon, Text, Content, Input, View, Footer, FooterTab, Badge
} from "native-base";
import { StatusBar, ScrollView, } from "react-native";
import styles from "./styles";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kt: 1,
    }
  }
  render() {
    const { kt } = this.state;
    return (
      <Container style={styles.container}>
        {StatusBar.setBackgroundColor('#0288D1', true)}
        {kt !== 1 ?
          <Header searchBar rounded style={{ backgroundColor: '#0288D1' }} >
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
              <Left style={{ flex: 1 }}>
                <Icon name="person" style={{ color: 'white' }} />
              </Left>
              <Body style={{ flex: 7 }}>
                <Item style={{ width: '100%', height: 35, backgroundColor: 'white', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name="search" style={{ padding: 10, opacity: .3 }} />
                  <Input placeholder="Search" placeholderTextColor='gray' />
                </Item>
              </Body>
              <Right style={{ flex: 1 }}>
                <Icon name="notifications" style={{ color: 'white' }} />
              </Right>
            </View>
          </Header>
          :
          <Header style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0288D1', borderBottomWidth: .5 }}>
            <Text style={{ fontSize: 40, color: 'white' }}>Trang chủ</Text>
          </Header>
        }
        {/* {kt === 1 ?
          <Bangthongke />
          : null
        }
        {kt === 2 ?
          <Nguoidung />
          : null
        }
        {kt === 3 ?
          <Hanghoa />
          : null
        } */}
        <Bangthongke />
        <Footer style={{ borderTopWidth: 0.5, borderBottomColor: 'gray' }}>
          <FooterTab style={{ backgroundColor: 'white' }}>

            <Button vertical style={[this.state.kt === 2 ? { color: '#0288D1', backgroundColor: 'white' } : { color: 'gray' }]} onPress={() => { this.setState({ kt: 2 }) }} active={this.state.kt !== 2 ? false : true}>
              <Icon name="settings" style={[styles.textfoot, this.state.kt === 2 ? { color: '#0288D1' } : { color: 'gray' }]} />
              <Text style={[styles.textfoot, this.state.kt === 2 ? { color: '#0288D1' } : { color: 'gray' }]} >Hệ thống</Text>
            </Button>
            <Button vertical style={[this.state.kt === 1 ? { color: '#0288D1', backgroundColor: 'white' } : { color: 'gray' }]} onPress={() => { this.setState({ kt: 1 }) }} active={this.state.kt !== 1 ? false : true}>
              <Icon active name="apps" style={[styles.textfoot, this.state.kt === 1 ? { color: '#0288D1' } : { color: 'gray' }]} />
              <Text style={[styles.textfoot, this.state.kt === 1 ? { color: '#0288D1' } : { color: 'gray' }]} >Trang chủ</Text>
            </Button>
            <Button vertical style={[this.state.kt === 3 ? { color: '#0288D1', backgroundColor: 'white' } : { color: 'gray' }]} onPress={() => { this.setState({ kt: 3 }) }} active={this.state.kt !== 3 ? false : true}>
              <Icon name="navigate" style={[styles.textfoot, this.state.kt === 3 ? { color: '#0288D1' } : { color: 'gray' }]} />
              <Text style={[styles.textfoot, this.state.kt === 3 ? { color: '#0288D1' } : { color: 'gray' }]}>Hàng hóa</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
