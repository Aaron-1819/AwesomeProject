/**
 * My To Do List App
 *
 * @format
 */
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {SafeAreaView,StyleSheet,} from 'react-native';
import { useState } from 'react';



export default function App() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Do laundry' },
        { id: 2, text: 'Go to gym' },
        { id: 3, text: 'Walk dog' },
    ]);

    return (
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
});


