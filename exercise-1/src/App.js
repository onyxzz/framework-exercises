import React from 'react';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import TopNews from './Components/TopNews';
import MainSection from './Components/MainSection';
import SideBar from './Components/SideBar';

function App() {

  const MainSectionData = [
    {
      title: '/TOP STORIES/'
    },
    {
      title: '/WHAT IS HAPPENING/'
    },
  ];

  return (
    <div>
      <div>
        <Header />
        <Menu />
        <TopNews />
      </div>
      <div>
        {
          MainSectionData.map( element => <MainSection data={ element } />)
        }
        <SideBar />
      </div>
    </div>
  );
}

export default App;
