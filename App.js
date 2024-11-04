import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizData = [
    {
      question: 'What is the capital of Pakistan?',
      options: ['Lahore', 'Islamabad', 'Karachi', 'Multan'],
      answer: 'Islamabad'
    },
    {
      question: 'Largest animal in the world?',
      options: ['Elephant', 'Blue whale', 'Hippopotamus', 'Giraffe'],
      answer: 'Blue whale'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Jupiter'
    },
    {
      question: 'Who developed the theory of relativity?',
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
      answer: 'Albert Einstein'
    },
    {
      question: 'Which element has the chemical symbol O?',
      options: ['Osmium', 'Oxygen', 'Oganesson', 'Olinium'],
      answer: 'Oxygen'
    },
    {
      question: 'What is the square root of 64?',
      options: ['6', '7', '8', '9'],
      answer: '8'
    },
    {
      question: 'Who is known as the father of computers?',
      options: ['Alan Turing', 'Charles Babbage', 'John von Neumann', 'Bill Gates'],
      answer: 'Charles Babbage'
    },
    {
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      answer: 'Pacific Ocean'
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'Japan', 'Thailand', 'India'],
      answer: 'Japan'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
      answer: 'Mars'
    }
  ];
  
  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore((score) => score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <View style={styles.container}>
      {showScore ? (
        <View>
          <Text style={styles.optionStyle}>Your Score is: {score}/{quizData.length}</Text>
          <TouchableOpacity onPress={handleRestart} style={styles.optionButton}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{quizData[currentQuestion]?.question}</Text>
          {quizData[currentQuestion].options.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleAnswer(item)}
              key={index}
              style={styles.optionContainer}
            >
              <Text style={styles.optionStyle}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  optionStyle:{
    color:'green',
    padding:5,
    alignItems:'center',
    fontSize:20,
  },
  optionContainer:{
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth:2,
    marginTop:10,
  },
  questionText:{
    fontSize:24,

  }
});
