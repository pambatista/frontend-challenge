import Styled from 'styled-components'

export const Container = Styled.div`
  width: 100%;
  background:  #04588E;
  min-height: 100vh;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Content = Styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  background:  #04588E;
  padding: 24px;
  box-sizing: border-box;
  @media (min-width: 769px) {
    width: 50%;
  }
  img {
    width: 100%;
    @media (min-width: 769px) {
      width: 50%;
    }
  }

  h1 {
    font-family: 'Roboto' , sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    color: #FFFFFF;
    margin: 18px 0;
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
    @media (min-width: 769px) {
      width: 25%;
    }
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
