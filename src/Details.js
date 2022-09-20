import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
    //maxWidth: "500px"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  form: {
    fontfamily: "Georgia",
    padding: "20px",
    width: "100%",
    maxWidth: "500px",
    background: "#f4f7f8"
  },
  area: {
    width: "100%",
    background: "rgba(255,255,255,.1)",
    border: "none",
    borderRadius: "4px",
    fontSize: "15px",
    outline: "0",
    padding: "10px",
    margin: "1em auto",
    boxSizing: "border-box",
    backgroundColor: "#e8eeef",
    color: "#8a97a0"
  },
  submit: {
    color: "#FFF",
    margin: "1em auto",
    background: "#1abc9c",
    fontSize: "18px",
    textAlign: "center",
    fontStyle: "normal",
    width: "100%",
    border: "1px solid #16a085",
    borderWidth: "1px 1px 3px",
    marginBottom: "10px",
    padding: "15px"
  }
}));

const Details = ({ userData }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <Button color="success" variant="contained"
        onClick={() => {
          setOpen(!open);
        }}
      >
        View Profile
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        className={classes.modal}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <h3>Profile</h3>
          <input
            className={classes.area}
            name="Username"
            placeholder={userData.name}
            {...register("Username")}
          />
          
          <input
            className={classes.area}
            name="Email"
            placeholder={userData.email}
            type="Email"
            {...register("Email")}
          />
          <input
            className={classes.area}
            name="Phone"
            placeholder={userData.phone}
            type="Phone"
            {...register("Phone")}
          />
          <input
            className={classes.area}
            name="Website"
            placeholder={userData.website}
            {...register("Website")}
          />
          <input
            className={classes.area}
            name="Address"
            placeholder={userData.address.street+" "+userData.address.city+" "+userData.address.zipcode}
            {...register("Address")}
           />
          <input
            className={classes.area}
            name="Company"
            placeholder={userData.company.name+" "+userData.company.catchPhrase}
            {...register("Company")}
          />
          
          <input className={classes.submit} type="submit" value="Submit" />
         
        </form>
        
      </Modal>
    </div>
  );
}
export default Details;
