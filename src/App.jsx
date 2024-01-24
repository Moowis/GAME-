import {useNavigate} from 'react-router-dom'
import "./App.css";

function App() {
    const navigate = useNavigate()
  return (
      <div className="app">
          <div className="button-container">
              <button onClick = {() => navigate('/login')} className={"button"}>Войти в аккаунт</button>
              <button onClick = {() => navigate('/lobby')} className={"button"}>Присоединится к игре</button>
              <button className={"button"}>Создать игру</button>
              <button className={"button"}>Настрйки</button>
              <button className={"button"}>Выход</button>
          </div>
          <button className={"btn"}>О разработчиках</button>
      </div>
    );
}

export default App;
