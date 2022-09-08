import PropTypes from "prop-types";
import _uniqueId from "lodash/uniqueId";
import { useState, useMemo } from "react";

import { Icon } from "../Icon/Icon";
import css from "./CheckBox.module.scss";
import { typeValidation } from "utils/validations/typeValidation";

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un input tipo checkbox, toggle o radio
 * param { type, label, stateInput, name, addClass }
 * - type: El tipo del input que se creará. Los valores son "radio", "checkbox" o "toggle"
 * - label: etiqueta que describirá el elemento.
 * - addClass: clase adicional que se necesite agregar al input
 **/

export const CheckBox = ({ type, label, state, name, onClick, addClass, ...args }) => {
   const id = useMemo(() => _uniqueId(`ui-${type}`), []);

   const [value, SetValue] = useState(name);

   const onChange = ({ target }) => {
      if (onClick) {
         onClick({ id: target.id, value: target.value });
      }
      SetValue(target.value);
   };

   const handleIconName = () => {
      if (state === "right") {
         return "done_all";
      } else if (state === "wrong") {
         return "close";
      } else if (type === "checkbox" && state === "normal") {
         return "check";
      } else {
         return null;
      }
   };

   return (
      <label htmlFor={id} className={`${css["c-input"]} u-flex ${addClass ?? ""}`} data-state={state} data-type={type} {...args}>
         <div className={css["c-input__box"]}>
            <input onChange={onChange} className={css["c-input__check"]} data-state={state} type={type} id={id} name={name} value={value} />
            <div className={css["c-input__icon"]}>
               <Icon name={handleIconName()} />
            </div>
         </div>
         <span className={css["c-input__label"]}>{label}</span>
      </label>
   );
};

CheckBox.propTypes = {
   label: PropTypes.string.isRequired,
   state: PropTypes.oneOf(["normal", "right", "wrong"]),
   type: PropTypes.oneOf(["radio", "checkbox"]),
   name: PropTypes.string,
   addClass: PropTypes.string,
   onClick: PropTypes.func,
   __TYPE: typeValidation("CheckBox"),
};

CheckBox.defaultProps = {
   label: "Label",
   state: "normal",
   type: "radio",
   name: "option1",
   __TYPE: "CheckBox",
};
