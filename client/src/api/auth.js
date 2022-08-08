import api from "./index";
import axios from "axios";

export const getauth = async (data) => axios.post(api + "/authme", data);
