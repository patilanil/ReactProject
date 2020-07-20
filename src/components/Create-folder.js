import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'
import { FolderList } from './Folderlist'
import AddIcon from '@material-ui/icons/Add';

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
                <Button variant="primary" onClick={this.handleShow}>
                    <AddIcon> </AddIcon>
          </Button>
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
                            <Button variant="primary" onClick={this.addFolder} className="float-right">
                                Create
                            </Button>
                            {/* <Button variant="primary" type="submit"> Submit </Button> */}
                        </Form>
                    </Modal.Body>
                </Modal>
                <FolderList folders={this.state.folders}  action={this.setFolders}></FolderList>
            </div>
        );
        }
}

// function CreateFolder() {

//     const [show, setShow] = useState(false);
//     const [folders, setFolder] = useState([]);
//     const [folder_name, setInput] = useState("");

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const addFolder = () => {
//         setShow(false);
//         setFolder([...folders, { name: folder_name, child_folders: [] }]);
//     }

//     const handleChange = (e) => {
//         setInput(e.target.value);
//     }

//     return (
//         <>
//             <Button variant="primary" onClick={handleShow}>
//                 FOLDER
//         </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>New Folder</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label>Folder Name</Form.Label>
//                             <Form.Control type="text" onChange={handleChange} placeholder="Enter folder name" />
//                         </Form.Group>
//                         <Button variant="secondary" onClick={handleClose}>
//                             Cancel
//             </Button>
//                         <Button variant="primary" onClick={addFolder} className="float-right">
//                             Create
//             </Button>
//                         {/* <Button variant="primary" type="submit"> Submit </Button> */}
//                     </Form>
//                 </Modal.Body>
//             </Modal>

//             <FolderList folders={folders}></FolderList>
//         </>
//     );
// }

export default CreateFolder;


