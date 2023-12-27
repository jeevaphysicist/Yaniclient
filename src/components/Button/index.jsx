import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[26px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs text-black-900",
    green_50: "bg-green-50",
    red_A700_01: "bg-red-A700_01 text-white-A700",
    green_A700: "bg-green-A700 text-white-A700",
    light_green_A700: "bg-light_green-A700 text-white-A700",
  },
  outline: {
    black_900: "border border-black-900 border-solid text-gray-900_04",
  },
};
const sizes = { xs: "p-0.5", sm: "p-[7px]", md: "p-[11px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "light_green_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "green_50",
    "red_A700_01",
    "green_A700",
    "light_green_A700",
    "black_900",
  ]),
};

export { Button };
