import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { SmallSidebar, BigSidebar, Navbar } from '../components';
import { createContext, useState, useContext } from 'react';

const DashboardContext = createContext()

const DashboardLayout = () => {
  // temp
  const user = {name: 'john'}
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setisDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log('toggle dark theme');
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('logout user');
  };

  return (
    <DashboardContext.Provider
      value={{
        user, 
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}>
      <Wrapper>
        <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar /> 
        </main>
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </Wrapper>  
    </DashboardContext.Provider>
  )
};
export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;