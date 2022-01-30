import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id:1, name:'comprar pao',done:false},
    { id:2, name:'comprar bolo',done:false}
  ]);


  return (
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>
          
          
        
        </C.Area>
      </C.Container>
  );
}

export default App;