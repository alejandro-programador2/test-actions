import React from "react";

import { CheckBoxGroup } from "./CheckBoxGroup";

export default {
  title: "ui-components/CheckBoxGroup",
  component: CheckBoxGroup,
};

const Template = (args) => <CheckBoxGroup {...args}></CheckBoxGroup>;

export const Default = Template.bind({});

Default.storyName = "default";
Default.args = {
  legend: "Label de prueba",
};
