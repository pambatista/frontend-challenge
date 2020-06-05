import Styled from 'styled-components'

export const Container = Styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  header {
    background:  #04588E;
    min-height: 30vh;
    padding: 24px;
    color: #fff;
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
        font-size: 16px;
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
export const Modal = Styled.div`
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    div {
      position: fixed;
      width: calc(100% + 6px);
      height: 100vh;
      background: rgba(0,0,0, 0.5);
      z-index: 20;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        max-width: 50%;
        max-height: 30vh;
        overflow: auto;
        padding: 24px;
        margin: 0;
        z-index: 30;
        position: fixed;
        background: #ff866b;
        position: relative;
        font-size: 16px;
        font-family: 'Roboto';
        p {
          color: red;
        }
        button {
          border: none;
          outline: none;
          background: transparent;
          position: absolute;
          top: 15px;
          right: 15px;
          img {
            height: 16px;
          }
        }
      }
    }
`
export const ButtonAdd = Styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100&display=swap');

  background: #00B0FF;
  box-shadow: 7px 5px 6px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #fff;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  line-height: 24px;
  border: none;
  width: 100%;
  outline: none;
  height: 40px;

`
export const Card = Styled.li`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  width: 100%;
  height: 85px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 14px 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  div {
    width: 70%;
    padding: 16px;
    box-sizing: border-box;
    font-family: 'Roboto';
    color: #363636;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      margin: 0;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
    }
    p {
      font-size: 18px;
      line-height: 21px;
      color: #000000;
      font-weight: 600;
      margin: 12px 0 0;
      span {
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }

  button {
    width: 25%;
    height: 84.5px;
    border: none;
    background: rgba(255, 9, 9, 0.59);
    border-radius: 0px 5px 5px 0px;
    outline: none;
  }

`
export const List = Styled.ul`
  list-style-type:none;
  padding: 0 24px;
`
