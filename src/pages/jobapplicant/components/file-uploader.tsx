import { Paperclip } from "lucide-react";
import  { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void;
};

const FileUploader = ({ fieldChange}: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState<string | null>(null);


  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      console.log(acceptedFiles)
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [file]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
     "application/pdf":["pdf"],
     
      
    },
  });

  return (
    <div
      {...getRootProps()}
      className="outline-none  border-0 border-b-[2px] border-slate-400 rounded-none pl-3 text-left font-normal"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
         <div className="h-[100px] flex justify-center items-center m-4 p-4 rounded-lg border-2 border-dashed border-slate-400">
        <p className="h-44 flex items-center justify-center text-slate-600 font-semibold">
          Drop the file here ...
        </p>
        </div>
      ) : fileUrl ? (
        <div className=" w-full cursor-pointer">
          <p className="text-gray-500">
            {/* {fileUrl.length > 30 ? `${fileUrl.slice(0,30)}...` : fileUrl} */}
            {file[0].name.length > 30 ? `${file[0].name.slice(0,24)}...`: file[0].name}
          </p>
        </div>
      ) : (
         <div className="w-full flex justify-end ">
          <Paperclip className=" w-6 h-full m-1 text-end text-slate-500 "/>
        </div>
      )}
      {/* <div className="bg-slate-100 absolute right-0 top-0 px-1 h-full cursor-pointer">
      <Paperclip className=" w-6 h-full ml-1 text-end "/>
      </div> */}
    </div>
  );
};

export default FileUploader;
