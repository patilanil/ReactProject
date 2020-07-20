import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'
import { FolderList } from './Folderlist'

export class CreateFolder extends React.Component {

    constructor() {

        super()
        this.state = {
            show: false,
            folders: [],
            folder_name: ""
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
                folder_name: e.target.value
            })
        }

        this.setFolders = () =>{
            this.setState({
                folders: this.state.folders
            })
        }

        this.addFolder = this.addFolder.bind(this);
    }

    addFolder = () => {
        this.setState({
            show: false
        })

        this.setState({
            folders: [...this.state.folders, { name: this.state.folder_name, child_folders: [] }]
        })
    }


    render() {
        return (
            <div> 
                <FolderList  handleShow = {this.handleShow} folders={this.state.folders}  action={this.setFolders}></FolderList>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    {/* <Modal.Header closeButton>
                        <Modal.Title>New Folder</Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                {/* <Form.Label>Folder Name</Form.Label> */}
                                <Form.Control type="text" maxLength="30" onChange={this.handleChange} placeholder="Enter folder name" />
                            </Form.Group>
                            {/* <Button variant="secondary" onClick={this.handleClose}>
                                Cancel
                            </Button> */}
                            <Button  style={{width: "100%"}} variant="primary" onClick={this.addFolder} className="float-right">
                                Create Folder
                            </Button>
                            <span style={{ "font-size": "15px", padding: "20px"}}> Folder name should be less than 30 characters</span>
                            {/* <Button variant="primary" type="submit"> Submit </Button> */}
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
        }
}
export default CreateFolder;


