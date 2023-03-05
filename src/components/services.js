import axios from 'axios';

export const searchImages = async (name, page = 1) => {
   try{
      const { data } = await axios.get(`https://pixabay.com/api/?q=${name}&page=1&key=29362166-5d2238b188a86f65197883688&image_type=photo&orientation=horizontal&per_page=${page}`);
   return data.hits;
   }catch(error) {
      console.log(error)
}
};


