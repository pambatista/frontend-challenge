import Styled from 'styled-components'

export const Container = Styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Content = Styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  width: 100%;
  header {
    background:  #04588E;
    min-height: 30vh;
    padding: 24px;
    color: #fff;
    div {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      button {
        background: transparent;
        border: 1px solid #fff;
        border-radius: 5px;
        color: #fff;
        box-shadow: 7px 5px 6px rgba(0, 0, 0, 0.25);
        font-family: 'Roboto', sans-serif;
        padding: 5px;
        width: 20%;
        cursor: pointer;
        @media (min-width: 768px) {
          width: 10%;
        }
      }
    }
  }
  form {
    display: flex;
    justify-content: center;
    width: 100%;
    .form-add{
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (min-width: 768px) {
        width: 70%;
      }
      button {
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
        cursor: pointer;
      }
    }
  }
  section {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

