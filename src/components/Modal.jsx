// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModalOpen } from '../features/modal/modalSlice';

const Modal = ({ children }) => {
  const isOpen = useSelector((state) => state.modal.modalOpen);
  console.log('isOpen:', isOpen);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setModalOpen(false));
  };

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal} />
      {/* модальное окно */}
      <div className="bg-white rounded-lg p-8 relative">
        <button
          className="absolute top-0 right-0 m-1 opacity-20 hover:opacity-70"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
