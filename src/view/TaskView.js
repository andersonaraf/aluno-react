import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import AddItemArea from '../components/AddItemArea';
import ListaItem from '../components/ListIems';
import lista from '../lists/task';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import { SwipeListView } from 'react-native-swipe-list-view';
import ListaItemSwipe from '../components/ListaItemSwipe';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const Listagem = styled.FlatList`
  flex: 1;
`;

const Text = styled.Text`
    color: #000;
`;

export default () => {
  const [items, setItems] = useState(lista);
  const [taskTrue, setTaskTrue] = useState(items.filter(item => item.done == true).length);
  const [taskFalse, setTaskFalse] = useState(items.filter(item => item.done == false).length);

  const addNewItem = (txt) => {
    let newItems = [...items];
    newItems.push({
      id: uuidv4(),
      task: txt,
      done: false
    });
    setItems(newItems);
  }

  const toggleDone = (index) => {
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  }
  
  useEffect(() => {
    setTaskTrue(items.filter(item => item.done == true).length);
  }, [items]);

  useEffect(() => {
    setTaskFalse(items.filter(item => item.done == false).length);
  }, [items]);

  const deleteItem = (index) => {
    let newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <Page>
      <AddItemArea onAdd={addNewItem} />
      <SwipeListView
        data={items}
        renderItem={({ item, index }) => <ListaItem onPress={() => toggleDone(index)} data={item} />}
        leftOpenValue={50}
        disableLeftSwipe={true}
        renderHiddenItem={({item, index}) => <ListaItemSwipe onDelete={()=>deleteItem(index)}/>}
      />
     <Text>Tarefas Realizas: {taskTrue} / Tarefas não Realizadas: {taskFalse}</Text>
    </Page>
  )
}