import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import {StatusBar} from 'react-native';
export default class ListThumbnailExample extends Component {
  render () {
    return (
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail  square source={require('../../../images/avt.jpg')} />
            </Left>
            <Body>
              <Text>Áo bò</Text>
              <Text note numberOfLines={1}>
              sản phẩm áo bò nam
              </Text>
            </Body>
            <Right>
              <Text>300.000đ</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail  square source={require('../../../images/avt.jpg')} />
            </Left>
            <Body>
              <Text>Áo thể thao bi to</Text>
              <Text note numberOfLines={1}>
              Áo thể thao nam
              </Text>
            </Body>
            <Right>
              <Text>70.000đ</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail  square source={require('../../../images/avt.jpg')} />
            </Left>
            <Body>
              <Text>Áo thể thao Sima</Text>
              <Text note numberOfLines={1}>
              Áo thể thao cho nam
              </Text>
            </Body>
            <Right>
              <Text>100.000đ</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail  square source={require('../../../images/avt.jpg')} />
            </Left>
            <Body>
              <Text>Áo thể thao SP12</Text>
              <Text note numberOfLines={1}>
              Áo thể thao cho nam
              </Text>
            </Body>
            <Right>
              <Text>300.000đ</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail  square source={require('../../../images/avt.jpg')} />
            </Left>
            <Body>
              <Text>Quần bò SP10</Text>
              <Text note numberOfLines={1}>
              Quần bò dành cho nam
              </Text>
            </Body>
            <Right>
              <Text>300.000đ</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    );
  }
}
