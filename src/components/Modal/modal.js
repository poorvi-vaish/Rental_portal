import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import info from "../InfoCard/MOCK_DATA (4).json";
import { useParams } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Details = () => {
  const {id} = useParams();
  console.log(id)
  const apartment = info.find(a => a.id === parseInt(id))

  return (
    <div>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
         Apartment Name: {apartment?.apartment_name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         Total Rooms: {apartment?.rooms}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         Rooms available: {apartment?.rooms - apartment?.tenants.length}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         Tenants Details: {apartment?.tenants.map(tenant => (
           <div>
            Name: {tenant.name} <br />
            Contact No: {tenant.contact} <br />
            Email: {tenant.email} <br />
            <hr />
           </div>
         ))}
        </Typography>
      </Box>
    </div>
  );
};

export default Details;
