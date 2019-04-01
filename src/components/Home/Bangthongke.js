import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Item, Title, Right, Icon, Text, Content, Input, View, Footer, FooterTab, Badge
} from "native-base";
import { StatusBar, ScrollView, TouchableOpacity, Animated, Dimensions } from "react-native";
import styles from "./styles";
import * as Progress from 'react-native-progress';
const { width } = Dimensions.get('window');

const photos = [
  <View style={styles.viewscroll}>
    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Tổng thu</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 50, color: 'white' }}>1000đ</Text>
    </View>
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Progress.Circle color={'white'} size={100} progress={.5} indeterminate={false} showsText={true} formatText={this.pro} thickness={10} />
    </View>
  </View>,
  <View style={styles.viewscroll}>
    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Tổng thu</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 50, color: 'white'}}>1000đ</Text>
    </View>
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Progress.Circle color={'white'} size={100} progress={.5} indeterminate={false} showsText={true} formatText={this.pro} thickness={10} />
    </View>
  </View>,
  <View style={styles.viewscroll}>
    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Tổng thu</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 50, color: 'white' }}>1000đ</Text>
    </View>
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Progress.Circle color={'white'} size={100} progress={.5} indeterminate={false} showsText={true} formatText={this.pro} thickness={10} />
    </View>
  </View>,
  <View style={styles.viewscroll}>
    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Tổng thu</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 50, color: 'white' }}>1000đ</Text>
    </View>
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Progress.Circle color={'white'} size={100} progress={.5} indeterminate={false} showsText={true} formatText={this.pro} thickness={10} />
    </View>
  </View>,
];
export default class Bangthongke extends Component {
  scrollX = new Animated.Value(0)
  pro() {
    return "50%"
  }
  render() {
    let position = Animated.divide(this.scrollX, width);
    return (
      <Content style={{ backgroundColor: '#FAFAFA' }}>
        <ScrollView style={{ height: 150, backgroundColor: '#0288D1' }} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: this.scrollX } } }]
        )}
          scrollEventThrottle={16} >
          {photos.map((source, i) => {
            return (
              <View key={i}>{source}</View>
            );
          })}
        </ScrollView>
        <View style={{ flexDirection: 'row' ,justifyContent:'center',width:width,backgroundColor:'#0288D1'}}>
          {photos.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp'
            });
            return (
              <Animated.View
                key={i}
                style={{ opacity, height: 10, width: 10, backgroundColor: 'white', margin: 8, borderRadius: 5 }}
              />
            );
          })}
        </View>
        <ScrollView scrollEnabled={false}>
          <TouchableOpacity activeOpacity={.9} style={[styles.viewcon, { marginTop: 25 }]}>
            <Text style={styles.textcon}>Sản Phẩm mới</Text>
            <Text style={styles.badge}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.9} style={styles.viewcon}>
            <Text style={styles.textcon}>Nhân viên mới</Text>
            <Text style={styles.badge}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.9} style={styles.viewcon}>
            <Text style={styles.textcon}>Sản phẩm bán chạy</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.9} style={styles.viewcon}>
            <Text style={styles.textcon}>Nhân viên thu nhập cao</Text>
            <Text style={styles.badge}>3</Text>
          </TouchableOpacity>
        </ScrollView>
      </Content>
    );
  }
}
