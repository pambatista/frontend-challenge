import Styled from 'styled-components'

export const Container = Styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  background:  #04588E;
  min-height: 100vh;
  padding: 24px;
  box-sizing: border-box;
  img {
    width: 100%;
  }

  h1 {
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    color: #FFFFFF;
    margin: 18px 0;
  }

  form {
    div {
      display: flex;
      flex-direction: column;
      margin: 16px 0;
      label {
        font-family: 'Roboto';
        font-size: 16px;
        line-height: 19px;
        color: rgba(255, 255, 255, 0.5);
      }
      input {
        font-family: 'Roboto';
        font-size: 18px;
        color: #363636;
        width:100%;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        box-shadow: 7px 5px 6px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        outline: none;
      }
    }
  }
`
export const Button = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100&display=swap');

  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  button {
    background: #00B0FF;
    box-shadow: 7px 5px 6px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 40%;
    border: none;
    height: 40px;
    font-family: 'Fira Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    div{
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 16px;
      justify-content: space-between;
    }
    img {
      width: 22px;
      height: 24px;
    }
  }
`
export const Notification = Styled.div`
  width: 100%;
  height: 25px;
  box-sizing: border-box;
  div {
    background: #ff866b;
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 10px;
  }

`
