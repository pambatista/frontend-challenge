import Styled from 'styled-components';

export const ModalContent = Styled.div`
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
        background: ${(props) => (props.remove ? '#a0cadcfa' : '#ff866b')};
        position: relative;
        overflow: hidden;
        .content {
          display: flex;
          flex-direction: column;
          justify-content:center;
          padding: 0;
          margin-top: 20px;
          min-width: 100%;
          overflow: hidden;
          .buttons {
            display flex;
            color: #fff;
            min-width: 100%;
            padding: 0;
            max-height: 20px;
            position: absolute;
            bottom: 10px;
            justify-content: space-between;
            @media (min-width: 768px) {
              bottom: 20px;
              justify-content: flex-end;
            }
            .remove {
              background: #ff866b;
              color: #fff;
              border-radius: 8px;
              border:none;
              padding: 5px 15px;
              outline: none;
              cursor: pointer;
            }
            .cancel {
              background: #04588E;
              border:none;
              color: #fff;
              outline: none;
              cursor: pointer;
              border-radius: 8px;
              margin-right: 10px;
              padding: 5px 15px;
            }
          }
          p {
            font-size: 16px;
            font-family: 'Roboto';
            text-align: center;
            color: ${(props) => (props.remove ? '#363636' : 'red')};
          }
        }

        .btn_close {
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
`;
