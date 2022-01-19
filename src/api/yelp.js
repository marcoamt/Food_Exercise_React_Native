import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses/",
    headers: {
        Authorization: 'Bearer _JqncQFSmWHlXp-swlpIWidF2VzOgOxvQHZ0rH2AHbXyMxhp1zWklyXFJyGdJi6M0xZgNnSWEB5C8EpiEksy2dkeWstlik0qY_Hs2LdUpu1np9HYthyOjHyXWu7nYXYx'
    }
});
