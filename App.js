import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';
import ButtonCalc from "./components/buttons/button.js";
export default function App() {
  const [currentValue, setCurrentValue] = useState('');
  const [result, setResult] = useState('');
  const handlePress = (value) => {
    setCurrentValue((prev) => prev + value);
  };

  const handleOperator = (operator) => {
    setCurrentValue((prev) => prev + ' ' + operator + ' ');
  };

  const handleReset = () => {
    setCurrentValue('');
    setResult('');
  };
  const handleResult = () => {
    try {
      const evalResult = eval(currentValue.replace('X', '*'));
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };
  return (
      <View style={styles.container}>
        <View style={styles.calcDiv}>
          <Text style={styles.calcText}>{currentValue}</Text>
          </View>
        <View style={styles.resultDiv}>
          <Text style={styles.resultText}>{result}</Text>
          </View>
        <View style={styles.buttons}>
      <ButtonCalc label="RESET" style={styles.btnBlack} onPress={() => handleReset()}/>
      <ButtonCalc label="+" style={styles.btnBlue} onPress={() => handleOperator('+')}/>
      <ButtonCalc label="=" style={styles.btnBlue} onPress={handleResult}/>
      <ButtonCalc label="-" style={styles.btnBlue} onPress={() => handleOperator('-')}/>
      <ButtonCalc label="/" style={styles.btnBlue} onPress={() => handleOperator('/')}/>
      <ButtonCalc label="X" style={styles.btnBlue}onPress={() => handleOperator('*')}/>
      <ButtonCalc label="0" style={styles.btnBlack}onPress={() => handlePress('0')}/>
      <ButtonCalc label="1" style={styles.btnBlack}onPress={() => handlePress('1')}/>
      <ButtonCalc label="2" style={styles.btnBlack} onPress={() => handlePress('2')}/>
      <ButtonCalc label="3" style={styles.btnBlack} onPress={() => handlePress('3')}/>
      <ButtonCalc label="4" style={styles.btnBlack} onPress={() => handlePress('4')}/>
      <ButtonCalc label="5" style={styles.btnBlack} onPress={() => handlePress('5')}/>
      <ButtonCalc label="6" style={styles.btnBlack} onPress={() => handlePress('6')}/>
      <ButtonCalc label="7" style={styles.btnBlack} onPress={() => handlePress('7')}/>
      <ButtonCalc label="8" style={styles.btnBlack} onPress={() => handlePress('8')}/>
      <ButtonCalc label="9" style={styles.btnBlack} onPress={() => handlePress('9')}/>
      </View>
        
        <StatusBar style="auto" />
      </View>
    );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  buttons: {
    backgroundColor: '#000000',
    width: '100%',
    height: '65%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap'
  },
  btnBlack: {
    backgroundColor: '#28282a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 80,
    borderRadius: 100
  },
  btnBlue: {
    backgroundColor: '#007FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 80,
    borderRadius: 100
  },
  textBtn: {
    fontSize: 27,
    color: '#FFFFFF'
  },
  resultDiv: {
    width: '100%',
    height: 90,
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    color: 'white',
    fontSize: 60,
    marginRight: 33
  },
  calcDiv: {
    width: '100%',
    height: 90,
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calcText: {
    color: '#858587',
    fontSize: 40,
    marginRight: 33
  }
});