import React, { Component } from 'react';
import { Header, Text, Body, Button, Icon, Segment, Left, Right, } from 'native-base';
export default class HSanpham extends Component {
    constructor(props) {
        super(props);
        this.state = {
            segment: 1
        }
    }
    render() {
        return (
            <Header hasSegment style={{backgroundColor:'#0288D1'}}>
                <Left>
                    <Button transparent><Icon name="ios-arrow-back" /></Button>
                </Left>
                <Body>
                    <Segment style={{ backgroundColor: '#0288D1' }}>
                        <Button first active={this.state.segment === 1 ? true : false} onPress={() => { this.setState({ segment: 1 }) }}>
                            <Text style={this.state.segment === 1 ? { color: '#0288D1' } : { color: 'white' }}>Danh sách</Text>
                        </Button>
                        <Button active={this.state.segment === 2 ? true : false} onPress={() => { this.setState({ segment: 2 }) }}>
                            <Text style={this.state.segment === 2 ? { color: '#0288D1' } : { color: 'white' }}>Top sản phẩm</Text>
                        </Button>
                    </Segment>
                </Body>
                <Right>
                    <Button transparent><Icon name="add" /></Button>
                </Right>
            </Header>
        )
    }
}