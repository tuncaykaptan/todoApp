import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './TodoCheckedItem.style';

const TodoCheckedItem = (props) => {
    return(
        <TouchableOpacity onPress={() => props.toggleFunc(props.id)} style={styles.todoCheckedItemContainer}>
            <Text style={styles.todoCheckedItemText}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default TodoCheckedItem;
