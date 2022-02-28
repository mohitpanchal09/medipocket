import React from 'react'
import './Upload.css';
import {Link} from "react-router-dom";
function Upload() {
    
  return (
    <div className='upload'>
        <div className="upload__container">
            <div className='items__content'>
      <h className="uploadfile">Upload File </h>
      <input type="file" />
      
      </div>
      <button className='upload__button'> Upload</button>
      <p>OR</p>
      <Link to='/camera'>
      <button className='camera__button'>Open Camera</button>
      </Link>
      </div>
    </div>
  )
}

export default Upload
