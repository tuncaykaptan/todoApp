import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import TodoItem from './components/TodoItem';
import TodoCheckedItem from './components/TodoCheckedItem';


const App = () => {

  const [todoData, setTodoData] = useState([]);
  const [itemNameInput, setItemNameInput] = useState('');
  const [itemCounter, setItemCounter] = useState(0);

  function addItem() {
    setTodoData([...todoData, { id: itemCounter, title: itemNameInput, isChecked: false }]);
    setItemCounter(itemCounter + 1);
    setItemNameInput('');
  }

  function toggleCheck(id) {
    setTodoData(todoData.map(item => item.id === id ? { ...item, isChecked: !item.isChecked } : item));
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.appInnerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Yapılacaklar</Text>
          <Text style={styles.headerText}>{todoData.filter(item=>item.isChecked === false).length}</Text>
        </View>

      <FlatList
        data={todoData}
        renderItem={
          ({item}) => {
            return item.isChecked ?
            <TodoCheckedItem title={item.title} id={item.id} toggleFunc={toggleCheck}/> :
            <TodoItem title={item.title} id={item.id} toggleFunc={toggleCheck}/>;
          }
          }
      />


        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Madde ekle..."
            placeholderTextColor={'#9b9b9b'}
            style={styles.inputText}
            onChangeText={setItemNameInput}
            clearTextOnFocus
          />

          <TouchableOpacity onPress={addItem} style={styles.inputButton}>
            <Text style={styles.inputButtonText}>Ekle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer:{
    backgroundColor: '#181f29',
    flex: 1,
  },
  appInnerContainer: {
    flex: 1,
    margin: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    color: '#ffa621',
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputContainer:{
    width: '100%',
    backgroundColor: '#4b5158',
    position: 'absolute',
    bottom: 40,
    padding: 13,
    borderRadius: 15,
  },
  inputText: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#9d9d9d',
    marginBottom: 8,
    color: 'white',
  },
  inputButton: {
    backgroundColor: '#6e6e6e',
    padding: 8,
    borderRadius: 8,
  },
  inputButtonText: {
    color: 'white',
    textAlign: 'center',
  },


});

export default App;
