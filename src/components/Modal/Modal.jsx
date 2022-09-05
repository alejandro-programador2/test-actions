import "wicg-inert";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Button } from "../Button/Button";
import css from "./Modal.module.scss";
import { iconList } from "../Icon/Icon";

export const Modal = ({ button, addClass, children, isOpen, ...props }) => {
  const [hiddenModal, setHiddenModal] = useState(true);
  const refButton = useRef(null);
  const refModal = useRef(null);

  const closeModalOnEsc = (e) => {
    if ((e.keyCode || e.which) === 27) {
      const root = document.querySelector("#root");
      setHiddenModal(true);
      root.inert = false;
      refButton.current.focus();
    }
  };

  const toggleModal = (state) => {
    const noModalZones = document.querySelector("#root");
    setHiddenModal(state);
    noModalZones.inert = !state;
    // if (state === true) {
    //   refButton.current.focus();
    // } else {
    //   console.log("Flag");
    //   refModal.current.focus();
    //   console.log(document.activeElement);
    // }
    // console.log(document.activeElement);
  };

  useEffect(() => {
    // const root = document.querySelector("#root");
    // root.inert = !hiddenModal;
    isOpen && isOpen(!hiddenModal);
    if (hiddenModal) {
      refButton.current.focus();
      // refModal.current.removeEventListener("keydown", closeModalOnEsc);
    } else {
      refModal.current.focus();
      // refModal.current.addEventListener("keydown", closeModalOnEsc);
    }
  }, [hiddenModal, isOpen]);

  return (
    <>
      <Button
        ref={refButton}
        label={button.label}
        size={button.size}
        icon={{
          name: button?.icon?.name,
          size: button?.icon?.size,
          position: button?.icon?.position,
        }}
        type={button.type}
        variant={button.variant}
        hasAriaLabel={button.hasAriaLabel}
        disabled={button.disabled}
        children={button.children}
        addClass={button.addClass}
        onClick={() => toggleModal(false)}
      />
      {ReactDOM.createPortal(
        <>
          <div
            className={css["c-layout"]}
            onClick={() => toggleModal(true)}
            hidden={hiddenModal}
          ></div>
          <div
            role="dialog"
            tabIndex="-1"
            hidden={hiddenModal}
            aria-label={button.label}
            ref={refModal}
            onKeyDown={closeModalOnEsc}
            aria-modal="true"
            className={`${css["c-modal"]} u-px-3 u-py-3 ${addClass}`}
            {...props}
          >
            <div className={`${css["c-modal-container"]} u-flow`}>
              {children}
            </div>
            <Button
              addClass={css["c-close-button"]}
              label="Cerrar modal"
              hasAriaLabel={true}
              icon={{ name: "close" }}
              onClick={() => toggleModal(true)}
            />
          </div>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

Modal.propTypes = {
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "normal", "big"]),
    variant: PropTypes.oneOf(["primary", "secondary", "no-line"]),
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    hasAriaLabel: PropTypes.bool,
    icon: PropTypes.shape({
      name: PropTypes.oneOf(iconList),
      size: PropTypes.oneOf(["small", "normal", "big"]),
      position: PropTypes.oneOf(["left", "right"]),
    }),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    addClass: PropTypes.string,
  }),
  addClass: PropTypes.string,
  isOpen: PropTypes.func,
};

Modal.defaultProps = {
  button: {
    label: "Abrir modal",
    icon: {
      name: "",
    },
  },
  addClass: "",
  isOpen: undefined,
};
