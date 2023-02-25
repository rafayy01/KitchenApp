import { React, useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { preRoundContext } from "../../Contexts/PreRound";
import axios from "axios";
import { Link } from "react-router-dom";
import "./frame2.css";
const PreRound = () => {
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  const {
    preRoundData,
    setPreRoundData,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useContext(preRoundContext);
  console.log("Pre Round Data", preRoundData);
  console.log("Start Date", startDate);
  console.log("End Date", endDate);
  const header = { "Content-Type": "application/json" };
  const getPreRoundData = async () => {
    await axios
      .post(
        "http://localhost:8001/api/rounds/getprerounddata",
        { startDate: startDate, endDate: endDate },
        header
      )
      .then((res) => {
        console.log("Data from Api", res.data);
        setPreRoundData(res.data);
      })
      .catch((err) => console.log(err.message));
    //   const value = localStorage.getItem("roundId");
    //   if (value == null) {
    //     localStorage.setItem("roundId", 1);
    //   } else {
    //     var totalRound = parseInt(localStorage.getItem("roundId")) + 1;
    //     localStorage.setItem("roundId", totalRound.toString());
    //   }
  };
  console.log("Pre Round Data", preRoundData);

  return (
    <div className="CookingRound">
      <Row>
        <Col className="startDate">
          <h6>Enter Start Date</h6>

          <input
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
            style={{ width: "42%", marginLeft: "12px", height: "32px" }}
          />
        </Col>
        <Col className="endDate">
          <h6>Enter End Date</h6>

          <input
            type="date"
            min={startDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ width: "42%", marginLeft: "12px", height: "32px" }}
          />
        </Col>
      </Row>
      <Row className="submit">
        <div>
          <Link to="/rounds">
            <Button
              class="btn btn-secondary btn-sm"
              onClick={() => getPreRoundData()}
            >
              Submit
            </Button>
          </Link>
        </div>
      </Row>
    </div>
  );
};

export default PreRound;
