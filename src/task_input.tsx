import { View, StyleSheet,TextInput, Button, Text } from "react-native";



export const TaskInput = (text:string, onChangeText: () => void, onClick: () => void) =>{

    return(
        <View style={styles.container}>
          <TextInput
            placeholder='Digite o nome da sua tarefa aqui'
            onChangeText={onChangeText}
            defaultValue={text}
            style={styles.textInput}
          />
  
          <Button title='Add' onPress={onClick}/> 
        </View>

    )
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"row",
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
