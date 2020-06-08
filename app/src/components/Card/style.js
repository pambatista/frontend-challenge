import Styled from 'styled-components'

export const CardContent = Styled.li`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  width: 100%;
  height: 85px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 14px 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background: #fff;

  div {
    width: 70%;
    padding: 16px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
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
    cursor: pointer;
    @media (min-width: 768px) {
      height: 85px;
    }
  }

`

