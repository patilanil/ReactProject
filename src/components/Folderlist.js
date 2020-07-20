import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'

export class FolderList extends React.Component {


    constructor(props) {

        super(props)

        this.state = {
            selectedfolder: "",
            childfolder: "",
            show: false
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
        this.setState({
            selectedfolder: selectedfolder.name
        })
        this.handleShow();
    }

    addChildFolder = () => {

        const index = this.props.folders.map(eachItem => eachItem.name).indexOf(this.state.selectedfolder);
        this.props.folders[index].child_folders = [...this.props.folders[index].child_folders , { name: this.state.childfolder}];
        console.log(this.props.folders);
        // this.props.setFolders(this.props.folders);
        // this.props.action();
        this.handleClose();
    }

    render() {
        return (

            <div>
                <ul>
                    {this.props.folders.map((each_folder) => {
                        return <li className="p-10" onClick={ () => this.onFolderSElection(each_folder) } key={each_folder.name}>{each_folder.name}
                            <ul>
                                {each_folder.child_folders.map((childfolder) => {
                                    return <li className="p-10" key={childfolder.name}>{childfolder.name} </li>
                                })}
                            </ul>
                        </li>
                    })}
                </ul>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Folder</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Folder Name</Form.Label>
                                <Form.Control type="text" onChange={this.handleChange} placeholder="Enter folder name" />
                            </Form.Group>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick= { () => this.addChildFolder('anil')} className="float-right">
                                Create
                            </Button>
                            {/* <Button variant="primary" type="submit"> Submit </Button> */}
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}


