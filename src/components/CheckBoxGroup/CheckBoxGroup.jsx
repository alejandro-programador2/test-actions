import PropTypes from "prop-types";
import { Children, cloneElement, isValidElement, useEffect, useState } from "react";
import { getChildrenByType } from "utils/validations/getChildrenType";
import css from "./CheckBoxGroup.module.scss";

export const CheckBoxGroup = ({ legend, children: childrenProps, onChecked }) => {
   const [checked, setChecked] = useState([]);
   const detectCheckedValues = (value) => {
      const validate = checked.filter((option) => option.id === value.id);

      if (validate.length) {
         setChecked([...checked.filter((option) => option.id !== value.id)]);
      } else {
         setChecked([...checked, { ...value }]);
      }
   };

   useEffect(() => {
      if (onChecked) {
         onChecked(checked);
      }
   }, [checked]);

   const children = Children.map(childrenProps, (child) => {
      if (!isValidElement(child)) {
         return null;
      }

      if (child.props.__TYPE === "CheckBox") {
         return cloneElement(child, {
            ...child.props,
            onClick: detectCheckedValues,
         });
      }

      return child;
   });

   return (
      <fieldset className={css["c-checkbox-container"]}>
         <legend>{legend}</legend>
         <div className="u-flow">{getChildrenByType(children, ["CheckBox"])}</div>
      </fieldset>
   );
};

CheckBoxGroup.propTypes = {
   legend: PropTypes.string,
   children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
   onChecked: PropTypes.func,
};
