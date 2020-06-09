import React from 'react';
import PropTypes from 'prop-types';

import close from '../../asserts/icon-close.svg';
import { ModalContent } from './style';

const Modal = (props) => {
  const {
    text, btnRemove, closeModal, remove,
  } = props;
  if (!text) {
    return null;
  }
  return (
    <ModalContent remove={btnRemove}>
      <div>
        <div>
          <button type="button" className="btn_close" onClick={closeModal}>
            <img src={close} alt="close" />
          </button>
          <div className="content">
            <p>
              {
                text
              }
            </p>
            {
            btnRemove
            && (
            <div className="buttons">
              <button className="cancel" type="button" onClick={closeModal}>
                cancelar
              </button>
              <button className="remove" type="button" onClick={remove}> Excluir </button>
            </div>
            )
          }

          </div>
        </div>
      </div>

    </ModalContent>
  );
};

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  btnRemove: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Modal;
