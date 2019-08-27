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
erRole = getUser.role;
let empid = getUser.empid;
// console.log("getUser: ", userRole, empid);
let getUserDetails = _.find(data[userRole], ['empid', empid]);
if (userRole === "employee") {

    // console.log("getUserDetails: ", getUserDetails.appliedLeaves);
    let empLeaves = getUserDetails.appliedLeaves;
    this.setState({
        appliedLeaves: (this.state.appliedLeaves).concat(empLeaves)
    });

} else {
    // let empLeaves = getUserDetails.appliedLeaves;
    // this.setState({
    //     requestedLeaves: (this.state.requestedLeaves).concat(empLeaves)
    // });
    let _groupDepartment = _.groupBy(data.manager, 'department');
    let _arr = _groupDepartment[getUser.department];
    console.log("getUser: ", _arr);
    this.setState({
        requestedLeaves: (this.state.requestedLeaves).concat(_arr)
    });
}
this.setState({
    role: userRole,
    userDetails: getUserDetails,
    empid: getUser.empid
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
            /Row> {
                this.state.role === "employee" ? < Alert variant = "secondary" >
                    <
                    Row >
                    <
                    Col xs lg = "10" > Available number of leave < /Col> <
                    Col xs lg = "2" > { this.state.userDetails.availableLeave } < /Col> <
                    /Row> <
                    /Alert> : ''}

                <
                Alert >
                    <
                    Row >
                    <
                    Col xs lg = "10"
                className = "heading2" > {
                        this.state.role === "employee" ?
                        <
                        h4 > Leave Application List < /h4> : <
                        h4 > Leave Application Request List < /h4>
                    } <
                    /Col> <
                    Col xs lg = "2" > {
                        this.state.role === "employee" ?
                        <
                        Badge variant = "primary" >
                        <
                        a href = "/apply" > Apply
                        for leave < /a> <
                        /Badge> : ''} <
                        /Col> <
                        /Row> <
                        /Alert> <
                        Row >
                        <
                        Col >
                        <
                        Table striped bordered hover >
                        <
                        thead > {
                            this.state.role === "employee" ?
                            <
                            tr >
                            <
                            th > Date < /th> <
                            th > Reason < /th> <
                            th > Status < /th> <
                            th > Action < /th> <
                            /tr> : <tr> <
                            th > User < /th> <
                            th > Date < /th> <
                            th > Reason < /th> <
                            th > Status < /th> <
                            th > Action < /th> <
                            /tr>
                        }

                        <
                        /thead> <
                        tbody > {
                            // console.log("State: ", this.state.appliedLeaves)
                            this.state.role === "employee" ?
                            this.state.appliedLeaves.map((list, index) => {
                                    return <tr key = { index } >
                                        <
                                        td > { dateFormat(list.appliedOn, "mediumDate") } < /td> <
                                        td > { list.appliedFor } < /td> <
                                        td > < Badge variant = {
                                            list.status === "Applied" ?
                                            "primary" :
                                                list.status === "Approved" ?
                                                "success" :
                                                list.status === "Canceled" ?
                                                "warning" :
                                                "danger"
                                        } > { list.status } <
                                        /Badge></td >
                                        <
                                        td > {
                                            list.status === "Applied" ? < Badge variant = "danger" >
                                            <
                                            button value = { list.id }
                                            onClick = { this.handleCancel } > Cancel < /button> <
                                            /Badge> : ""}</td >
                                            <
                                            /tr>
                                        }): this.state.requestedLeaves.map((list, index) => {
                                        return <tr key = { index } >
                                            <
                                            td > { list.requestedBy } < /td> <
                                            td > { dateFormat(list.requestedOn, "mediumDate") } < /td> <
                                            td > { list.reason } < /td> <
                                            td > < Badge variant = {
                                                list.approvalStatus === "Approved" ?
                                                "success" :
                                                    list.approvalStatus === "Applied" ?
                                                    "primary" :
                                                    "danger"
                                            } > { list.approvalStatus !== "Applied" ? list.approvalStatus : '' } <
                                            /Badge></td >
                                            <
                                            td > {
                                                list.approvalStatus === "Applied" ? < div > < Badge variant = "success" >
                                                <
                                                button value = '1'
                                                id = { list.id + '-' + list.requestedBy }
                                                data = { list.requestedBy }
                                                onClick = { this.handleAction } > Approve < /button> <
                                                /Badge> <Badge variant="danger"> <
                                                button value = '2'
                                                id = { list.id + '-' + list.requestedBy }
                                                data = { list.requestedBy }
                                                onClick = { this.handleAction } > Reject < /button> </Badge > < /div> : ""} <
                                                /td> <
                                                /tr>
                                            })
                                } <
                                /tbody> <
                                /Table> <
                                /Col> <
                                /Row> <
                                /Container> <
                                /div>

                            );

                        }
                    }
            )
        )
        export default Dashboard;