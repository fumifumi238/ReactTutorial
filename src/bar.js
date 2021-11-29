import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class NameForm extends React.Component {
constructor(props){
  super(props);
  this.state = {value: ""};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

}
  handleChange(event) {
    console.log(event.target.value)
    this.setState({value: event.target.value});
  }

  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
}

  render(){
return(
  <form onSubmit={this.handleSubmit}>
    <lavel>Name:
 <input type="text" value={this.state.value} onChange={this.handleChange} />
    </lavel>
    <input type="submit" value="Submit"/>
    </form>
);}
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
