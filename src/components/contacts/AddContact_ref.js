import React, { Component } from 'react'

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }

    console.log(contact);
  };

  static defaultProps = {
    name: 'John Smith',
    email: 'smith@mail.com',
    phone: '123 456 789'
  }

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                className="form-control form-control-control-lg" 
                placeholder="Enter Name" 
                defaultValue={name}
                ref={this.nameInput}
              />
              <br></br>
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                className="form-control form-control-control-lg" 
                placeholder="Enter Email" 
                defaultValue={email}
                ref={this.emailInput}
              />
              <br></br>
              <label htmlFor="phone">Phone Number:</label>
              <input 
                type="text" 
                className="form-control form-control-control-lg" 
                placeholder="Enter Phone Number" 
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <br></br>
            <input type="submit" value="Add Contact" className="btn btn-success btn-block" />
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;