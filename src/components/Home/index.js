import React, { Component } from "react";
import Bangthongke from './Bangthongke'
import Hanghoa from './Hanghoa'
import Hangxuat from './Hangxuat'
import {
  Header, Left, Container, Button, Body, Item, List, ListItem, Right, Icon, Text, Content, Input, View, Footer, FooterTab, Badge
} from "native-base";
import { StatusBar, ScrollView, } from "react-native";
import styles from "./styles";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kt: 1
    }
  }
  componentDidMount() {
    StatusBar.setBackgroundColor('#0288D1', true);
  }
  render() {
    const { kt }= this.state;
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={{ backgroundColor: '#0288D1' }} >
          <Left>
            <Icon name="person" style={{ color: 'white' }} />
          </Left>
          <Body >
            <Item style={{ width: 270, height: 35, paddingLeft: 10, backgroundColor: 'white', borderRadius: 30 }}>
              <Icon name="search" />
              <Input placeholder="Search" />
            </Item>
          </Body>
          <Right>
            <Icon name="notifications" style={{ color: 'white' }} />
          </Right>
        </Header>
        {kt === 1 ? 
          // <Bangthongke />
          <Hangxuat/>
          : null
        }
        {kt === 3 ? 
          <Hanghoa />
          : null
        }
        <Footer>
          <FooterTab style={{ backgroundColor: 'white' }}>
            <Button vertical onPress={() => { this.setState({ kt: 1 }) }} active={this.state.kt !== 1 ? false : true}>
              <Icon active name="apps" style={styles.textfoot} />
              <Text style={styles.textfoot}>Thống kê</Text>
            </Button>
            <Button vertical onPress={() => { this.setState({ kt: 2 }) }} active={this.state.kt !== 2 ? false : true}>
              <Icon name="cog" style={styles.textfoot} />
              <Text style={styles.textfoot}>Hệ thống</Text>
            </Button>
            <Button vertical onPress={() => { this.setState({ kt: 3 }) }} active={this.state.kt !== 3 ? false : true}>
              <Icon name="navigate" style={styles.textfoot} />
              <Text style={styles.textfoot}>Hàng hóa</Text>
            </Button>
            <Button vertical onPress={() => { this.setState({ kt: 4 }) }} active={this.state.kt !== 4 ? false : true}>
              <Icon name="person" style={styles.textfoot} />
              <Text style={styles.textfoot}>Thông tin</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    //  <Bangthongke></Bangthongke> 
    );
  }
}
