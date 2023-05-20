import React, { Component } from "react";
import axios from "axios";
export default class EditStudent extends Component {

    constructor(props){
        super(props);
        this.state={
            id:"",
            name:"",
            email:""
        }
    }

    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://localhost:3000/students/${id}`)
        .then(res=>{
            this.setState({
                id:res.data.id,
                name:res.data.name,
                email:res.data.email
            })
        })
    }

    onNameChange=(e)=>{
        this.setState({name:e.target.value})
       }
       onEmailChange=(e)=>{
        this.setState({email:e.target.value})
       }
       handleSubmit=(e)=>{
        const student={id:this.state.id,
                name:this.state.name,
                email:this.state.email
            }
        axios.put("http://localhost:3000/students/"+this.props.match.params.id,student)
        // this.setState({students:this.state.students.push(student)})
        this.props.history.push("/student-list")   
    }
  render() {
    return (
      <div>
        <p>React Edit Student Component!</p>
        <form>
        <div className="form-group">
            <label for="id">ID:</label>
            <input type="text" disabled className="form-control" value={this.state.id} id="id" onChange={this.onIdChange}/>
        </div>
        <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" className="form-control" value={this.state.name} id="name" onChange={this.onNameChange}/>
        </div>
        <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" value={this.state.email}id="email" onChange={this.onEmailChange}/> 
        </div>
        <button type="submit" className="btn btn-primary" onClick={()=>this.handleSubmit()}>Update</button>
    </form>

      </div>
    );
  }
}   