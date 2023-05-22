import axios from "axios";

const uploadImage = async (file) => {
    if(!file) return

    try {
        
        const formData = new FormData();
        // formData.append('upload_presset','curso_vue')
        formData.append('file', file )
        const url = 'http://localhost:3000/api/files/product';
        const {data} = await axios.post(url, formData)
        console.log(data);
        return data;

    } catch (error) {
        console.log('Error al cargar las imagenes revisar los logs');
        return null;
    }
}

export default uploadImage;