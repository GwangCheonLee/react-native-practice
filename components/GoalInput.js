import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useState} from 'react';

const GoalInput = props => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandle(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return; // 빈 값 추가 방지
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(''); // 입력 후 초기화
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandle}
        value={enteredGoalText} // 입력 필드 값 업데이트
        onSubmitEditing={addGoalHandler} // Enter(키보드 "return") 누르면 실행
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
