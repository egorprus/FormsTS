import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import "./style.css";
import defaultIcon from "../../../../assets/upload.svg";
import successIcon from "../../../../assets/success.svg";
import deleteFileIcon from "../../../../assets/delete.svg";
import { FieldLabel } from "../FieldLabel/FieldLabel";

interface InputFileProp {
  label: string;
  name: string;
  handleChange: (urlImg: string | ArrayBuffer, name: string) => void;
}

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const InputFile = ({ label, name, handleChange }: InputFileProp) => {
  const [fileUpload, setFileUpload] = useState<File | null>();

  useEffect(() => {
    if (fileUpload) {
      let isCancel = false;

      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const result = e.target?.result;
        if (result && !isCancel) {
          handleChange(result, name);
        }
      };
      fileReader.readAsDataURL(fileUpload);

      return () => {
        isCancel = true;
        if (fileReader && fileReader.readyState === 1) {
          fileReader.abort();
        }
      };
    }
  }, [fileUpload]);

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files;
    const fileOne = (file || [])[0];
    if (!fileOne.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFileUpload(fileOne);
  };

  const handleDeleteFile = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setFileUpload(null);
  };

  return (
    <div className="field field-container">
			<FieldLabel name={name} label={label} require={true} />
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
                {fileUpload.name}
              </span>
              <button
                className="delete-file"
                onClick={(e) => handleDeleteFile(e)}
              >
                <img src={deleteFileIcon} alt="delete file" />
              </button>
            </div>
          ) : (
            <div className="input-file__empty">
              <p className="input-file__text">Выберите или перетащите файл</p>
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

export default InputFile;
