import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';

class HomePage extends React.Component {
    
    constructor(props) {
       super(props);
       
       this.state = {
           value:'',
           initialval:'',
           apivalue:'',
           errorvalue:'',
           apiurl:'',
           copyUrl: 'Copy Link' ,
           show:false,
           setShow:false,
           copied: false,
         }
         //const [books, setBooks] = React.useState(null);
         this.handleChange = this.handleChange.bind(this);
         this.submitData = this.submitData.bind(this);
         this.postData = this.postData.bind(this);
         this.handleClose = this.handleClose.bind(this);
         this.handleShow = this.handleShow.bind(this);
         this.setreturnData = this.setreturnData.bind(this);
    };
    componentDidMount() {
      
  }  
  getInitialState() { 
    return {
        initialval: this.props.name
    };
  }
  handleShow(){
    this.setState({
        show:true,
        setShow: true
    });
  }
  handleClose(){
    this.setState({
        show:false,
        setShow: false
    });
  }
  handleChange(event){
    this.setState({initialval: event.target.value});
  }
  submitData(){
    
    if(this.state.initialval != ''){
        this.setState({
            apivalue: '',
            errorvalue:''
        });
        this.postData(this.state.initialval);
    }
    else{
        this.setState({
            apivalue: '',
            errorvalue: 'Submitted Data is Blank',
            show:true,
            setShow: true
        });
    }
  }
  stripEndQuotes(s){
	var t=s.length;
	if (s.charAt(0)=='"') s=s.substring(1,t--);
	if (s.charAt(--t)=='"') s=s.substring(0,t);
	return s;
}
setreturnData(val){
    this.setState({
        value:val
    });
}
  postData(value){
    var val={"data":value};
    val = JSON.stringify(val);
    const apiURL = "http://localhost:3005/submitData";
    const headers = {
        'Content-Type': 'application/json'
      }

    const fetchData = async () => {
        const responsedata = await axios.post(apiURL, val, { headers: headers})
          .then(function (response) {
            console.log(response);
            var a = {'result':'success','data':response.data};
            return a;
          })
          .catch(error => {
            console.log(error);            
            var a = {'result':'error','data':error};
            return a;
        });
      console.log(responsedata);
      
      if(responsedata.result == 'success'){
        this.setState({
            apivalue: JSON.stringify(responsedata.data),
            errorvalue: '',
            apiurl:'http://localhost:3005/submitData'
        });
        }
        else{
            this.setState({
                errorvalue: JSON.stringify(responsedata.data),
                apivalue:'',
                apiurl:''
            });
        }
        this.setState({
            show:true,
            setShow: true
        });
    
    }
    fetchData();
  }
  render(){
    return (
        <div>
            <h1>TSV CONTENT</h1>
        <textarea id="noter-text-area" onChange={this.handleChange} />
        <input type="submit" value="Save" onClick={this.submitData} />

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Modal.Title>Results</Modal.Title>
        <textarea className="modal-text-area"  value={this.state.apivalue} onChange={this.handleChange} />
        <hr></hr>
        <Modal.Title>Errors</Modal.Title>
        <textarea className="modal-text-area" value={this.state.errorvalue} onChange={this.handleChange} />
        </Modal.Body>
        <Modal.Footer>
            <input type="text" value={this.state.apiurl}  ref={(textarea) => this.textArea = textarea}/>
          <button variant="secondary" onClick={this.handleClose}>
            Close
          </button>
          <CopyToClipboard text={this.state.apiurl}
          onCopy={() => this.setState({copied: true},alert('Link Copied'))}>
          <button>Copy Link</button>
        </CopyToClipboard>
 
        </Modal.Footer>
      </Modal>
        </div>

    );
  }
}
 export default HomePage;