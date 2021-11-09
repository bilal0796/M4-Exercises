import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Components/MyNavbar';
import WelcomePage from './Components/WelcomePage';
import MyFooter from './Components/MyFooter';
function App() {
  return (
    <div>
      <MyNavbar />
      <WelcomePage />
      <MyFooter />
    </div>
  )
}

export default App;
