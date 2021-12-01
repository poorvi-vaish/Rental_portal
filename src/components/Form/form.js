import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router";
import info from "../InfoCard/MOCK_DATA (4).json";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    width: "50%",
    margin: "auto",
  },
});

const emptyApartment = {
  id: 0,
  apartment_name: "",
  address: "",
  contact: "",
  rent: "",
  tenants: [],
  rooms: 0,
};

const Form = () => {
  const { id } = useParams();
  console.log(id);
  const apartment = info.find((a) => a.id === parseInt(id));
  const classes = useStyles();
  const [apartmentData, setApartmentData] = useState(
    apartment || emptyApartment
  );

  const [editTenant, setEditTenant] = useState({});
  const updateApartmentData = (field, value) => {
    setApartmentData({
      ...apartmentData,
      [field]: value,
    });
  };

  const updateTenantData = (index, field, value) => {
    setApartmentData((a) => {
      const copy = JSON.parse(JSON.stringify(a));
      copy.tenants[index][field] = value;
      return copy;
    });
  };
  const onSubmit = () => {
    alert("Tenant added successfully");
  };
  const handleTenantEdit = (index, value) => {
    setEditTenant({
      ...editTenant,
      [index]: value,
    });
  };

  const deleteTenant = (index) => {
    setApartmentData((a) => {
      const copy = JSON.parse(JSON.stringify(a));
      delete copy.tenants[index];
      return copy;
    });
  };
  return (
    <div
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      className={classes.root}
    >
      <TextField
        id="filled-basic"
        label="Apartment Name"
        variant="filled"
        value={apartmentData.apartment_name}
        disabled
        onChange={(e) => updateApartmentData("apartment_name", e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Rent"
        variant="filled"
        value={apartmentData.rent}
        disabled
        onChange={(e) => updateApartmentData("rent", e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Address"
        variant="filled"
        value={apartmentData.address}
        disabled
        onChange={(e) => updateApartmentData("address", e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Contact"
        variant="filled"
        value={apartmentData.contact}
        disabled
        onChange={(e) => updateApartmentData("contact", e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Room"
        variant="filled"
        value={apartmentData.rooms}
        disabled
        onChange={(e) => updateApartmentData("rooms", e.target.value)}
      />
      <Button variant="contained" onClick={onSubmit}>
        Add
      </Button>
      {apartmentData.tenants.map((tenant, index) => {
        return (
          <Box className={classes.root}>
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              value={tenant?.name}
              disabled={!Boolean(editTenant[index])}
              onChange={(e) => updateTenantData(index, "name", e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="Contact"
              variant="filled"
              value={tenant?.contact}
              disabled={!Boolean(editTenant[index])}
              onChange={(e) =>
                updateTenantData(index, "contact", e.target.value)
              }
            />
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              value={tenant?.email}
              disabled={!Boolean(editTenant[index])}
              onChange={(e) => updateTenantData(index, "email", e.target.value)}
            />
            <div>
              <Button
                variant="contained"
                onClick={() => {
                  handleTenantEdit(index, true);
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleTenantEdit(index, false);
                }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  deleteTenant(index);
                }}
              >
                Delete
              </Button>
            </div>
          </Box>
        );
      })}
    </div>
  );
};

export default Form;
