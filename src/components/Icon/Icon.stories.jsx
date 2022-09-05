import React from "react";

import { Icon, iconList } from "./Icon";

export default {
   title: "ui-components/Icon",
   component: Icon,
   argTypes: {
      name: {
         options: iconList,
         control: { type: "select" },
      },
   },
};

const Template = (args) => <Icon {...args} />;

export const small = Template.bind({});
small.args = { size: "small" };
small.storyName = "small";

export const normal = Template.bind({});
normal.args = { size: "normal" };
normal.storyName = "normal";

export const big = Template.bind({});
big.args = { size: "big" };
big.storyName = "big";
