import React, { Component } from "react";
import { StudentConsumer } from "../context";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h3>All Student Details</h3>
        <StudentConsumer>
          {(value) => {
            return (
              <Table striped bordered hover size="sm">
                <tbody>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>year</th>
                    <th>Department</th>
                    <th>fees</th>
                    <th>address</th>
                    <th colSpan="2">Actions</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        value={value.id}
                        onChange={(e) => {
                          value.updateValue(e, "id");
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.name}
                        onChange={(e) => {
                          value.updateValue(e, "name");
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.year}
                        onChange={(e) => {
                          value.updateValue(e, "year");
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.dept}
                        onChange={(e) => {
                          value.updateValue(e, "dept");
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.fees}
                        onChange={(e) => {
                          value.updateValue(e, "fees");
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.address}
                        onChange={(e) => {
                          value.updateValue(e, "address");
                        }}
                      />
                    </td>
                    <td colSpan="2">
                      <Button
                        size="sm"
                        onClick={() => {
                          value.onSave(value.id);
                        }}
                      >
                        {value.id ? "save" : "Add new student"}
                      </Button>
                    </td>
                  </tr>
                  {value.allData.map((stud) => {
                    return (
                      <tr key={stud.id}>
                        <td>{stud.id}</td>
                        <td>{stud.name}</td>
                        <td>{stud.year}</td>
                        <td>{stud.dept}</td>
                        <td>{stud.fees}</td>
                        <td>{stud.address}</td>
                        <td>
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => {
                              value.onEdit(stud.id);
                            }}
                          >
                            Edit
                          </Button>
                        </td>
                        <td>
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={() => {
                              value.onDelete(stud.id);
                            }}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            );
          }}
        </StudentConsumer>
      </div>
    );
  }
}
