import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { sum, divide, subtract, multiply } from './calc/math';
export default function App() {
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState(0); 
  const [operator, setOperator] = useState(null); 
  const [result, setResult] = useState(0); 

  const handlePress = (value) => {
    setCurrentValue(currentValue + value); 
  };

  const handleOperator = (selectedOperator) => {
    if (currentValue === '') return;
    setPreviousValue(currentValue);
    setCurrentValue('');
    setOperator(selectedOperator); 
  };

  const handleResult = () => {
    if (!previousValue || !currentValue || !operator) return;

    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);
    let finalResult = 0;

    switch (operator) {
      case '+':
        finalResult = sum(num1, num2);
        break;
      case '-':
        finalResult = subtract(num1, num2);
        break;
      case '*':
        finalResult = multiply(num1, num2);
        break;
      case '/':
        finalResult = divide(num1, num2);
        break;
      default:
        return;
    }

    setResult(finalResult); 
    setCurrentValue(String(finalResult)); 
    setPreviousValue(null); 
    setOperator(null); 
  };
  
  const handleReset = () => {
    setCurrentValue('');
    setPreviousValue(null);
    setOperator(null);
    setResult(null);
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
        <Button
        label="RESET"
        style={styles.BtnWhiteGray}
        onPress={() => handleReset()}
      />
      <Button
        label="+"
        style={styles.BtnOrange}
        onPress={() => handleOperator('+')}
      />
      <Button
        label="="
        style={styles.BtnOrange}
        onPress={() => handleResult()}
      />
      <Button
        label="-"
        style={styles.BtnOrange}
        onPress={() => handleOperator('-')}
      />
      <Button
        label="/"
        style={styles.BtnOrange}
        onPress={() => handleOperator('/')}
      />
      <Button
        label="X"
        style={styles.BtnOrange}
        onPress={() => handleOperator('*')}
      />
      <Button
        label="7"
        style={styles.BtnBlackGray}
        onPress={() => handlePress('7')}
      />
      <Button
        label="8"
        style={styles.BtnBlackGray}
        onPress={() => handlePress('8')}
      />
      <Button
        label="9"
        style={styles.BtnBlackGray}
        onPress={() => handlePress('9')}
      />

      <Button
        label="4"
        style={styles.BtnBlackGray}
        onPress={() => handlePress('4')}
      />
      <Button
        label="5"
        style={styles.BtnBlackGray}
        onPress={() => handlePress('5')}
      />
      <Button
        label="6"
        style={styles.BtnBlackGray}
        onPress={() => handlePress('6')}
      />
      <Button
        label="-"
        style={styles.BtnOrange}
        onPress={() => handleOperator('-')}
      />
      <Button
        label="1"
        style={styles.BtnBlackGray}
        onPress={() => handlePress('1')}
      />
      <Button
        label="2"
        style={styles.BtnBlackGray}
        onPress={() => handlePress('2')}
      />
      <Button
        label="3"
        style={styles.BtnBlackGray}
        onPress={() => handlePress('3')}
      />
      <Button
        label="0"
        style={styles.BtnBlackGray}
        onPress={() => handlePress('0')}
      />
      </View>
        
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  buttons: {
    backgroundColor: 'black',
    width: '100%',
    height: '65%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap'
  },
  BtnBlackGray: {
    backgroundColor: '#28282a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 80,
    borderRadius: 100
  },
  BtnWhiteGray: {
    backgroundColor: '#5c5c5e',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 80,
    borderRadius: 100
  },
  BtnOrange: {
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 80,
    borderRadius: 100
  },
  textBtn: {
    fontSize: 27,
    color: 'white'
  },
  resultDiv: {
    width: '100%',
    height: 90,
    backgroundColor: 'black',
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
    backgroundColor: 'black',
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