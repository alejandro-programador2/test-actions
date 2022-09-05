import React from "react";

import { Modal } from "./Modal";

const modalContent = (
  <>
    <h3 className="u-text-center">Contenido de prueba</h3>
    <p>
      Contenido de prueba para ver si el feature funciona con un{" "}
      <a href="#">link de prueba</a> para el focus trap
    </p>
    <details>
      <summary>Y un details y summary de prueba</summary>
      <p>Con texto de prueba</p>
    </details>
  </>
);

export default {
  title: "ui-components/Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args}></Modal>;

export const Default = Template.bind({});

Default.storyName = "default";
Default.args = {
  label: "Modal de prueba",
  button: {
    label: "Abrir modal",
    icon: {
      name: "",
    },
  },
  children: modalContent,
};
