import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField, useTheme } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { tokens } from "../../theme";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter a valid first name")
    .required("First name is required"),

  lastName: yup
    .string("Enter a valid last name")
    .required("Last name is required"),

  email: yup
    .string("Enter a email address")
    .email("Enter a valid email address")
    .required("Email address is required"),

  phone: yup
    .string("Enter a phone number")
    .matches(
      /^[+]?[(]?\d{3}[)]?[-\s.]?\d{3}[-\s.]?\d{4,6}$/,
      "Please write a valid phone number"
    )
    .required("Phone number is required"),

  address: yup.string("Need a valid address").required("Address is required"),

  city: yup.string("Need a valid city").required("City is required"),

  zipCode: yup.string("Need a valid Zip Code").required("Zip Code is required"),
});

const ProfileForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <Box p={2}>
      <PageHeader
        title="Add Contact Form"
        subTitle="Add new contact information for future use."
      />
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "grid",
            gap: "20px",
            [theme.breakpoints.up("md")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
            ["& .Mui-focused"]: {
              color: `${colors.grey[100]} !important`,
            },
            ["& .Mui-focused .MuiOutlinedInput-notchedOutline"]: {
              borderColor: `${colors.grey[100]} !important`,
            },
          }}
        >
          <TextField
            fullWidth
            name="firstName"
            label="First Name"
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.firstName && !!formik.errors.firstName}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            fullWidth
            name="lastName"
            label="Last Name"
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.lastName && !!formik.errors.lastName}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            fullWidth
            name="email"
            label="Email Address"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            name="phone"
            label="Phone Number"
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.phone && !!formik.errors.phone}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            fullWidth
            name="address"
            label="Address"
            value={formik.values.address}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.address && !!formik.errors.address}
            helperText={formik.touched.address && formik.errors.address}
            sx={{ [theme.breakpoints.up("md")]: { gridColumn: "span 2" } }}
          />
          <TextField
            fullWidth
            name="city"
            label="City"
            value={formik.values.city}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.city && !!formik.errors.city}
            helperText={formik.touched.city && formik.errors.city}
          />
          <TextField
            fullWidth
            name="zipCode"
            label="Zip Code"
            value={formik.values.zipCode}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.zipCode && !!formik.errors.zipCode}
            helperText={formik.touched.zipCode && formik.errors.zipCode}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: colors.greenAccent[600],
            float: "right",
            mt: "30px",
            ["&:hover"]: { backgroundColor: colors.greenAccent[700] },
          }}
        >
          Add New Contact
        </Button>
      </form>
    </Box>
  );
};

export default ProfileForm;
