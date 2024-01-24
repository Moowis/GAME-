import styles from '../style/authForm.module.css'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'

const LoginForm = () => {

	return (
		<div className={styles.authForm}>
			<h2>Авторизация</h2>

			<form>
				<label htmlFor='email'>Email:</label>
				<input
					type='email'
					id='email'
					name='email'
					onChange={e => (e.target.value)}
				/>
				<label htmlFor='password'>Пароль:</label>
				<input
					type='password'
					id='password'
					name='password'
					onChange={e => (e.target.value)}
				/>
				<p>
					Ещё нет аккаунта? <a href='/register'>Зарегистрироваться</a>
				</p>
					<button type='submit'>Войти</button>
				<p>
					Забыли пароль? <a href='/'>Восстановите его</a>
				</p>
			</form>
		</div>
	)
}

export default LoginForm
