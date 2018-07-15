import React, {Component} from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers'
import Home from './components/Home'

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
               <View>
                  <Home/>
               </View>
            </Provider> 
        )
    }
}

export default App