import ChangeTable from './ChangeTable.js';
import CallSerive from './CallService';
import './App.css';

import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="NavBarActions">
             <ChangeTable />
            <CallSerive />
        </div>
    </div>
  );
}

export default App;
