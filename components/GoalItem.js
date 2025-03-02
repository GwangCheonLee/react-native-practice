import {Pressable, StyleSheet, Text, View} from 'react-native';

function GoalItem(props) {
  return (
    // Native APP 에서 터치를 감지할 수 있게 Pressable Component 추가
    <View style={styles.goalItem}>
      <Pressable android_ripple={{color: '#dddddd'}} onPress={props.onDeleteItem.bind(this, props.id)}
                 style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5E0ACC',
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    color: '#FFFFFF',
    padding: 8,

  },
});

export default GoalItem;
