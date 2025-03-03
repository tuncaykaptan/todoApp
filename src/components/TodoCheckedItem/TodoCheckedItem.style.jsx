import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  todoCheckedItemContainer: {
    padding: 10,
    backgroundColor: '#2c3933',
    borderRadius: 8,
    marginTop: 10,
  },
  todoCheckedItemText: {
    color: '#9c9c9c',
    textDecorationLine: 'line-through',
  },
});

export default styles;
