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
  Title,
  Icon,
  View,
} from 'native-base';
import {StatusBar} from 'react-native';
export default class ListThumbnailExample extends Component {
  render () {
    return (
      <Container>
        <Header style={{backgroundColor: '#0288D1'}}>
        <Left>
        <Button transparent>
              <Icon name='ios-arrow-back' />
          </Button>
        </Left>
          <Body style={{ flex: 1}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0288D1' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>NV thu nhập cao</Text>
            </View>
          </Body>
        </Header>
        <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail  source={require('../../../images/avt.jpg')} />
            </Left>
            <Body>
              <Text>Hoàng Thị Nga</Text>
              <Text note numberOfLines={1}>
              1993-10-10/Nữ
              </Text>
            </Body>
            <Right>
              <Text>Tổng Lương</Text>
              <Text note numberOfLines={1}>
                1.000.000đ
              </Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail  source={require('../../../images/avt.jpg')} />
            </Left>
            <Body>
              <Text>Nguyễn Thị Hằng</Text>
              <Text note numberOfLines={1}>
              1993-10-10/Nữ
              </Text>
            </Body>
           <Right>
           <Text>Tổng Lương</Text>
              <Text note numberOfLines={1}>
                1.000.000đ
              </Text>
           </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail  source={require('../../../images/avt.jpg')} />
            </Left>
            <Body>
              <Text>Nguyễn Thị Hằng</Text>
              <Text note numberOfLines={1}>
              1993-10-10/Nữ
              </Text>
            </Body>
            <Right>
            <Text>Tổng Lương</Text>
              <Text note numberOfLines={1}>
                1.000.000đ
              </Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail  source={require('../../../images/avt.jpg')} />
            </Left>
            <Body>
              <Text>Nguyễn Thị Hằng</Text>
              <Text note numberOfLines={1}>
                1993-10-10/Nữ
              </Text>
            </Body>
            <Right>
            <Text>Tổng Lương</Text>
              <Text note numberOfLines={1}>
                1.000.000đ
              </Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail  source={require('../../../images/avt.jpg')} />
            </Left>
            <Body>
              <Text>Nguyễn Thị Hằng</Text>
              <Text note numberOfLines={1}>
                1993-10-10/Nữ
              </Text>
            </Body>
            <Right>
            <Text>Tổng Lương</Text>
              <Text note numberOfLines={1}>
                1.000.000đ
              </Text>
            </Right>
          </ListItem>
        </List>
      </Content>
      </Container>
    );
  }
}
