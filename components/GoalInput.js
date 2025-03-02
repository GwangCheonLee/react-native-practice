import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandle}
          value={enteredGoalText} // 입력 필드 값 업데이트
          onSubmitEditing={addGoalHandler} // Enter(키보드 "return") 누르면 실행
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title={'Cancel'} color="#f31282" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
