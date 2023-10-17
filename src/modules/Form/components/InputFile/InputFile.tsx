import { ChangeEvent, useState } from "react";
import "./style.css";
import defaultIcon from "../../../../assets/upload.svg";
import successIcon from "../../../../assets/success.svg";
import deleteFileIcon from "../../../../assets/delete.svg";

interface InputFileProp {
  label?: string;
  require?: boolean;
  classes?: string;
  name?: string;
}
export const InputFile = ({ label, require, name, classes }: InputFileProp) => {
  const [fileUpload, setFileUpload] = useState();

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target.files);
    // setFileUpload(e.target.files[0]);
  };

  const handleDeleteFile = () => {
    console.log("delete");
    // e.preventDefault();
    // setFileUpload(null);
  };

  return (
    <div className="field field-container">
      <div className="field__title">
          {label}
          {require && "*"}
      </div>
      <div className="field__input-wrapper">
        <input
          className="hidden"
          type="file"
          id={name}
          onChange={handleUploadFile}
        />
        <label className="input-file" htmlFor={name}>
          {fileUpload ? (
            <div className="input-file__upload">
              <img src={successIcon} alt="upload seccess" />
              <span className="file-name">
                {/* {fileUpload.name} */}
                file name
              </span>
              <button className="delete-file" onClick={handleDeleteFile}>
                <img src={deleteFileIcon} alt="delete file" />
              </button>
            </div>
          ) : (
            <div className="input-file__empty">
              <p className="input-file__text">
                Выберите или перетащите файл
              </p>
              <div className="upload-file">
                <img src={defaultIcon} alt="upload file" />
              </div>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};
