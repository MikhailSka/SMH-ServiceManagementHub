import React, { useState } from 'react';
import { useAppSelector } from 'store/hooks';
import { useAppDispatch } from 'store/hooks';
import { RootState } from 'store/store';
import { uploadImage } from 'store/actions/userActions/uploadImage';
import imageCompression from 'browser-image-compression';


export default function Settings() {
  const dispatch = useAppDispatch();
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const { userData } = useAppSelector((state: RootState) => state.user);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      try {
        const originalImage = event.target.files[0];
        const compressedImage = await imageCompression(originalImage, { 
          maxSizeMB: 0.032
        });
        await dispatch(uploadImage(userData.id, compressedImage));
        setSelectedImage(compressedImage);
      } catch (error) {
        console.error('Image compression error:', error);
      }
    } else {
      setSelectedImage(null);
    }
  };

  return (
    <div>
      <h1>Upload and Display Image using React Hooks</h1>

      {selectedImage && (
  <div>
    <img alt="not found" width={"250px"} src={userData.image} />
    <br />
    <button onClick={() => setSelectedImage(null)}>Remove</button>
  </div>
)}

      <br />
      <br />

      <input type="file" id="image" name="image" onChange={handleImageUpload} />
    </div>
  );
}


