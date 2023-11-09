/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    Button
} from 'react-native';


export default function App() {
    return (
        <SafeAreaView>
            <ToDoList />
            <ToDoForm />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
});


