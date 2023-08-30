import './App.css';
import RecoilForm from './Component1/Form';
import Table from './Component2/Table';
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <RecoilForm />
        <Table />
      </RecoilRoot>
    </div>
  );
}

export default App;
