import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const onPressBotao = () => {
    // Incrementa o contador em 1 quando o botão é clicado
    setContador(contador + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Quantidade de cliques: {contador}</Text>
      <Button title="Cique em mim" onPress={onPressBotao} />
      <StatusBar style="auto" />
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
});

