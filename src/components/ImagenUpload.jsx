
import "antd/dist/antd.css";

import { Upload, message } from 'antd';

import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const props = {
  headers: {
    "Nomada": "OWRlMTBkNzItNWE3OC00YTk0LWFlNDAtZWJjZGQ4MzFhYTJl"
  },
  action: 'https://whois.nomada.cloud/upload',
  name: 'file',
  
};

  
export default function ImagenUpload({actores, setActores}) {
  
  return (
    <div style={{textAlign:'center' , padding:'3rem'}} >
      <h1>¿Quién es este actor? </h1>
      <>
        <Dragger {...props}
          onChange={(response) => {
            if (response.file.status !== 'uploading') {
              setActores(response.file.response.actorName)
            }
            if (response.file.status === 'done') {
              message.success(`${response.file.name} 
                               Imagen enviada con exito`);
                              
            } else if (response.file.status === 'error') {
              message.error(`${response.file.name} 
                             Error al enviar imagen.`);
            }
          }
        }
          
        >
             <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Hz click o arrastra una imagen</p>
    <p className="ant-upload-hint">
      Selecciona la foto de un actor famoso para conocer quién es y en qué peliculas ha salido
    </p>


        </Dragger>
      </>
    </div>
  );
}