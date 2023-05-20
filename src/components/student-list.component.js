import React, { Component } from "react";
import { student } from "../student";
import axios from 'axios'
export default class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
        this.deleteStudent = this.deleteStudent.bind(this)
    }

    infoStudent = (id) => {
        this.props.history.push(`/student-info/${id}`)
    }

    editStudent = (id) => {
        console.log(id)
        this.props.history.push(`/edit-student/${id}`)
    }
    deleteStudent(id) {
        axios.delete(`http://localhost:3001/students/${id}`)
        this.showItems()
        // this.setState({students:this.state.students.filter(s=>s.id!==id)})
    }
    showItems() {
        axios.get("http://localhost:3001/students")
            .then(data => {
                console.log(data.data)
                this.setState({ students: data.data })
            })
    }
    componentDidMount() {

        this.showItems()
    }
    render() {

        return (
            <div>
                <p><h1>Student List Component!</h1></p>
                <table className="table table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th colSpan={3}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.students.map(stu =>
                            <tr key={stu.id}>
                                <td>{stu.id}</td>
                                <td>{stu.name}</td>
                                <td>{stu.email}</td>
                                <td><button className="btn btn-danger" onClick={() => this.deleteStudent(stu.id)}>Delete</button></td>
                                <td><button className="btn btn-primary" onClick={() => this.editStudent(stu.id)}>Edit</button></td>
                                <td><button className="btn btn-info" onClick={() => this.infoStudent(stu.id)}>Info</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        );
    }
}