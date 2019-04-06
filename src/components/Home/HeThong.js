import React, { Component } from "react";
import {
    Header, Left, Container, Button, Body, Item, List, ListItem, Right, Icon, Text, Content, Input, View, Footer, FooterTab, Badge
} from "native-base";
import Styles_HeThong from "./styles_HeThong";
import styles from './styles'
import {Image, TouchableOpacity} from 'react-native'
export default class Hanghoa extends Component {
    render() {
        return (
            <Content>
                <List style={{flex:1}}>
                    <TouchableOpacity activeOpacity={0.4} >
                        <View style={Styles_HeThong.ItemList}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <View style={{borderRadius: 5, backgroundColor:'#2196f3'}}>
                                        <Icon type="FontAwesome" name="user-circle-o" style={{color:'white',padding:5}} />
                                    </View>
                                    <Text style={styles.textlisthh}>Người dùng</Text>
                                </View>
                                <Icon name="ios-arrow-forward" style={{color: 'grey'}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.4} >
                        <View style={Styles_HeThong.ItemList}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <View style={{borderRadius: 5, backgroundColor:'#ef5350'}}>
                                        <Icon type="FontAwesome" name="gears" style={{color:'white',padding:5}} />
                                    </View>
                                    <Text style={styles.textlisthh}>Phân Quyền</Text>
                                </View>
                                <Icon name="ios-arrow-forward" style={{color: 'grey'}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.4} >
                        <View style={styles.ItemList}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <View style={{borderRadius: 5, backgroundColor:'#d50000'}}>
                                        <Icon type="FontAwesome" name="sign-out" style={{color:'white',padding:5}} />
                                    </View>
                                    <Text style={styles.textlisthh}>Đăng xuất</Text>
                                </View>
                        </View>
                    </TouchableOpacity>
                </List>
            </Content>
        )
    }
}