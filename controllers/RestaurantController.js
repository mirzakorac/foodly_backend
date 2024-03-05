const Restaurant = require("../models/Restaurant");


module.exports = {
    addRestaurant: async (req, res) => {

        const {title, time, imageUrl, owner, code, logoUrl, coords
        } = req.body;
        if(!title || !time || !imageUrl || !owner || !code || !logoUrl || !coords
            || !coords.latitude || coords.latitude || !coords.address || !coords.title){
           return res.status(400).json({status: false, message: "You have a missing field"})
        }
        try {
           const newRestaurant = new Restaurant(req.body);
           await  newRestaurant.save();
           res.status(201).json({status: true, message: "Restaurant added successfully"})

        } catch(error) {
            res.status(500).json({status: false, message: error.message})

    }
}
}

module.exports = {
    getRestaurantById: async (req, res) => {
        const id = req.params.id;
        try {
       const restaurant = await Restaurant.findById(id);

       res.status(200).json(restaurant);
        } catch(error) {
            res.status(500).json({status: false, message: error.message});
        }
    }
}


module.exports = {
    getAllNearbyRestaurant: async (req, res) => {
        
        try {

        } catch(error) {

        }
    }
}

module.exports = {
    getRandomRestaurant: async (req, res) => {
        try {

        } catch(error) {

        }
    }
}