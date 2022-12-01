import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import users from "./Users.js";

function Home(){
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.length > 0
                            ? 
                            users.map((usr)=>{
                                return(
                                    <tr>
                                        <td>
                                            {usr.name}
                                        </td>
                                        <td>
                                            {usr.age}
                                        </td>
                                        <td>
                                            <button onClick={()=>alert(usr.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            : 
                            "No data available"
                        }  
                    </tbody>
                </Table>

            </div>
        </Fragment>
    )
}

export default Home;
