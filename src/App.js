import './App.css';
import Text from './components/text/text'
import Button from './components/button/button'

function App() {
  return (
    <>
      <Text color={'red'} textTransform={'uppercase'}>
        Esse é um texto com o cor red e com text transform uppercase
      </Text>

      <Text></Text>

      <Button label="Baixar CV" />
    </>
  );
}

export default App;
