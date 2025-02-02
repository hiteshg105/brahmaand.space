import React from "react";
import "../styles/CreateAccount.css";

import { useEffect, useState } from "react";

import axios from "axios"

import { Button, Row, Col, Form } from "react-bootstrap";
import SimpleBanner from "../components/SimpleBanner";

import banner5 from "../assets/images/banner5.jpeg";

import regularFolderIcon from "../assets/icons/folder-icon.png";

import { useNavigate } from "react-router-dom";
import useAnalyticsEventTracker from "../useAnalyticsEventTracker";


const domain = process.env.REACT_APP_API_DOMAIN_NAME



export default function CreateAccount() {
  const [authority_letter_document, setAuthorityLetterDocument] =
    useState(null);
  const [w9_document, setW9Document] = useState(null);
  const [insurance_document, setInsuranceDocument] = useState(null);
  const [noa_document, setNOADocument] = useState(null);

  const [contact_name, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company_name, setCompanyName] = useState("");

  const [current_plan, setCurrentPlan] = useState("BASICO");

  const navigate = useNavigate();


  const body = JSON.stringify({
    contact_name,
    email,
    phone,
    company_name,
    current_plan,
  })


  const onSubmitForm = async(e) => {
    e.preventDefault();
    if(!authority_letter_document || !w9_document || !insurance_document){
      alert("Please upload at least the Authority Letter, the W9, and the insurance")
    }
    else{
      const result = await createNewAccount(body);

      if (result == "Success"){
        await uploadFiles(email, authority_letter_document, w9_document, insurance_document, noa_document);
        navigate("/");
      }
    }
    
  }
  const gaEventTracker = useAnalyticsEventTracker('CreateAccount')
  return (
    <div>
      <SimpleBanner
        banner_img={banner5}
        banner_img_description="Create Account Truck Cargo"
      />

      <div className="spacer" />

      <h2 className="text-center create-account-custom-header2">
        <span className="create-account-din-alternate-bold-font">
          Comenzar es muy fácil
        </span>
      </h2>

      <div className="create-account-folder-icon-div">
        <img src={regularFolderIcon} alt="Folder Icon Truck Cargo" />
      </div>

      <h4 className="text-center create-account-custom-title">
        Enviar los documentos
      </h4>

      <div className="create-account-paragraph-div">
        <p className="create-account-paragraph-p">
          Para crear una cuenta con nuevos brokers y mantener su información
          actualizada es necesario brindarnos una serie de documentos requeridos
          para crear su cuenta y que podamos negociar por usted sus cargas. Los
          documentos son guardados con absoluta seguridad por nosotros y solo
          serán utilizados para uso exclusivo de su compañía.
        </p>
      </div>

      <h4 className="text-center create-account-custom-title">
        Complete esta forma y recibirá un agreement para comenzar a recibir
        cargas
      </h4>

      <div className="create-account-form-div">
        <Row>
          <div key={`inline-radio`} className="mb-3 radio-div" onChange={(e) => setCurrentPlan(e.target.value)} >
          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-1`} className="create-account-radio" value={"BASICO"} defaultChecked={true} />
            <span className="create-account-label-radio-span">4% Plan Básico</span>
          </label>



          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-2`} className="create-account-radio" value={"VIP"} />
            <span className="create-account-label-radio-span">6% Plan VIP</span>
          </label>

          </div>
        </Row>
        <Form className="create-account-form" onSubmit={(e)=>{onSubmitForm(e)}} >
          <Row className="create-account-row">
            <Col xs={12} sm={12} md={6} lg={6} className="create-account-col">
              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicCompanyName"
              >
                <Form.Control
                  type="text"
                  className="create-account-form-control"
                  placeholder="NOMBRE DE LA COMPAÑIA"
                  value = {company_name}
                  onChange = {(e) => setCompanyName(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicContactName"
              >
                <Form.Control
                  type="text"
                  className="create-account-form-control"
                  placeholder="NOMBRE DEL CONTACTO"
                  value = {contact_name}
                  onChange = {(e) => setContactName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicContactPhone"
              >
                <Form.Control
                  type="text"
                  className="create-account-form-control"
                  placeholder="TELEFONO"
                  value = {phone}
                  onChange = {(e) => setPhone(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicContactEmail"
              >
                <Form.Control
                  type="email"
                  className="create-account-form-control"
                  placeholder="EMAIL"
                  value = {email}
                  onChange = {(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} className="create-account-col">
              <div className="create-account-upload-file-div" style={{backgroundColor: (authority_letter_document?"#f89422":"transparent")  }}>
                <p className="create-account-upload-file-p" style={{color: (authority_letter_document?"white":"#9d9e9f")  }}>AUTHORITY LETTER</p>
                <label
                  for="uploadAuthorizationLetterButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadAuthorizationLetterButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) =>
                    setAuthorityLetterDocument(e.target.files[0])
                  }
                />
              </div>

              <div className="spacer-15" />

              <div className="create-account-upload-file-div" style={{backgroundColor: (w9_document?"#f89422":"transparent")  }}>
                <p className="create-account-upload-file-p" style={{color: (w9_document?"white":"#9d9e9f")  }}>W9</p>
                <label
                  for="uploadW9Button"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadW9Button"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setW9Document(e.target.files[0])}
                />
              </div>

              <div className="spacer-15" />

              <div className="create-account-upload-file-div" style={{backgroundColor: (insurance_document?"#f89422":"transparent")  }}>
                <p className="create-account-upload-file-p" style={{color: (insurance_document?"white":"#9d9e9f")  }}>INSURANCE</p>
                <label
                  for="uploadInsuranceButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadInsuranceButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setInsuranceDocument(e.target.files[0])}
                />
              </div>

              <div className="spacer-15" />

              <div className="create-account-upload-file-div" style={{backgroundColor: (noa_document?"#f89422":"transparent")  }}>
                <p className="create-account-upload-file-p" style={{color: (noa_document?"white":"#9d9e9f")  }}>
                  NOA (En caso de tener factoring)
                </p>
                <label
                  for="uploadNOAButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadNOAButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setNOADocument(e.target.files[0])}
                />
              </div>
            </Col>
          </Row>

          <div className="create-account-button-div">
            <Button
              variant="primary"
              className="create-account-button"
              type="submit"
              onClick={()=>gaEventTracker('COMENZAR YA!')}
            >
              COMENZAR YA!
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}


const createNewAccount = async(body) => {

  const config = {
    headers:{
      'Content-Type': 'application/json'
    }
  }

  const url = `${domain}/Login/signup`;

  const axios_result = await axios.post(url, body, config).then(async(res) => {
    const result = await res.data
    console.log(result);
    return "Success";
  }).catch((error) => {
    return "Error";
  })

  return axios_result;

}



const uploadFiles = async (email, authority_letter_document, w9_document, insurance_document, noa_document) => {

  const config = {
    headers: {
    "Content-Type": "multipart/form-data"
  }
  }


  const formData = new FormData();

      formData.append('documents', authority_letter_document, `authority_letter-${email}.pdf`);
      formData.append('documents', w9_document, `w9-${email}.pdf`);
      formData.append('documents', insurance_document, `insurance-${email}.pdf`);

      if(noa_document){
            formData.append('documents', noa_document, `noa-${email}.pdf`);
      }



  const url = `${domain}/UserAccountInfo/upload-documents/${email}`;

  await axios.post(url, formData, config).then(async(res) => {
    const result = await res.data
  }).catch((error) => {
    console.log("Error")
  })
}
