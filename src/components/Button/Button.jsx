import PropTypes from "prop-types";
import { forwardRef, Fragment } from "react";
import { Icon } from "../Icon/Icon";
import css from "./Button.module.css";
import iconLibrary from "../Icon/Icon";

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un botón.
 * param { styled, label, hasAriaLabel, icon, disabled }
 * - styled: definición del estilo del botón. La lista está en Button.propTypes
 * - label: etiqueta del botón
 * - hasAriaLabel: determina si la etiqueta será usada como un aria-label (si es true) o será mostrada como texto de forma normal (si es false)
 * - icon: determina el nombre del ícono de Google Icons que será usado.
 * - disabled: determina si el botón estará o no deshabilitado.
 **/

export const Button = forwardRef(
  (
    {
      label,
      size,
      icon,
      type,
      hasAriaLabel,
      disabled,
      children,
      addClass,
      ...args
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`flex ${css["c-button"]} ${css[`c-${size}`]} ${addClass}`}
        disabled={disabled ? "" : undefined}
        type={type}
        aria-label={hasAriaLabel ? `${label}` : ""}
        {...args}
      >
        {children}
        {icon.name && <Icon name={icon.name} size={icon.size} />}
        {!hasAriaLabel ? <span>{label}</span> : <Fragment />}
      </button>
    );
  }
);

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf("small", "normal", "big"),
  type: PropTypes.oneOf("button", "submit", "reset"),
  hasAriaLabel: PropTypes.bool,
  icon: PropTypes.shape({
    name: PropTypes.oneOf(iconLibrary),
    size: PropTypes.oneOf("small", "normal", "big"),
  }),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  addClass: PropTypes.string,
};

Button.defaultProps = {
  styled: "primary",
  label: "Button",
  addClass: "",
  onClick: undefined,
  hasAriaLabel: false,
};
