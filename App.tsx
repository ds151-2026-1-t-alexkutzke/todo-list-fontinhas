import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet,  FlatList, TextInput, Button } from 'react-native';
import { TaskInput } from './src/task_input';
import { Task, TaskProps } from './src/task';

export default function App() {
  const [text, setText] = useState('');
  
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const handlePress = (text:string) =>{
    setTasks(
      [
        ...tasks,
        {
          id: Date.now().toString() + Math.random().toString(),
          title: text,
          completed: false,
          onCheckboxClicked: () => null
        }
      ]
    )
  }




  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        <TextInput
          placeholder='Digite o nome da sua tarefa aqui'
          onChangeText={setText}
          value={text}
          style={styles.textInput}
        />

        <Button title='Add' onPress={() => handlePress(text)}/> 

      <FlatList
        data={tasks.sort((a,b) => Number(a.completed) - Number(b.completed))}
        keyStractor={item => item.id}
        renderItem={({item}) => <Task id={item.id} title={item.title} completed={item.completed} onCheckboxClicked={(id:string) => {
          const updatedTasks = tasks.map((task) =>
            task.id === id ? {...task, completed: !task.completed} : task
          )

          setTasks(updatedTasks);
        }}/>
        }
      />


      </SafeAreaView >
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
  },

  textInput:{
    width:250,
    height: 40,
    padding: 5,
    marginHorizontal: 8,
    borderWidth: 1,
  }

});
