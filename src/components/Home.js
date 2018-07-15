import React,{ Component } from 'react'
import { View,
            Button,
            Text } from 'react-native'
import { connect } from 'react-redux'
import {ListView} from 'react-native'
import * as actions from '../actions'
import ListItem from './ListItem'

class Home extends Component {  
    
    constructor(props){
        super(props);
    }

    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1!=r2
        });
        this.dataSource = ds.cloneWithRows(this.props.list)
    }

    renderRow(value) {
        return <ListItem item = {value} />
    }

    render(){
        return( 
            <View>
                <Button title={'this.props.showMyProps'} onPress={()=>this.props.showMyAction(true)}></Button> 
                
                <ListView
                    dataSource = {this.dataSource}
                    renderRow  = {this.renderRow} />

                    {this.props.selectedItem.map(function(value){
                        return(<Text>{value}</Text>)
                    })}
 
            </View>
        )
    }
}

const mapStateToProps = state => {
    return{
        showMyProps : state.showMyProps,
        list : state.listReducer,
        selectedItem:state.selectedReducer
    }
}

export default connect(mapStateToProps,actions)(Home);	
 