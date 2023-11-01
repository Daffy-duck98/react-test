import React from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';

function App() {
  // const [value, setValue] = useState('');

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
    </div>
  );
}

export default App;
