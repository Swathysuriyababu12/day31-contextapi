import React, { Component } from "react";
import { rowData } from "./teac";
const studentContext1 = React.createContext();
class StudentProvider1 extends Component {
  state = {
    allData: rowData,
    id: "",
    name: "",
    year: "",
    dept: "",
    fees: "",
    address: "",
    updateEdit: [],
  };

  getRecord = (id) => {
    const student = this.state.allData.find((stud) => stud.id === id);
    return student;
  };
  onEdit = (id) => {
    const temp = this.state.allData;
    const index = temp.indexOf(this.getRecord(id));
    const selectedStudent = temp[index];
    this.setState({
      id: selectedStudent["id"],
      name: selectedStudent["name"],
      year: selectedStudent["year"],
      dept: selectedStudent["dept"],
      fees: selectedStudent["fees"],
      address: selectedStudent["address"],
    });
  };
  updateValue = (e, test) => {
    if (test === "name") {
      this.state.name = e.target.value;
    }
    if (test === "year") {
      this.state.year = e.target.value;
    }
    if (test === "dept") {
      this.state.dept = e.target.value;
    }

    if (test === "fees") {
      this.state.fees = e.target.value;
    }
    if (test === "address") {
      this.state.address = e.target.value;
    }
    const tempArray = [
      this.state.id,
      this.state.name,
      this.state.year,
      this.state.dept,
      this.state.fees,
      this.state.address,
    ];
    this.setState({
      updateEdit: tempArray,
    });
  };
  onSave = (id) => {
    if (id !== "") {
      const savedRecord = this.state.allData;
      const index = savedRecord.indexOf(this.getRecord(id));
      const Record = savedRecord[index];
      Record["name"] = this.state.updateEdit[1];
      Record["year"] = this.state.updateEdit[2];
      Record["dept"] = this.state.updateEdit[3];
      Record["fees"] = this.state.updateEdit[4];
      Record["address"] = this.state.updateEdit[5];
      this.setState({
        allData: [...this.state.allData],
        id: "",
        name: "",
        year: "",
        dept: "",
        fees: "",
        address: "",
      });
    } else {
      const MaxId = Math.max(...this.state.allData.map((stud) => stud.id));
      const id = MaxId + 1;
      const newArr = [];
      newArr["id"] = id;
      newArr["name"] = this.state.updateEdit[1];
      newArr["year"] = this.state.updateEdit[2];
      newArr["dept"] = this.state.updateEdit[3];
      newArr["fees"] = this.state.updateEdit[4];
      newArr["address"] = this.state.updateEdit[5];
      this.setState({
        allData: [...this.state.allData, newArr],
        id: "",
        name: "",
        year: "",
        dept: "",
        fees: "",
        address: "",
      });
    }
  };
  onDelete = (id) => {
    const tempDel = this.state.allData.filter((stud) => stud.id !== id);
    this.setState({
      allData: tempDel,
    });
  };
  render() {
    //  console.log(this.state.allData);
    return (
      <div>
        <studentContext1.Provider
          value={{
            ...this.state,
            onEdit: this.onEdit,
            updateValue: this.updateValue,
            onSave: this.onSave,
            onDelete: this.onDelete,
          }}
        >
          {this.props.children}
        </studentContext1.Provider>
      </div>
    );
  }
}

const StudentConsumer1 = studentContext1.Consumer;
export { StudentProvider1, StudentConsumer1 };
