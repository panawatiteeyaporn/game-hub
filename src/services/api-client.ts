import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6170051ec7e0452784a1c86a22b85079",
  },
});
