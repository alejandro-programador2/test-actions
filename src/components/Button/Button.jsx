import PropTypes from "prop-types";
import { forwardRef, Fragment } from "react";
import { Icon } from "../Icon/Icon";
import css from "./Button.module.scss";
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
      variant,
      hasAriaLabel,
      disabled,
      onClick,
      children,
      addClass,
      ...args
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${css["c-button"]} ${css[`c-${variant}`]} ${
          css[`c-${size}`]
        } ${
          icon.name && hasAriaLabel ? css["c-round"] : ""
        } u-flex ${addClass}`}
        disabled={disabled}
        type={type}
        aria-label={hasAriaLabel ? `${label}` : undefined}
        onClick={onClick}
        {...args}
      >
        {children}
        {icon.name && <Icon name={icon.name} size={icon.size} />}
        {!hasAriaLabel ? label : ""}
      </button>
    );
  }
);

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf("small", "normal", "big"),
  variant: PropTypes.oneOf("primary", "secondary"),
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
  label: "Button",
  size: "normal",
  variant: "secondary",
  type: "button",
  hasAriaLabel: false,
  icon: {
    name: "",
  },
  onClick: undefined,
  disabled: false,
  addClass: "",
};
