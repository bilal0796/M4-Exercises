import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Components/MyNavbar';
import WelcomePage from './Components/WelcomePage';
import MyFooter from './Components/MyFooter';
import LatestReleases from './Components/LatestReleases';
function App() {
  return (<>
      <MyNavbar />
      <WelcomePage />
      <LatestReleases />
      <MyFooter />
    </>);
}

export default App;
