import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const products = [
  { id: 1, name: "Premium Dog Food", price: "$20", image: "/images/dog_food.jpg", description: "High-quality dog food for a healthy diet." },
  { id: 2, name: "Cat Litter Box", price: "$25", image: "/images/cat_litter.jpg", description: "Durable and easy-to-clean litter box." },
  { id: 3, name: "Pet Feeding Bowl", price: "$10", image: "/images/feeding_bowl.jpg", description: "Stainless steel pet feeding bowl." },
  { id: 4, name: "Chew Toy", price: "$8", image: "/images/chew_toy.jpg", description: "Safe and fun chew toy for pets." },
  { id: 5, name: "Bird Feeder", price: "$15", image: "/images/bird_feeder.jpg", description: "Ideal feeder for birds with easy refill system." },
  { id: 6, name: "Hamster Cage", price: "$40", image: "/images/hamster_cage.jpg", description: "Spacious and ventilated cage for hamsters." },
  { id: 7, name: "Fish Tank", price: "$50", image: "/images/fish_tank.jpg", description: "Stylish and durable fish tank." },
  { id: 8, name: "Rabbit Hutch", price: "$60", image: "/images/rabbit_hutch.jpg", description: "Secure and spacious hutch for rabbits." },
  { id: 9, name: "Dog Leash", price: "$12", image: "/images/dog_leash.jpg", description: "Strong and durable leash for dogs." },
  { id: 10, name: "Cat Scratching Post", price: "$30", image: "/images/cat_scratching.jpg", description: "Perfect scratching post for your cat." },
  { id: 11, name: "Pet Bed", price: "$35", image: "/images/pet_bed.jpg", description: "Comfortable bed for your furry friend." },
  { id: 12, name: "Dog Shampoo", price: "$18", image: "/images/dog_shampoo.jpg", description: "Gentle shampoo for your dog's coat." },
  { id: 13, name: "Cat Carrier", price: "$45", image: "/images/cat_carrier.jpg", description: "Convenient and safe carrier for cats." },
  { id: 14, name: "Reptile Heat Lamp", price: "$22", image: "/images/reptile_lamp.jpg", description: "Provides essential heat for reptiles." },
  { id: 15, name: "Parrot Cage", price: "$75", image: "/images/parrot_cage.jpg", description: "Spacious cage for parrots and other birds." }
];

const Pet_Store = () => {
  return (
    <Container style={{ padding: "20px", fontFamily: "'Poppins', sans-serif" }}>
      <Typography variant="h3" style={{ color: "rgb(60, 52, 216)", fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>
        Welcome to Our Pet Store!
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardMedia component="img" height="200" image={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
                <Typography variant="h6" color="primary">{product.price}</Typography>
                <Button variant="contained" color="primary" fullWidth style={{ marginTop: "10px" }}>Add to Cart</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Pet_Store;
