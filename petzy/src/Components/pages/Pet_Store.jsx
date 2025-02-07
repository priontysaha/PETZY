import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
//import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Premium Dog Food", price: "৳2000", image: "./dog_food.jpeg", description: "High-quality dog food for a healthy diet." },
  { id: 2, name: "Cat Litter Box", price: "৳350", image: "./cat_litter.jpeg", description: "Durable and easy-to-clean litter box." },
  { id: 3, name: "Pet Feeding Bowl", price: "৳150", image: "./pet_feeding_bowl.avif", description: "Stainless steel pet feeding bowl." },
  { id: 4, name: "Chew Toy", price: "$300", image: "./chew_toy.jpg", description: "Safe and fun chew toy for pets." },
  { id: 5, name: "Bird Feeder", price: "৳1000", image: "./bird_feeder.jpg", description: "Ideal feeder for birds with easy refill system." },
  { id: 6, name: "Hamster Cage", price: "৳4000", image: "./hamster_cage.jpg", description: "Spacious and ventilated cage for hamsters." },
  { id: 7, name: "Fish Tank", price: "৳2000", image: "./fish_tank.webp", description: "Stylish and durable fish tank." },
  { id: 8, name: "Rabbit Hutch", price: "৳3500", image: "./rabbit_hutch.jpg", description: "Secure and spacious hutch for rabbits." },
  { id: 9, name: "Dog Leash", price: "৳550", image: "./dog_leash.webp", description: "Strong and durable leash for dogs." },
  { id: 10, name: "Cat Scratching Post", price: "৳2400", image: "./cat_scratching.webp", description: "Perfect scratching post for your cat." },
  { id: 11, name: "Pet Bed", price: "৳3500", image: "./pet_bed.webp", description: "Comfortable bed for your furry friend." },
  { id: 12, name: "Dog Shampoo", price: "৳599", image: "./dog_shampoo.jpg", description: "Gentle shampoo for your dog's coat." },
  { id: 13, name: "Cat Carrier", price: "৳1500", image: "./cat_carrier.jpg", description: "Convenient and safe carrier for cats." },
  { id: 14, name: "Reptile Heat Lamp", price: "৳1300", image: "./reptile_lamp.jpg", description: "Provides essential heat for reptiles." },
  { id: 15, name: "Parrot Cage", price: "৳1699", image: "./parrot_cage.jpg", description: "Spacious cage for parrots and other birds." }
];

const Pet_Store = () => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    navigate("/cart", { state: { product } });
  };
  return (
    <Container style={{ padding: "20px", fontFamily: "'Poppins', sans-serif", marginTop: "100px", marginBottom: "100px"}}>
      <Typography variant="h3" style={{ color: "cornflowerblue", fontWeight: "bold", textAlign: "center", marginBottom: "20px", }}>
        Welcome to Our Pet Store!
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardMedia component="img" height="200" image={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  {product.price}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    marginTop: "10px",
                    backgroundColor: " rgb(89, 143, 219)",
                    "&:hover": {
                      backgroundColor: "rgb(63, 136, 238)",
                    },
                  }}

                  onClick={() => handleAddToCart(product)}
                  
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Pet_Store;
