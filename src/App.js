import './App.css';
import { LayoutMain } from './components/Layout';
import { NavBar } from './components/navbar';
import {BackGround} from './components/StartDeploying';
import {FooterOne} from './components/Footer';
import {FooterTwo} from './components/FooterTwo';
import { useMediaQuery} from 'react-responsive';
import {DeviceList} from './components/responsive';
import { MobFooterMain } from './components/MobFooter';

function App() {
  const isMobile = useMediaQuery({maxWidth : DeviceList.mobile})

  return (
    <div className="App">
        <NavBar />
        <LayoutMain />
        <BackGround />
        {!isMobile && <FooterOne />} 
        {isMobile && <MobFooterMain/>}
        <FooterTwo />
    </div>
  );
}

export default App;
