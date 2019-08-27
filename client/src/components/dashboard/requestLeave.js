//user login
import React from 'react';
import { Header } from "../header/header";
import { Alert, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { inject, observer } from "mobx-react";

const superagent = require('superagent');

var Logout = inject("Store")(
    observer(
        class Logout extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    date: new Date(),
                    isAuthenticated: false
                };

            }

            componentDidMount() {
                const url = "https://suguna.herokuapp.com/api/list";
                superagent.get(url).end((err, res) => {
                    // Do something
                    if (err) {
                        throw err;

                    }
                    console.log(JSON.parse(res.body));
                    window.location = 'https://suguna.herokuapp.com/'
                });

                this.setState({
                    isAuthenticated: true
                });
            }

            handleSubmit = (e) => {
                e.preventDefault();

            };

            render() {

                return ( <
                    div >
                    <
                    Header name = { this.props.name }
                    /> <
                    Container >
                    <
                    Row >
                    <
                    Col > & nbsp; < /Col> < /
                    Row > <
                    Alert variant = "secondary" >
                    <
                    Row >
                    <
                    Col xs lg = "12" > Please enter valid credentials! < /Col> < /
                    Row > <
                    /Alert>

                    <
                    Row >
                    <
                    Col lg = "4" > < /Col> <
                    Col lg = "4" >
                    <
                    Form onSubmit = { this.handleSubmit } >
                    <
                    Form.Group controlId = "formBasicEmail" >
                    <
                    Form.Label > Username < /Form.Label> <
                    Form.Control type = "text"
                    placeholder = "Enter name"
                    required / >
                    <
                    /Form.Group>

                    <
                    Form.Group controlId = "formBasicPassword" >
                    <
                    Form.Label > Password < /Form.Label> <
                    Form.Control type = "password"
                    placeholder = "Password"
                    required / >
                    <
                    /Form.Group> <
                    Button variant = "primary"
                    type = "submit" >
                    Submit <
                    /Button> < /
                    Form > <
                    /Col> <
                    Col lg = "4" > < /Col> < /
                    Row > <
                    /Container> < /
                    div >
                );

            }
        }
    )
)

export default Logout;
e.log("getUser: ", getUser, empid);
let getUserDetails = _.find(data[userRole], ['empid', empid]);
if (userRole == "employee") {

    // console.log("getUserDetails: ", getUserDetails.availableLeave);
    let empLeaves = getUserDetails.appliedLeaves;
    this.setState({
        appliedLeaves: (this.state.appliedLeaves).concat(empLeaves),
        availableLeaves: getUserDetails.availableLeave
    });

}
this.setState({
    role: userRole,
    userDetails: getUserDetails,
    empid: getUser.empid,
    empName: _empName,
    department: _department
});
Store.userDetails = getUserDetails;
}
});
}

render() {

return ( <
div >


<
Header name = "test"
logout = "logout" / >
<
Container >
<
Row >
<
Col > & nbsp; < /Col> <
/Row> <
Alert variant = "secondary" >
<
Row >
<
Col xs lg = "10" > Available number of leave < /Col> <
Col xs lg = "2" > { this.state.availableLeaves } < /Col> <
/Row> <
/Alert>  {
    this.state.limitExceeds ? < Alert variant = "danger" >
        Leaves not available in your basket!Please contact your manager. <
        /Alert> : ''} <
        Alert >
        <
        Row >
        <
        Col xs lg = "10"
    className = "heading2" >
        <
        h4 > Apply
    for leave < /h4> <
        /Col> <
        Col xs lg = "2" >
        <
        Link to = "/dashboard" >
        <
        Button > Dashboard < /Button> <
        /Link> <
        /Col> <
        /Row> <
        /Alert> <
        Row >
        <
        Col lg = { 1 } > & nbsp; < /Col> <
    Col lg = { 4 } >
        <
        Form onSubmit = { this.handleSubmit } >
        <
        Form.Group controlId = "dateOn" >
        <
        Form.Label > Date < /Form.Label> <
        Form.Control type = "date"
    placeholder = "Choose a date"
    min = { this.state.minDate }
    required autoFocus value = { this.state.dateOn }
    onChange = { this.handleChange }
    /> <
    /Form.Group>

    <
    Form.Group controlId = "reason" >
        <
        Form.Label > Reason < /Form.Label> <
        Form.Control type = "text"
    placeholder = "Reason"
    required value = { this.state.reason }
    onChange = { this.handleChange }
    /> <
    /Form.Group> <
    Button variant = "primary"
    type = "submit" >
        Submit <
        /Button> <
        /Form> <
        /Col> <
        Col lg = { 7 } > & nbsp; < /Col> <
    /Row> <
    /Container> <
    /div>

);

}
}
)
)
export default Dashboard;