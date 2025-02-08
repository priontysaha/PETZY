import React, { useState } from "react";
import { Container, Typography, Grid, Card, CardContent, Button, TextField, MenuItem, Box, Avatar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const paymentMethods = ["Cash on Delivery (COD)", "Bkash", "Rocket", "Nagad"];

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    paymentMethod: "",
  });

  const product = location.state?.product;

  if (!product) {
    return <Typography variant="h5">No product selected. Please go back and add a product to the cart.</Typography>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderConfirmation = () => {
    alert("Order confirmed! Thank you for your purchase.");
    navigate("/home");
  };

  return (
    <Container style={{ marginBottom: "10px", fontFamily: "'Poppins', sans-serif", marginTop: "100px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box display="flex" justifyContent="center" marginBottom="30px">
            <Avatar
              src="/Cart.webp"
              alt="Cart Image"
              style={{
                width: "150px",
                height: "150px",
                border: "4px solid rgba(63, 136, 238, 0.8)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Box>

          <Card style={{ borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <CardContent>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Your Cart
              </Typography>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom style={{ marginBottom: "10px" }}>
                {product.description}
              </Typography>
              <Typography variant="h6" color="primary" style={{ marginBottom: "20px" }}>
                Price: {product.price}
              </Typography>
              <Box display="flex" alignItems="center" marginBottom="10px">
                <Typography variant="body1" style={{ marginRight: "10px" }}>
                  Quantity:
                </Typography>
                <TextField
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  inputProps={{ min: 1 }}
                  size="small"
                  style={{ width: "80px" }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card style={{ borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Customer Details
              </Typography>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
                style={{ marginBottom: "15px" }}
              />
              <TextField
                label="Phone Number"
                fullWidth
                margin="normal"
                name="phone"
                value={customerInfo.phone}
                onChange={handleInputChange}
                style={{ marginBottom: "15px" }}
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                name="email"
                value={customerInfo.email}
                onChange={handleInputChange}
                style={{ marginBottom: "15px" }}
              />
              <TextField
                label="Address"
                fullWidth
                margin="normal"
                name="address"
                value={customerInfo.address}
                onChange={handleInputChange}
                style={{ marginBottom: "15px" }}
              />
              <TextField
                select
                label="Payment Method"
                fullWidth
                margin="normal"
                name="paymentMethod"
                value={customerInfo.paymentMethod}
                onChange={handleInputChange}
                style={{ marginBottom: "15px" }}
              >
                {paymentMethods.map((method, index) => (
                  <MenuItem key={index} value={method}>
                    {method}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                variant="contained"
                fullWidth
                style={{
                  marginTop: "20px",
                  backgroundColor: "rgb(63, 136, 238)",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={handleOrderConfirmation}
              >
                Confirm Order
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <footer className="text-center text-muted mt-5 pb-4">© 2025 Petzy - Your Path to Pet Adoption</footer>
    </Container>
  );
};

export default Cart;