import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

async function fetchPhoto(searchPhoto, currentPage) {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        client_id: "ThO6c8hGjxaRpsBEJJnw-7S-7J9qgHoVmrZOCMmXcVM",
        query: searchPhoto,
        per_page: 9,
        page: currentPage,
      },
    });
    return response.data.results || [];
  } catch (error) {
    toast.error("Error! Please, reload page!");
    return [];
  }
}
export default fetchPhoto;
