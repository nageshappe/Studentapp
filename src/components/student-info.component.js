import React from "react";
import axios from "axios";

export default class StudentInfo extends React.Component{
  constructor(props)
  {
    super(props)
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
    render(){
        return(
            // <h1> React Student Info Component</h1>
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Id: </label>
                            <div> { this.state.id }</div>
                        </div>
                        <div className = "row">
                            <label> Student Name: </label>
                            <div> { this.state.name }</div>
                        </div>
                        <div className = "row">
                            <label> Student Email ID: </label>
                            <div> { this.state.email }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}