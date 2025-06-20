import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function AddCart({ newCard }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [form, setForm] = useState({
    name: "",
    price: "",
    sale: "",
    quantity: "",
    img: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      ...form,
      price: +form.price,
      sale: +form.sale,
      quantity: +form.quantity,
    };

    newCard(newItem);
    toggle();

    // Formani tozalash
    setForm({
      name: "",
      price: "",
      sale: "",
      quantity: "",
      img: "",
    });
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Yangi mahsulot qo'shish
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Mahsulot qoshish</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="name">Nomi</Label>
            <Input name="name" value={form.name} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="price">Narxi</Label>
            <Input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="sale">Sale</Label>
            <Input
              name="sale"
              type="number"
              value={form.sale}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="quantity">Soni</Label>
            <Input
              name="quantity"
              type="number"
              value={form.quantity}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="img">Rasm URL</Label>
            <Input name="img" value={form.img} onChange={handleChange} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAdd}>
            Mahsulotni qoshish
          </Button>
          <Button color="secondary" onClick={toggle}>
            Bekor qilish
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddCart;
