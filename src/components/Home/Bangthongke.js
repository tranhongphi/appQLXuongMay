import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Item, Title, Right, Icon, Text, Content, Input, View, Footer, FooterTab, Badge
} from "native-base";
import { StatusBar, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import * as Progress from 'react-native-progress';
export default class Bangthongke extends Component {
  pro() {
    return "50%"
  }
  // componentDidMount() {
  //   StatusBar.setBackgroundColor('#0288D1', true);
  // }
  render() {
    return (
      <Content style={{ backgroundColor: '#FAFAFA' }}>
        <ScrollView style={{ height: 150, elevation: 5, outlineProvider: 'bounds', backgroundColor: '#0288D1' }} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} >
          <View style={styles.viewscroll}>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>Tổng thu</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>1000đ</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>Tháng 1 + Tháng 2</Text>
              <Progress.Circle color={'white'} size={100} progress={.5} indeterminate={false} showsText={true} formatText={this.pro} thickness={10} />
            </View>
          </View>
          <View style={styles.viewscroll}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>Tổng chi</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>1000đ</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>Tháng 1 + Tháng 2</Text>
              <Progress.Circle color={'white'} size={100} progress={.5} indeterminate={false} showsText={true} formatText={this.pro} thickness={10} />
            </View>
          </View>
          <View style={styles.viewscroll}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>Số nhân viên</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>50</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>Tháng 1 + Tháng 2</Text>
              <Progress.Circle color={'white'} size={100} progress={.5} indeterminate={false} showsText={true} formatText={this.pro} thickness={10} />
            </View>
          </View>
          <View style={styles.viewscroll}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>Số sản phẩm</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>1000</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>Tháng 1 + Tháng 2</Text>
              <Progress.Circle color={'white'} size={100} progress={0.5} indeterminate={false} showsText={true} formatText={this.pro} thickness={10} />
            </View>
          </View>
        </ScrollView>
        <ScrollView >
          <TouchableOpacity activeOpacity={.9} style={[styles.viewcon, { marginTop: 25 }]}>
            <Text style={styles.textcon}>Sản Phẩm mới</Text>
            <Badge style={{ backgroundColor: '#0288D1' }}>
              <Text>2</Text>
            </Badge>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.9} style={styles.viewcon}>
            <Text style={styles.textcon}>Nhân viên mới</Text>
            <Badge style={{ backgroundColor: '#0288D1' }}>
              <Text>2</Text>
            </Badge>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.9} style={styles.viewcon}>
            <Text style={styles.textcon}>Sản phẩm bán chạy</Text>
            <Badge style={{ backgroundColor: '#0288D1' }}>
              <Text>100</Text>
            </Badge>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.9} style={styles.viewcon}>
            <Text style={styles.textcon}>Nhân viên thu nhập cao</Text>
            <Badge style={{ backgroundColor: '#0288D1' }}>
              <Text>2</Text>
            </Badge>
          </TouchableOpacity>
        </ScrollView>
      </Content>
    );
  }
}
