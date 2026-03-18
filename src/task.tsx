import { View, StyleSheet, Text, Button } from "react-native";

export interface TaskProps{
    id:string;
    title:string;
    completed:boolean;
    onCheckboxClicked: (id:string) => void;
}

export const Task = ({id, title, completed, onCheckboxClicked}:TaskProps, ) =>{
    return (

        <View style={styles.container}>
            <Text style={styles.taskTitle}>{title}</Text>
            <Text>Status: {completed ? "Finalizado" : "Pendente"}</Text>
            <Button title={!completed ? "finalizar tarefa" :  "cancelar finalização"} onPress={() => onCheckboxClicked(id)}/>
        </View>

    )
}

const styles = StyleSheet.create ({
    container:{
        display:"flex",
        justifyContent:"center",
        marginTop:30,
        padding:15,
        borderWidth:1
    },

    taskTitle:{
    }
})