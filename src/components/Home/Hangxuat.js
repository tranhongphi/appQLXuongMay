import React, { Component } from "react";
import { Container, Header, Content, Accordion,Button, View} from "native-base";
const dataArray = [
  { title: "First Element", content: " ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet" },
  { title: "Second Element", content:<View><Button>Thang</Button></View> },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class Hangxuat extends Component {
  render() {
    return (
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
    );
  }
}