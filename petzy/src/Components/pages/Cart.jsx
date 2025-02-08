import React, { useState } from "react";
import { Container, Typography, Grid, Card, CardContent, Button, TextField, MenuItem, Box } from "@mui/material";
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
    <Container style={{marginBottom: "50px", fontFamily: "'Poppins', sans-serif", marginTop: "100px"}}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Your Cart
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">{product.name}</Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>{product.description}</Typography>
              <Typography variant="h6" color="primary">Price: {product.price}</Typography>
              <Box display="flex" alignItems="center" marginTop="10px">
                <Typography>Quantity:</Typography>
                <TextField
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  inputProps={{ min: 1 }}
                  size="small"
                  style={{ marginLeft: "10px", width: "80px" }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Customer Details</Typography>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
              />
              <TextField
                label="Phone Number"
                fullWidth
                margin="normal"
                name="phone"
                value={customerInfo.phone}
                onChange={handleInputChange}
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                name="email"
                value={customerInfo.email}
                onChange={handleInputChange}
              />
              <TextField
                label="Address"
                fullWidth
                margin="normal"
                name="address"
                value={customerInfo.address}
                onChange={handleInputChange}
              />
              <TextField
                select
                label="Payment Method"
                fullWidth
                margin="normal"
                name="paymentMethod"
                value={customerInfo.paymentMethod}
                onChange={handleInputChange}
              >
                {paymentMethods.map((method, index) => (
                  <MenuItem key={index} value={method}>{method}</MenuItem>
                ))}
              </TextField>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "10px", backgroundColor: "rgb(63, 136, 238)" }}
                onClick={handleOrderConfirmation}
              >
                Confirm Order
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;