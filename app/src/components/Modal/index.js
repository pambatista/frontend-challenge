import React from  'react'
import close from '../../asserts/icon-close.svg'
import { ModalContent } from './style'

const Modal = (props) => {
  if(!!!props.text) {
    return null
  }
  return(
    <ModalContent remove={props.btnRemove}>
      <div>
      <div>
        <button className="btn_close">
          <img src={close} onClick={props.closeModal}/>
        </button>
        <div className="content">
        <p>
              {
                props.text
              }
          </p>
          {
            props.btnRemove &&
            ( <div className="buttons">
                <button className="cancel" onClick={props.closeModal}> cancelar </button>
                <button className="remove" onClick={props.remove}> Excluir </button>
              </div>
            )
          }

        </div>
      </div>
    </div>

    </ModalContent>
  )
}

export default Modal
