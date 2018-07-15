import React, {Component} from 'react'
import {View,TouchableWithoutFeedback,Text} from 'react-native'
import CardSection from './common/CardSection'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class ListItem extends Component {
    render(){

        const {id,title} = this.props.item;
        return(
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectedItemAction(title)}>
                <View>
                    <CardSection>
                        <Text> {title}</Text>                
                    </CardSection>                    
                </View>
            </TouchableWithoutFeedback>
        )
    }
}


export default connect(null, actions) (ListItem);
