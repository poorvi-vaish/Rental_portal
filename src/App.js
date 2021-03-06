import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicTable from './components/List/list';
import Form from './components/Form/form';

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
      <Routes>
          <Route path="/" element={<BasicTable />} />
          <Route path="/details/:id" element={<Form />} />
      </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;
