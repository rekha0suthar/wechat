import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const navigateTo = useNavigate();

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log(image, name);
    toast.success('Detailed saved successfully!');
    navigateTo('/dashboard');
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()} className="dropzone-wrapper">
              <input {...getInputProps()} />
              <div className="image-wrapper">
                {image ? (
                  <img src={image} alt="Uploaded" className="uploaded-image" />
                ) : (
                  <span>ADD PROFILE PHOTO</span>
                )}
              </div>
            </div>
          </section>
        )}
      </Dropzone>
      <input
        type="text"
        placeholder="Enter your name"
        style={{ marginTop: '20px' }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default Profile;
