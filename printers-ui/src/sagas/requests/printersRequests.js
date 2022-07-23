import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJ1c2VybmFtZSI6IkNodWpvd3lIdWJpMiIsInJvbGUiOiJVc2VyIn0sImlhdCI6MTY1ODU5NDIzNCwiZXhwIjoxNjU4NTk3ODM0fQ.uWna9rfwNzR8vEnkpb2mCIIlw9unOpSQni-5bpWrExU";

export const getAllPrinters = async ({
  currentPage,
  pageSize,
  searchQuery,
}) => {
  let response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/printers?page=${currentPage}&pageSize=${pageSize}&query=${searchQuery}`
  );

  if (response.status > 299) {
    throw new Error("Could not fetch printers");
  }

  return response.data;
};

export const getPrinterById = async ({ id }) => {
  let response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/printers/${id}`,
    null
  );

  if (response.status > 299) {
    throw new Error("Could not fetch printers");
  }

  return response.data;
};

export const createPrinter = async ({ printer }) => {
  let response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/printers`,
    printer
  );

  if (response.status > 299) {
    throw new Error("Could not create a printer");
  }

  return response.data;
};

export const updatePrinter = async ({ printer }) => {
  let response = await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/api/printers`,
    printer
  );

  if (response.status > 299) {
    throw new Error("Could not update a printer");
  }

  return response.data;
};

export const deletePrinter = async ({ printerId }) => {
  let response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/api/printers/${printerId}`,
    null
  );

  if (response.status > 299) {
    throw new Error("Could not delete a printer");
  }

  return response.data;
};
