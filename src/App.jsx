import { Modal } from "components/Modal/Modal";

export const App = () => {
  return (
    <>
      <p className="u-text-primary-900">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
        perferendis, cumque sint ea, sed fugit voluptate explicabo ipsum
        quibusdam quia dolorum voluptates deleniti quaerat aspernatur? Optio
        saepe fugit
      </p>
      <Modal button={{ label: "Abrir modal" }}>Contenido de modal</Modal>
    </>
  );
};
