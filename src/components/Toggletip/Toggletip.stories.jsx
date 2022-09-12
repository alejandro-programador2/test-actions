import React from "react";

import { Toggletip } from "./Toggletip";
import { ToggletipButton } from "./ToggletipButton";
import { ToggletipContent } from "./ToggletipContent";
import { Button } from "components/Button/Button";

export default {
   title: "ui-components/Toggletip",
   component: Toggletip,
   decorators: [
      (story) => (
         <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="u-flex u-my-5" style={{ minWidth: "30vw", maxWidth: "55vw", alignItems: "center", justifyContent: "center" }}>
               {story()}
            </div>
         </div>
      ),
   ],
};

export const Default = () => (
   <Toggletip>
      <ToggletipButton>
         <Button
            label="open toggletip"
            size="small"
            hasAriaLabel
            icon={{
               name: "check",
               size: "big",
            }}
         />
      </ToggletipButton>
      <ToggletipContent>
         <p className="u-my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsam!</p>
         <Button type="secondary" size="small" label="Learn more" />
      </ToggletipContent>
   </Toggletip>
);

Default.storyName = "default";

export const withArrow = () => (
   <Toggletip>
      <ToggletipButton>
         <Button
            label="open toggletip"
            size="small"
            hasAriaLabel
            icon={{
               name: "check",
               size: "big",
            }}
         />
      </ToggletipButton>
      <ToggletipContent hasArrow>
         <p className="u-my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsam!</p>
         <Button type="secondary" size="small" label="Learn more" />
      </ToggletipContent>
   </Toggletip>
);

withArrow.storyName = "with arrow";
