import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, ref, buttonText }) {
  const dialog = useRef();
  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    },
    []
  );
  return createPortal(
    <dialog ref={dialog}>
        {children}
        <form method="dialog">
            <button>{buttonText}</button>
        </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
