import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import * as S from "../styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Cast() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState();

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("image", image);
    console.log(formData);

    if (name === "" || description === "" || type === "" || image === "") {
      alert("Please fill all required fields...!");
    } else {
      axios
        .post("http://localhost:3000/api/cast", formData)
        .then((res) => {
          console.log(res.data);
          window.location.reload(false);
        })
        .catch((err) => {
          console.lof(err);
        });
    }
  };

  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <header>
          <TopBar />
        </header>
        {/* <Efficiency /> */}
        <div style={{ margin: 20 }}>
          <div style={{ fontSize: 25, fontWidth: 700, paddingLeft: 90 }}>
            Cast
          </div>
          <div
            style={{
              maxWidth: "100%",
              marginLeft: 100,
              marginRight: 100,
              marginTop: 30,
            }}
          >
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </S.Main>
    </S.Container>
  );
}

export default Cast;
