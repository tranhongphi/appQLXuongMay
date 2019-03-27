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
                <Text>Dây rút</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../images/avt.jpg')} />
              </Left>
              <Body>
                <Text>Vải gai</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../images/avt.jpg')} />
              </Left>
              <Body>
                <Text>Vải da</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../images/avt.jpg')} />
              </Left>
              <Body>
                <Text>Cúc sắt</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../images/avt.jpg')} />
              </Left>
              <Body>
                <Text>Khóa áo</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
    );
  }
}