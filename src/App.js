import './App.scss';
import EndpointPage from './EndpointPage/EndpointPage'
import jsonData from './fe_data.json'

function App() {
  return (
    <div className="App">
      <EndpointPage data={jsonData}/>
    </div>
  );
}

export default App;
