import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { toastmessage } from "../../../../components/ToastMessage/toast";
import "./ClientForm.css";
import Table from "react-bootstrap/Table";
import { AddClients,UpdateClient } from "../../../../utils/Apis";
const MealList = [
  {
    id: 1,
    clientId: "otto",
  },
  {
    id: 2,
    clientId: "kfc",
  },
];
function ClientForm(props) {
  const { addClient, client, editMeal } = props;
  const [clientId, setClientId] = useState();
  const [clientName, setClientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [id, setId] = useState("")

  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(clientId,clientName,phoneNumber)
    if (addClient) {
      const addClientObj = {
           clientId,
        clientName,
        phoneNumber
      };
      const header = { "Content-Type": "application/json" };
      await axios
        .post(AddClients, addClientObj, header)
        .then((res) => {
          toastmessage("New Client is Created!", "success");

          navigate("/clients");
        })
        .catch((err) => {
          toastmessage(err.response.data.error, "error");
        });
    } else {
      const addClientObj = {
        clientId,
        clientName,
        phoneNumber
      };
      console.log(addClientObj, "addClient");
      const header = { "Content-Type": "application/json" };
      await axios
        .patch(
          `${UpdateClient}/${id}`,
          addClientObj,
          header
        )
        .then((res) => {
          toastmessage("Client Record Updated Successfully!", "success");

          navigate("/clients");
        })
        .catch((err) => {
          toastmessage(err.response.data.error, "error");
        });
    }
  };
  useEffect(() => {
    if (editMeal) {
      setClientId(client.clientId);
      setClientName(client.clientName);
      setPhoneNumber(client.phoneNumber);
      setId(client._id);
    }
  }, [props.client]);

   return (
    <Row className="max-width explore-section">
      <Col>
        <Row className="well m-4">
          <h2 className="rounded w-100 ml-3">
            {addClient ? "Add Client Form" : "Edit Client Form"}
          </h2>

          <Col>
            <Form className="p-3 " onSubmit={HandleSubmit}>
              <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridMealName">
                  <Form.Label>Client Id</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Client Name"
                    value={clientId}
                    onChange={(e) => {
                      setClientId(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridMealDescription">
                <Form.Label>Client Description</Form.Label>
                <Form.Control
                  placeholder="Enter Client Name"
                  value={clientName}
                  onChange={(e) => {
                    setClientName(e.target.value);
                  }}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Phone Number(e.g:0313323)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Phone Name"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </Form.Group>
              
              </Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ClientForm;
