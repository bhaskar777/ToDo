import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { actionCreators } from './src/Screens/todoListRedux'
import List from './src/Screens/List'
import Input from './src/Screens/Input'
import Title from './src/Screens/Title'
import store from './src/Screens/Store'
export default class App extends React.Component {
  state = {}
  unsubscribe = store.subscribe(() => {
    const {todos} = store.getState()
    this.setState({todos})
  }) 
  componentWillMount() {
    const {todos} = store.getState()
    this.setState({todos})
  }
  componentWillUnmount() {
   this.unsubscribe()
  }
onAddTodo = (text) => {
    store.dispatch(actionCreators.add(text))
  }
onRemoveTodo = (index) => {
    store.dispatch(actionCreators.remove(index))
  }
render() {
    const {todos} = this.state
return (
      <SafeAreaView>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </SafeAreaView>
    )
  }
}