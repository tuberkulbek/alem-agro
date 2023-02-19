import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.css';
import { getProfileInfoAction } from './app/redux/profile';
import { RootState, useAppDispatch } from './app/redux/store';
import Auth from './components/Auth/LoginPage';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';

function App() {
  const dispatch = useAppDispatch()
  const auth = useSelector((state: RootState) => state.auth.isAuth)


  useEffect(() => {
    dispatch(getProfileInfoAction())
  }, [])

  
  if (!auth) {
    return <Auth />
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Main/>} />
        <Route path={'/profile'} element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
