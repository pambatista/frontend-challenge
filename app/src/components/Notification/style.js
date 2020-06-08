import Styled from 'styled-components'

export const Container = Styled.div`
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  background: ${props => (props.error ? '#ff866b' : '')};
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 10px;
`
