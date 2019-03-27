import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class Hanggiaonv extends Component {
  render() {
    return (

        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../images/avt.jpg')} />
              </Left>
              <Body>
                <Text>Áo bò</Text>
                <Text note numberOfLines={1}>Giá: 200.000đ</Text>
              </Body>
              <Right>
                <Text>Số Lượng</Text>
                <Text note>600</Text>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../images/avt.jpg')} />
              </Left>
              <Body>
                <Text>Áo bò</Text>
                <Text note numberOfLines={1}>Giá: 200.000đ</Text>
              </Body>
              <Right>
                <Text>Số Lượng</Text>
                <Text note>600</Text>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../images/avt.jpg')} />
              </Left>
              <Body>
                <Text>Áo bò</Text>
                <Text note numberOfLines={1}>Giá: 200.000đ</Text>
              </Body>
              <Right>
                <Text>Số Lượng</Text>
                <Text note>600</Text>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../images/avt.jpg')} />
              </Left>
              <Body>
                <Text>Áo bò</Text>
                <Text note numberOfLines={1}>Giá: 200.000đ</Text>
              </Body>
              <Right>
                <Text>Số Lượng</Text>
                <Text note>600</Text>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../images/avt.jpg')} />
              </Left>
              <Body>
                <Text>Áo bò</Text>
                <Text note numberOfLines={1}>Giá: 200.000đ</Text>
              </Body>
              <Right>
                <Text>Số Lượng</Text>
                <Text note>600</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
    );
  }
}