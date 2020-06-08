import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  label {
    font-family: 'Roboto' , sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.5);
  }
  input {
    font-family: 'Roboto' , sans-serif;
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

`
