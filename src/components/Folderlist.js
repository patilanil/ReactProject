import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

import DeleteIcon from '@material-ui/icons/Delete';

export class FolderList extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            selectedfolder: "",
            childfolder: "",
            show: false,
            index: -1
        }

        this.handleShow = () => {
            this.setState({
                show: true
            })
        }

        this.handleClose = () => {
            this.setState({
                show: false
            })
        }

        this.handleChange = (e) => {
            this.setState({
                childfolder: e.target.value
            })
        }

        this.onFolderSElection = this.onFolderSElection.bind(this);
        this.addChildFolder = this.addChildFolder.bind(this);
    }

    onFolderSElection = (selectedfolder) => {
        const index = this.props.folders.map(eachItem => eachItem.name).indexOf(selectedfolder.name);

        this.setState({
            selectedfolder: selectedfolder.name,
            index: index
        })
    }

    addChildFolder = () => {

        this.props.folders[this.state.index].child_folders = [...this.props.folders[this.state.index].child_folders, { name: this.state.childfolder }];
        this.handleClose();
    }



    render() {
        let { selectedfolder } = this.state;
        const renderChildFolder = () => {
            if (selectedfolder) {
                return <div style={{ display: "flex", "flex-direction": "row" }}>
                    <div style={{ display: "flex", "flex-direction": "row" }}>
                        <div style={{ "margin-right": "10px" }}
                            key={this.props.folders[this.state.index].name}>
                            { 'Inside' + ' ' + this.props.folders[this.state.index].name }
                            <Button variant="primary">
                                <FolderOpenIcon> </FolderOpenIcon>
                            </Button>
                        </div>
                    </div>

                    <div style={{
                        border: "2px dotted",
                        padding: "10px",
                        width: "80px",
                        display: "flex",
                        "justify-content": "center",
                        "border-radius": "12px",
                        cursor: "pointer",
                        "margin-left": "10px"
                    }} onClick={() => this.handleShow()}>
                        <AddOutlinedIcon> </AddOutlinedIcon>
                    </div>
                </div>
            }
        }

        return (

            <div>
                <div style={{ display: "flex", "flex-direction": "row", "margin-bottom": "20px" }}>

                    <div style={{ display: "flex", "flex-direction": "row" }}>
                        {this.props.folders.map((each_folder) => {
                            return <div style={{ "margin-right": "10px" }}
                                onClick={() => this.onFolderSElection(each_folder)} key={each_folder.name}>
                                {each_folder.name}
                                <Button variant="primary">
                                    <FolderOpenIcon> </FolderOpenIcon>
                                </Button>
                            </div>
                        })}
                    </div>


                    <div style={{
                        border: "2px dotted",
                        padding: "10px",
                        width: "80px",
                        display: "flex",
                        "justify-content": "center",
                        "border-radius": "12px",
                        cursor: "pointer",
                        "margin-left": "10px"
                    }} onClick={() => this.props.handleShow()}>
                        <AddOutlinedIcon> </AddOutlinedIcon>
                    </div>
                </div>

                {renderChildFolder()}


                <Modal show={this.state.show} onHide={this.handleClose}>
                    {/* <Modal.Header closeButton>
                        <Modal.Title>{this.state.selectedfolder}</Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>{ 'Inside' + ' ' + this.state.selectedfolder}</Form.Label>
                                <Form.Control type="text" onChange={this.handleChange} placeholder="Enter folder name" />
                            </Form.Group>
                            <Button variant="primary" onClick={() => this.addChildFolder('anil')} className="float-right">
                                Create
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}


