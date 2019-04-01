import React,{Component} from 'react'
import {View, Text} from 'react-native'
import {
    Button
  } from "native-base";
export default class M_Danhmuc extends Component{
    render(){
        return(
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Button style={{backgroundColor:'#0288D1',marginRight:20}}><Text>Sửa</Text></Button>
                <Button danger><Text>Xóa</Text></Button>
            </View>
        )
    }
}