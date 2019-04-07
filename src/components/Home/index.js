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
import HeThong from './HeThong'
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

import Cthanggiaonv from "./Chitiet/Cthanggiaonv";

import { bangthongke } from '../../actions'
import { hanghoa } from '../../actions'
import { hethong } from '../../actions'
import { connect } from "react-redux";
class Home extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <Container style={styles.container}>
        {StatusBar.setBackgroundColor('#0288D1', true)}
        {this.props.auth.kt === 2 ?
          <Header searchBar rounded style={{ backgroundColor: '#0288D1' }} >
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
              <Left style={{ flex: 1 }}>
                <Icon name="person" style={{ color: 'white' }} />
              </Left>
              <Body style={{ flex: 7 }}>
                <Text style={{ fontSize: 25, color: 'white' }}>Hàng Hóa</Text>
              </Body>
              <Right style={{ flex: 1 }}>
                <Icon name="notifications" style={{ color: 'white' }} />
              </Right>
            </View>
          </Header>
          :
          this.props.auth.kt === 0 ?
            <Header searchBar rounded style={{ backgroundColor: '#0288D1' }} >
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                <Left style={{ flex: 1 }}>
                  <Icon name="person" style={{ color: 'white' }} />
                </Left>
                <Body style={{ flex: 7 }}>
                  <Text style={{ fontSize: 25, color: 'white' }}>Hệ thống</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="notifications" style={{ color: 'white' }} />
                </Right>
              </View>
            </Header>
            :
            <Header style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0288D1', borderBottomWidth: .5 }}>
              <Text style={{ fontSize: 25, color: 'white' }}>Trang chủ</Text>
            </Header>
        }
        {
          this.props.auth.kt === 0 ? <HeThong />
            :
            this.props.auth.kt === 2 ? <Hanghoa />
              :
              <Bangthongke />
        }
        <Footer style={{ borderTopWidth: 0.5, borderBottomColor: 'gray' }}>
          <FooterTab style={{ backgroundColor: 'white' }}>

            <Button vertical style={[this.props.auth.kt === 0 ? { color: '#0288D1', backgroundColor: 'white' } : { color: 'gray' }]} onPress={() => { this.props.hethong() }} active={this.props.auth.kt !== 0 ? false : true}>
              <Icon name="settings" style={[styles.textfoot, this.props.auth.kt === 0 ? { color: '#0288D1' } : { color: 'gray' }]} />
              <Text style={[styles.textfoot, this.props.auth.kt === 0 ? { color: '#0288D1' } : { color: 'gray' }]} >Người dùng</Text>
            </Button>
            <Button vertical style={[this.props.auth.kt === 1 ? { color: '#0288D1', backgroundColor: 'white' } : { color: 'gray' }]} onPress={() => { this.props.bangthongke() }} active={this.props.auth.kt !== 1 ? false : true}>
              <Icon active name="apps" style={[styles.textfoot, this.props.auth.kt === 1 ? { color: '#0288D1' } : { color: 'gray' }]} />
              <Text style={[styles.textfoot, this.props.auth.kt === 1 ? { color: '#0288D1' } : { color: 'gray' }]} >Trang chủ</Text>
            </Button>
            <Button vertical style={[this.props.auth.kt === 2 ? { color: '#0288D1', backgroundColor: 'white' } : { color: 'gray' }]} onPress={() => { this.props.hanghoa() }} active={this.props.auth.kt !== 2 ? false : true}>
              <Icon name="navigate" style={[styles.textfoot, this.props.auth.kt === 2 ? { color: '#0288D1' } : { color: 'gray' }]} />
              <Text style={[styles.textfoot, this.props.auth.kt === 2 ? { color: '#0288D1' } : { color: 'gray' }]}>Hàng hóa</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = dispatch => ({
  bangthongke: () => dispatch(bangthongke()),
  hanghoa: () => dispatch(hanghoa()),
  hethong: () => dispatch(hethong()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);