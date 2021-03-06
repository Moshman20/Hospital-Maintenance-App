import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Picker,Icon,Text} from 'native-base';
import {connect} from 'react-redux'
 class PickerInput extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  } 
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    }),
   console.log(`From Picker: ${value}`),
  this.props.dispatch({type:'UPDATE_VALUE',value})}
  render() {
    return (
        <Content>
          <Form>
           <Text style={styles.labelBtn}>{this.props.title}</Text>
            <Item picker>
            
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
          {
            this.props.categories.map((item, index) => (
              <Picker.Item label={item} 
              value={item} />
            ))
         }
              </Picker>
            </Item>
          </Form>
        </Content>
      );
  }
}
const styles={
  labelBtn:{
        color:'blue',

  },
}

const mapStateToProps=(state)=>{
  return state
}

export default connect(mapStateToProps)(PickerInput);