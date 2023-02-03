import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./CategoryList.css";
const CategoryList = ({ list,updateList,deleteItem }) => {
  return (
    <Row>
      <Col md={1}></Col>
      <Col className="bg-white rounded">
        <Row>
          <h2 className="text-center bg-success text-white w-100">CategoryList</h2>
        </Row>
        <div className="mainList">
          {list.length>0 &&list.map((user) => {
            return (
              <Row className="align-items-center p-2" key={user.id}>
                <Col md={8}>{user.categoryName}</Col>
                <Col md={8}>{user.categoryDesc}</Col>
                <Col md={2}>
                  <Button className="btn btn-info" onClick={()=>{updateList(user.id)}}>Edit</Button>
                </Col>
                <Col md={2}>
                  <button className="btn btn-danger" onClick={()=>{deleteItem(user.id)}}>Delete</button>
                </Col>
              </Row>
            );
          })}
          {list.length===0 && 
          <h2 className="text-center  w-100">No Data</h2>
        }
        </div>
      </Col>
      <Col md={1}></Col>
    </Row>
  );
};

export default UserList;
