import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './TodoItem.style';

const TodoItem = (props) => {
    return(
        <TouchableOpacity onPress={() => props.toggleFunc(props.id)} style={styles.todoItemContainer}>
            <Text style={styles.todoItemText}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default TodoItem;
