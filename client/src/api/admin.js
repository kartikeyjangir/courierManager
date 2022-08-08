import api from "./index";
import axios from "axios";

//add branch
export const addbranch = async (data) =>
  axios.post(api + "/admin/addbranch", data);

//getbranch
export const getBranch = async () => axios.get(api + "/admin/managebranch");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>STAFF>>>>>>>>>>>>>>>>>>
//single staff
export const getSingleStaff = async (id) => {
  const data = { uid: id };
  return axios.post(api + "/admin/getsinglestaff", data);
};

//update staff
export const updatestaff = async (data) =>
  axios.patch(api + "/admin/updatestaff", data);

// get staffs
export const getstaff = async () => axios.get(api + "/admin/getstaff");

//add staff
export const addstaff = (data) => axios.post(api + "/admin/addstaff", data);
