import { title } from 'framer-motion/client';
import './ModalWithForm.css';
function ModalWithForm({title, children, buttonText, activeModal}) {
    return (
      <div className={'modal ${activeModal === "add-garment" && "modal--visible"}'}>
        <div className="modal__content">
        <h2 className='modal__title'>{title}</h2>
        <button 
            type='button' 
            className='modal__close' 
          >
            &times;
          </button>
        <form 
          className='modal__form'
        >
{children}
            <button 
              type='button' 
              className='modal__submit'
            >
             {buttonText}
            </button>
            </form>
        </div>
      </div>
    );
  }
  
  export default ModalWithForm;
  