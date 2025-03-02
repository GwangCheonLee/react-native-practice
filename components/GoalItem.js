import {StyleSheet, Text, View} from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5E0ACC',
  },

  goalText: {
    color: '#FFFFFF',
  },
});

export default GoalItem;
