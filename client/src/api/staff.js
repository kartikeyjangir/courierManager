import api from "./index";
import axios from "axios";

export const insertParcelDetails = async (data) =>
  axios.post(api + "/staff/addparcel", data);

export const getAllCourier = async () =>
  axios.get(api + "/staff/getallcourier");

export const updateStatus = async (data) =>
  axios.patch(api + "/staff/updatestatus", data);

export const getFilteredCourier = async (status) =>
  axios.get(api + "/staff/" + status);

export const searchParcel = async (ref) =>
  axios.post(api + "/staff/searchParcel", ref);
