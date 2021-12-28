import React, { useState } from 'react';
import { Button, FlatList, StyleSheet,Keyboard,TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  const [Text, setText] = useState()
  const [Tasks, setTasks] = useState([
    {
      title: "React",
      key: 1
    },
    {
      title: "Html",
      key: 2
    },
    {
      title: "CSS",
      key: 3
    },
    {
      title: "JS",
      key: 4
    },
  ])

  function onsubmitHandler() {
    setTasks([...Tasks,{title:Text,key:Math.random()}])
    setText()
    Keyboard.dismiss() 
  }
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}> 
      <View style={styles.container}>
        <TextInput placeholder='Enter task.....' style={styles.input}
        defaultValue={Text} onChangeText={(value) => { setText(value) }}></TextInput>
        <Button title='Submit' onPress={onsubmitHandler}></Button>
        <FlatList
        style={styles.list}
          data={Tasks}
          renderItem={({ item }) =>
            <Card t={item} items={Tasks} setItems={setTasks} />
          }
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5733',
    alignItems: 'center',
    marginTop: 40,
    padding: 20,
    // justifyContent: 'center',
  },
  input: {
    padding: 15,
    margin: 5,
    borderBottomWidth: 1,
    // backgroundColor:"#fff",
    width: "100%"
  },
  list:{
    width:"100%",
    marginTop:20,
    padding:5,
  }
});
