import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { handeladd } from '../redux/action';
import StarRating from './StarRating';

const Add = () => {
    const [newone, setNewone] = useState("");
const [name, setName] = useState("")
const [image, setImage] = useState("");
const [rating, setRating] = useState(1)
const [type, setType] = useState("");
const dispatch = useDispatch()
//handel rating
let handelRating=(x)=>setRating(x)
//handelsubmit
let handelsubmit=(e)=>{
    e.preventDefault()
    let newActiontoAdd={
        id:Math.random(),
        name,image,type,rating
    }
    dispatch(handeladd(newActiontoAdd))
setNewone("");
setName("");
setRating(1);
setImage("");
setType("");
closeModal()
}


    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      const [modalIsOpen, setIsOpen] = React.useState(false);

      function openModal() {
        setIsOpen(true);
      }
    
      
    
      function closeModal() {
        setIsOpen(false);
      }
    return (
        <div>
            <button style={{backgroundColor:"rgb(100, 15, 67)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}} onClick={openModal}>ADD Movie</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form onSubmit={handelsubmit} >
          <label style={{color:"white"}} >Movie Name</label>
          <input type="text" placeholder="write movie name" value={name} onChange={e=>setName(e.target.value)}/>
          <label style={{color:"white"}} >Movie Image</label>
          <input type="url" placeholder="url text" value={image} onChange={e=>setImage(e.target.value)}/>
          <StarRating rating={rating} handelrating={handelRating}/>
          <label style={{color:"white"}} >Movie Type</label>
          <input type="text" placeholder="write movie type" value={type} onChange={e=>setType(e.target.value)}/>
          <div>
          <button style={{backgroundColor:"rgb(15, 62, 119)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}}   type="submit">Save</button><button style={{backgroundColor:"rgb(15, 62, 119)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}} onClick={()=>closeModal()}>Cancel</button>
          </div>
      </form>
      </Modal>
        </div>
    )
}

export default Add
