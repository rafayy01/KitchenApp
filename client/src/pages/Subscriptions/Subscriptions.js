import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Clients.css";
import ReUseAbleTable from "../../components/CategoryTable/Table";
import { TableData } from "./TableData";
import AlertModal from "../../components/AlertModal/AlertModal";
import { toastmessage } from "../../components/ToastMessage/toast";
import { getClientSubscriptions, deleteClient } from "../../utils/Apis";

function Subscriptions() {
  const [list, setList] = useState([]);
  const [popup, setPopup] = useState(false);
  const [id, setId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [targetProtien, setTargetProtien] = useState("");
  const [meals, setMeals] = useState([]);

  const Navigate = useNavigate();

  const addSubscriptions = () => {
    Navigate("/clients/add");
  };

  const HandleDelete = (id) => {
    setId(id);
    setPopup(true);
  };

 

  const GetAllSubscriptions = async () => {
    await axios.get(getClientSubscriptions).then((res) => {
      setList(res.data);
    });
  };

  useEffect(() => {
    GetAllSubscriptions();
  }, []);

  return (
    <Row
      className={`max-width explore-section ${
        list.length < 4 ? "explore-background" : ""
      }`}
    >
      <Col>
        <Row className="text-center mt-2 align-items-center">
          <Col md={2}>
            &nbsp;
            <Button
              className="btn btn-info text-white "
              onClick={ManageCategory}
            >
              {" "}
              Clients Category
            </Button>
            <Button
              className="btn btn-info text-white mt-2"
              onClick={ManageMeasurement}
            >
              {" "}
              Clients Measure
            </Button>
          </Col>
          <Col md={8}>
            <h1 className="text-center text-danger font-weight-bold meal-heading">
              Clients List
            </h1>
          </Col>
          <Col md={2}>
            <Button className="btn btn-info ml-2 text-white" onClick={addMeal}>
              + Add New Clients
            </Button>
          </Col>
        </Row>

        <div className="explore-grid mt-5">
          <ReUseAbleTable
            TableData={TableData}
            TableMaplist={["clientId", "clientName", "phoneNumber"]}
            GetTableList={list}
            onChangeValue={HandleChangeValue}
          />
        </div>
      </Col>
      <AlertModal popup={popup} setPopup={HandleClosePopup} />
    </Row>
  );
}

export default Clients;
