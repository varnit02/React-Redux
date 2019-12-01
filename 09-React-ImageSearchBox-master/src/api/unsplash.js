import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 78d6493b1e7afad8311c263dacf8944837f5698ef1f07228e633107b1b1d771c"
  }
});
