import {
  Container,
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Col,
} from 'reactstrap'
import '../componets/boxstyle.css' 
import { useState } from 'react';
import pudgy from '../assets/images/pudgy.png'
import puzzle from '../assets/images/puzzle.png'
import thinking from '../assets/images/thinking.png'
import hi from '../assets/images/hi.png'

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    comments: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Container fluid className='mt-5 rounded-4' style={{ backgroundColor: '#f5f5f5', maxWidth: '70%' }}>
        
      <Container className="d-flex align-items-center" style={{ justifyContent: 'start', padding: '2vh' }}>
  <Card className="d-flex boxstyle rounded-4 col-lg-6" style={{ alignItems: 'center', fontFamily: 'Arial', padding: '20px' }}>
    <CardBody>
      <CardTitle tag="h1" className="justify-content-center d-flex">
        Want an estimate on a project?
      </CardTitle>
      <hr />
      <CardText className="h3" style={{ width: '90%', alignItems: 'center', fontSize: '20px' }}>
        Need some help on a project? Or maybe need someone to start-and-finish a website or project? Send me a message and let's build!
      </CardText>
    </CardBody>
  </Card>
  <img src={thinking} alt="estimate" className="d-flex mx-auto" style={{ maxWidth: '100%', height: 'auto', width: '10vw', maxHeight: '20vh' }} />
</Container>

  <hr />

    <Container className="d-flex align-items-center mt-5" style={{ justifyContent: 'end', padding: '2vh' }}>
    <img src={puzzle} alt="estimate" className="d-flex mx-auto" style={{ maxWidth: '100%', height: 'auto', width: '10vw', maxHeight: '20vh' }} />
    <Card className="d-flex boxstyle rounded-4 col-lg-6" style={{ alignItems: 'center', fontFamily: 'Arial', padding: '20px' }}>
      <CardBody>
        <CardTitle tag="h1" className="justify-content-center d-flex">
          All-in-One
        </CardTitle>
        <hr />
        <CardText className="h3" style={{ width: '90%', alignItems: 'center', fontSize: '20px' }}>
          Need a nice package for an all-in-one design and developed website? Contact me below!
        </CardText>
      </CardBody>
    </Card>
  </Container>

  <hr />
  <Container className="d-flex align-items-center mt-5" style={{ justifyContent: 'start', padding: '2vh' }}>
  <Card className="d-flex boxstyle rounded-4 col-lg-6" style={{ alignItems: 'center', fontFamily: 'Arial', padding: '20px' }}>
    <CardBody>
      <CardTitle tag="h1" className="justify-content-center d-flex">
        Come say hi!
      </CardTitle>
      <hr />
      <CardText className="h3" style={{ width: '90%', alignItems: 'center', fontSize: '20px' }}>
        Wanna just say hi? Leave your info, and we can talk code, production, new tech, and more!
      </CardText>
    </CardBody>
  </Card>
  <img src={hi} alt="estimate" className="d-flex mx-auto" style={{ maxWidth: '100%', height: 'auto', width: '10vw', maxHeight: '20vh' }} />
</Container>

  <hr />
  <Button color="secondary" className='rounded-4' onClick={toggle} style={{ marginTop: '5vh', marginBottom: '5vh', marginLeft: '1vw', fontSize: 20, padding: 9 }}>
    Send message
  </Button>
</Container>

      
      <img src={pudgy} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, marginTop: '100px', opacity: '60%' }} alt="pudgypenguin" width='45%'/>
      <Modal className="rounded-2" isOpen={modal} toggle={toggle} centered style={{ maxWidth: '80vw', width: '60%' }}>
        <ModalHeader toggle={toggle}><h1>Let's get in touch!</h1></ModalHeader>
        <ModalBody>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="firstName"><h3>First Name <span className="text-danger">*</span></h3></Label>
              <Input type="text" name="firstName" id="firstName" required value={formData.firstName} onChange={handleChange}style={{ fontSize: '18px' }} />
            </FormGroup>
            <FormGroup>
              <Label for="lastName"><h3>Last Name <span className="text-danger">*</span></h3></Label>
              <Input type="text" name="lastName" id="lastName" required value={formData.lastName} onChange={handleChange} style={{ fontSize: '18px' }}/>
            </FormGroup>
            <FormGroup>
              <Label for="companyName"><h3>Company Name</h3></Label>
              <Input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange}style={{ fontSize: '18px' }} />
            </FormGroup>
            <FormGroup>
              <Label for="email"><h3>Email <span className="text-danger">*</span></h3></Label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} style={{ fontSize: '18px' }}/>
            </FormGroup>
            <FormGroup>
              <Label for="phone"><h3>Phone Number <span className="text-danger">*</span></h3></Label>
              <Input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}  style={{ fontSize: '18px' }} />
            </FormGroup>
            <FormGroup>
              <Label for="comments"><h3>Comments</h3></Label>
              <Input type="textarea" name="comments" id="comments" value={formData.comments} onChange={handleChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" className='rounded-4' style={{fontSize: 18, padding: 6 }} onClick={handleSubmit}>Submit</Button>{' '}
          <Button color="secondary" className='rounded-4' style={{fontSize: 18, padding: 6 }} onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}



export default ContactPage;