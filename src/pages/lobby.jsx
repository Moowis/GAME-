import {useNavigate} from 'react-router-dom'


function App() {
    const navigate = useNavigate()
    return (
        <div className="app">
            <div className="button-container">
                <button className={"button"}>Войти в аккаунт</button>
                <button onClick = {() => navigate('/')} className={"button"}>Присоединится к игре</button>
                <button className={"button"}>Создать игру</button>
                <button className={"button"}>Нас</button>
                <button className={"button"}>Выход</button>
            </div>
            <button className={"btn"}>О разработчиках</button>
        </div>
    );
}

export default App;