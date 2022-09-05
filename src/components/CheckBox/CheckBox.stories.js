import React from "react";
// import { userEvent, within } from "@storybook/testing-library";
// import { expect } from "@storybook/jest";

import { CheckBox } from "./CheckBox";

export default {
  title: "ui-components/CheckBox",
  component: CheckBox,
};

const Template = (args) => <CheckBox {...args} />;

export const radio = Template.bind({});
radio.args = {
  label: "Opción 1",
  type: "radio",
  state: "normal",
  name: "option1",
};

export const checkbox = Template.bind({});
checkbox.args = {
  label: "Opción 1",
  type: "checkbox",
  state: "normal",
  name: "option1",
};
