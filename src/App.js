import './App.css';
import { DataProvider } from './context/AssemblyEndgameContext';
import { AssemblyEndGame } from './AssemblyEndGame/AssemblyEndGame';

function App() {
  return (
   <DataProvider>
     <AssemblyEndGame />
   </DataProvider>
  );
}

export default App;
