import logo from './logo.svg';
import './App.css';
import Shopping from './Shopping';
// import WeatherApi from './WeatherApi';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

function App() {
  return (
    <div className="App">
     {/* <BrowserRouter>
     <Routes>
      <Route path='/e' element={<Shopping/>}/>
      <Route path='/w' element={<WeatherApi/>}/>
     </Routes>

     <Link to='/e'>shopping-site</Link><br></br><br></br>
     <Link to='/w'>WeatherApi</Link>
     </BrowserRouter> */}


     <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

    </div>
  );
}

export default App;
