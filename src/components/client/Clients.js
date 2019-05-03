import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "4332232",
        firstname: "Kevin",
        lastName: "Lovey",
        email: "kevin@gmail.com",
        phone: "555-555-5555",
        balance: "30",
      },
      {
        id: "4334434",
        firstname: "Danny",
        lastName: "White",
        email: "dannyW@gmail.com",
        phone: "555-322-5555",
        balance: "45",
      },
      {
        id: "4122121",
        firstname: "Morgan",
        lastName: "Withney",
        email: "morgan@gmail.com",
        phone: "555-211-1121",
        balance: "132",
      },
    ];
    if (clients) {
      return (
        <div className="row">
          <div className="col-md-10">
            <h2>
              <i className="fas fa-users" /> Clients
            </h2>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstname} {client.lastName}
                  </td>
                  <td>{client.email} </td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default Clients;
