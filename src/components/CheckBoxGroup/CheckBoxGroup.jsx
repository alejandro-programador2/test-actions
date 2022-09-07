import css from "./CheckBoxGroup.module.scss";

export const CheckBoxGroup = ({ legend, children }) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className="u-flow">
        {children}
      </div>
    </fieldset>
  );
};
