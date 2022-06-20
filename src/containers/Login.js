import styled from "styled-components";
import trello from "../assets/trello-logo-blue.svg";
import google from "../assets/google-logo.png";
import microsoft from "../assets/microsoft-logo.png";
import apple from "../assets/apple-logo.png";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { authActions } from "../store/slices/authSlice";

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formIsValid = useSelector(state=> state.auth.formIsValid)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(()=>{
    let timer = setTimeout(() => {
      dispatch(authActions.checkForm({email, password}))
      console.log('time')
    }, 2000);

    return ()=> clearTimeout(timer)
  },[email, password])

  const submitHandler = (event)=>{
    event.preventDefault()
    if(formIsValid){
      navigate('/trello')
    }
  }
  return (
    <>
      <Image src={trello} />
      <Block>
        <h3>Вход в Trello</h3>
        <Form>
          <input
            type="email"
            placeholder="Укажите адрес электронной почты"
            onChange={(event)=>setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Введите пароль"
            onChange={(event)=>setPassword(event.target.value)}
          />
          <Button onClick={submitHandler} disabled={!formIsValid}>Войти</Button>
        </Form>
        <h4>ИЛИ</h4>
        <Icon>
          <img src={google} /> Войти через Google
        </Icon>
        <Icon>
          <img src={microsoft} /> Войти через Microsoft
        </Icon>
        <Icon>
          <img src={apple} /> Войти через Apple
        </Icon>
        <Hr>
          <List>
            <li>Вход с помощью SSO</li>
          </List>
        </Hr>
        <List>
          <li>Не удается войти?</li>
          <li onClick={()=> navigate('/signup')}>Зарегистрировать аккаунт</li>
        </List>
      </Block>
      <List>
        <li>Политика конфиденциальности</li>
        <li>Условия использования</li>
      </List>
    </>
  );
}

export default Login;

const Image = styled("img")`
  height: 43px;
  margin: 27px auto;
`;

const Block = styled("div")`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: white;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
  padding: 25px 40px;
  font-size: 14px;
  > h3 {
    font-weight: bold;
    color: #5e6c84;
    font-size: 16px;
    line-height: 28px;
    margin-top: 10px;
    margin-bottom: 25px;
  }
  > h4 {
    font-size: 12px;
    color: #4d4d4d;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 300;
  }
`;

const List = styled("ul")`
  padding: 0 0 0 0;
  margin: 15px auto;
  list-style: none;
  > li {
    display: inline;
    font-size: 13px;
    color: #0052cc;
    font-family: sans-serif;
    font-weight: 300;
    margin: 5px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const Hr = styled("div")`
  border-bottom: 1px solid hsl(0, 0%, 80%);
  padding-bottom: 15px;
`;

const Icon = styled("div")`
  width: 316px;
  height: 39px;
  box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
  border-radius: 3px;
  margin-bottom: 12px;
  font-weight: bold;
  color: #505f79;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #f9fafc;
    cursor: pointer;
  }
  > img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
`;

const Form = styled("form")`
  width: 320px;
  display: flex;
  flex-direction: column;
  > input {
    padding: 0.5em;
    margin: 0 0 1.2em;
    height: 44px;
    border-radius: 3px;
    border: 2px solid #dfe1e6;
    background-color: #fafbfc;
    outline-color: #4c9aff;
  }
`;

const Button = styled("button")`
  height: 35px;
  background-color: #5aac44;
  color: white;
  border-radius: 0.3em;
  border: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #61bd4f;
  }
  &:disabled{
    cursor: not-allowed;
  }
`;
