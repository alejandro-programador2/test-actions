import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { Button } from "./Button";

export default {
   title: "ui-components/Button",
   component: Button,
   argTypes: {
      backgroundColor: { control: "color" },
   },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
   label: "Button",
};

export const Large = Template.bind({});
Large.args = {
   size: "large",
   label: "Button",
};

export const Small = Template.bind({});
Small.args = {
   size: "small",
   label: "Button",
};

export const interactions = Template.bind({});
interactions.args = {
   ...Primary.args,
};

interactions.play = async ({ canvasElement }) => {
   const canvas = within(canvasElement);
   await userEvent.click(canvas.getByRole("button"));

   expect(canvas.getByRole("button")).toBe(canvas.getByText(interactions.args.label));
};
