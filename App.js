import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
        return currentCourseGoals.filter((goal) => goal.id !== id);
      },
    );
  };

  return (
    <View style={styles.appContainer}>
      <Button title={'Add New Goal'} color="#5E0ACC" onPress={startAddGoalHandler} />
      {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} visible={modalIsVisible} />}
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => {
            /*Text Component 는 과거 IOS 에서는 borderRadius가 적용되지 않아 View Component로 감싸서 적용했었음
            현재 expo 52.0.0 에서는 borderRadius가 적용되는 것을 확인*/
            return (
              <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
            );
          }}
          // FlatList 는 기본적으로 배열의 Key 값이 있다면 사용하게 되는데 API 에서 데이터를 호출하는 경우와 같이 Key 값이 없을 경우 사용
          keyExtractor={(item) => {
            return item.id;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
