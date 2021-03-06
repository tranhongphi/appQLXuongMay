import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { StatusBar } from 'react-native';
export default class ListThumbnailExample extends Component {
  constructor (props) {
    super (props);
    this.state = {
      kt: 1,
    };
  }
  componentDidMount () {
    StatusBar.setBackgroundColor ('#0288D1', true);
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{backgroundColor: '#0288D1'}}>
          <Left>
            <Icon name="arrow-back" style={{color: 'white'}} />
          </Left>
          <Body>
            <Text>Người dùng</Text>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
        <Footer style={{}}>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Button
              vertical
              onPress={() => {
                this.setState ({kt: 1});
              }}
              active={this.state.kt !== 1 ? false : true}
            >
              <Icon active name="apps" style={styles.textfoot} />
              <Text style={styles.textfoot}>Thống kê</Text>
            </Button>
            <Button
              vertical
              onPress={() => {
                this.setState ({kt: 2});
              }}
              active={this.state.kt !== 2 ? false : true}
            >
              <Icon name="cog" style={styles.textfoot} />
              <Text style={styles.textfoot}>Hệ thống</Text>
            </Button>
            <Button
              vertical
              onPress={() => {
                this.setState ({kt: 3});
              }}
              active={this.state.kt !== 3 ? false : true}
            >
              <Icon name="navigate" style={styles.textfoot} />
              <Text style={styles.textfoot}>Hàng hóa</Text>
            </Button>
            <Button
              vertical
              onPress={() => {
                this.setState ({kt: 4});
              }}
              active={this.state.kt !== 4 ? false : true}
            >
              <Icon name="person" style={styles.textfoot} />
              <Text style={styles.textfoot}>Thông tin</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}