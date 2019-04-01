import React, { Component } from "react";
import {
    Header, Left, Container, Button, Body, Item, List, ListItem, Right, Icon, Text, Content, Input, View, Footer, FooterTab, Badge
} from "native-base";
import styles from "./styles";
import {Image, TouchableOpacity} from 'react-native'
export default class Hanghoa extends Component {
    render() {
        return (
            <Content>
                <List style={{flex:6}}>
                <TouchableOpacity activeOpacity={0.4} >
                        <View style={styles.ItemList}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <View style={{borderRadius: 5, backgroundColor:'#2196f3'}}>
                                        <Icon type="FontAwesome" name="archive" style={{color:'white',padding:5}} />
                                    </View>
                                    <Text style={styles.textlisthh}>Sản Phẩm</Text>
                                </View>
                                <Icon name="ios-arrow-forward" style={{color: 'grey'}} />
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity activeOpacity={0.4} >
                        <View style={styles.ItemList}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <View style={{borderRadius: 5, backgroundColor:'#f44336'}}>
                                        <Icon type="FontAwesome" name="book" style={{color:'white',padding:5}} />
                                    </View>
                                    <Text style={styles.textlisthh}>Danh mục</Text>
                                </View>
                                <Icon name="ios-arrow-forward" style={{color: 'grey'}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.4} >
                        <View style={styles.ItemList}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <View style={{borderRadius: 5, backgroundColor:'#673ab7'}}>
                                        <Icon type="FontAwesome" name="home" style={{color:'white',padding:5}} />
                                    </View>
                                    <Text style={styles.textlisthh}>Tồn kho</Text>
                                </View>
                                <Icon name="ios-arrow-forward" style={{color: 'grey'}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.4} >
                        <View style={styles.ItemList}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <View style={{borderRadius: 5, backgroundColor:'#43a047'}}>
                                        <Icon type="FontAwesome" name="sign-in" style={{color:'white',padding:5}} />
                                    </View>
                                    <Text style={styles.textlisthh}>Hàng nhập</Text>
                                </View>
                                <Icon name="ios-arrow-forward" style={{color: 'grey'}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.4} >
                        <View style={styles.ItemList}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <View style={{borderRadius: 5, backgroundColor:'#f4511e'}}>
                                        <Icon type="FontAwesome" name="sign-out" style={{color:'white',padding:5}} />
                                    </View>
                                    <Text style={styles.textlisthh}>Hàng xuất</Text>
                                </View>
                                <Icon name="ios-arrow-forward" style={{color: 'grey'}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.4} >
                        <View style={styles.ItemList}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <View style={{borderRadius: 5, backgroundColor:'#616161'}}>
                                        <Icon type="FontAwesome" name="suitcase" style={{color:'white',padding:5}} />
                                    </View>
                                    <Text style={styles.textlisthh}>Hàng giao nhân viên</Text>
                                </View>
                                <Icon name="ios-arrow-forward" style={{color: 'grey'}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.4} >
                        <View style={styles.ItemList}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <View style={{borderRadius: 5, backgroundColor:'#d50000'}}>
                                        <Icon type="FontAwesome" name="money" style={{color:'white',padding:5}} />
                                    </View>
                                    <Text style={styles.textlisthh}>Lương nhân viên</Text>
                                </View>
                                <Icon name="ios-arrow-forward" style={{color: 'grey'}} />
                        </View>
                    </TouchableOpacity>
                </List>
            </Content>
        )
    }
}