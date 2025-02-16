// import logo from './logo.svg';
import './App.css';
import { useEffect /* 從API獲取資料 */, useState /* 儲存資料 */ } from 'react';
import MyButton from './components/MyButton';
import Dashboard from './pages/Dashboard';
import Layout from './layouts/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  // function App() {
  // const [message, setMessage] = useState<string>('');//使用useState建立message，用來儲存從 API 獲得的資料

  // useEffect(() => {//useEffect => 在元件渲染後，打API
  //   fetch('/hello')
  //     .then(res => res.json())
  //     .then(data => setMessage(data.message));// 更新狀態
  // }, []);

  // console.log('message=', message);

  // return (

  //   <div>
  //     <h1>Welcome to my app</h1>
  //     <MyButton text={message} />
  //   </div>

  //   // <div>
  //   //   <h1>Express + React Full-Stack Example</h1>
  //   //   <p>Message from server: {message}</p>
  //   // </div>

  //   // <div className="App">
  //   //   <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>src/App.js</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a>
  //   //   </header>
  //   // </div>
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;