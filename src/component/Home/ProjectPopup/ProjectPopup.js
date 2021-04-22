import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './ProjectPopup.css'

 

Modal.setAppElement('#root')


const ProjectPopup = ({modalIsOpen, closeModal, projectOn, date}) => {
     
    const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data =>{
        data.service= projectOn;
        data.data = date;
        data.created = new Date();


        fetch("http://localhost:8080/projectsForm",{
          method : 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(data)
        })

          .then(res => res.json())
          .then(success => {
            if(success){
              closeModal();
              alert('form data submited')
            }
          })

   }
  

  const customStyles = {
    content: {
      top: '5%',
      left: '0',
      right: '0',
      bottom: '0',
      margin: 'auto',
      width: '300px',
      height:'440px',
      border:'0px',
      boxShadow: '0px 7px 14px 0px #11303d58',
      borderRadius:'11px'
     },
  };
  
    return (
        <div className="modal-box bg-danger">
         <Modal
          isOpen={modalIsOpen}

          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          style={customStyles}
        >

          <h3 className="text-info text-center">{projectOn}</h3>
          <form onSubmit={handleSubmit(onSubmit)} >

      <input required className="form-control inp" type="text" name="name"  placeholder="Your Name" {...register("name")} />
      
       <input required className="form-control inp" type="tel" name="phone" placeholder="Phone Number" {...register("phone number", { required: true })} />
      
       <input required className="form-control inp" type="email" name="email" placeholder="Your Email" {...register("email", { required: true })} />
      
       <input required className="form-control inp" name="data" type="date" {...register("date", { required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}
      
      <input  type="submit" className="btn btn-success inp"/>
    </form>
        </Modal>         
        </div>
    );
};

export default ProjectPopup;