import { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import _uniquedId from "lodash/uniqueId";

import { Icon } from "components/Icon/Icon";
import { getChildrenByType } from "utils/validations/getChildrenType";

import css from "./Select.module.scss";

export const Select = forwardRef(({ children, addClass, placeholder, label, icon, isLabelVisible, isDisabled, isRequired, onChoise }, ref) => {
   const [choise, setChoise] = useState();

   const select = _uniquedId("c-select-");

   const onChange = ({ target }) => {
      onChoise && onChoise(target.value);
      setChoise(target.value);
   };

   return (
      <label htmlFor={select} ref={ref} className={`${addClass ?? ""}`}>
         <span className={`${!isLabelVisible && "u-sr-only"}`}> {label} </span>

         <div className={css["c-select-wrapper"]}>
            <select
               id={select}
               name={select}
               value={choise}
               defaultValue={"default"}
               className={css["c-select"]}
               onChange={onChange}
               disabled={isDisabled}
               require={isRequired}
            >
               <option value={"default"} disabled>
                  {placeholder}
               </option>

               {getChildrenByType(children, ["option"])}
            </select>

            <Icon name={`${icon ?? "arrow_drop_down"}`} addClass={css["c-select__icon"]} />
         </div>
      </label>
   );
});

Select.propTypes = {
   children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
   addClass: PropTypes.string,
   placeholder: PropTypes.string,
   label: PropTypes.string.isRequired,
   icon: PropTypes.string,
   isLabelVisible: PropTypes.bool,
   isDisabled: PropTypes.bool,
   isRequired: PropTypes.bool,
   onChoise: PropTypes.func,
};

Select.defaultProps = {
   placeholder: "Select option",
   isLabelVisible: false,
   label: "Select a option",
};
