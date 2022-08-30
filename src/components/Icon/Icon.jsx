import PropTypes from "prop-types";
import css from "./Icon.module.scss";

export const iconList = [
  "close",
  "check",
  "play",
  "pause",
  "volume_on",
  "volume_off",
];

export const Icon = ({ name, size, addClass, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className={`${css["c-icon"]} ${css[`c-${size}`]}`}
      aria-hidden="true"
      {...props}
    >
      <use xlinkHref={`./svg/${name}.svg#${name}`}></use>
      {/* <path
        id="check"
        d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"
      /> */}
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(iconList),
};

Icon.defaultProps = {
  name: "close",
};
