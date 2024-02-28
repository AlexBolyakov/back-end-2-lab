const houses = require('./db.json');
let globalID = 4;

module.exports = { 
    getHouses: (req, res) => {
        res.status(200).json(houses);
    },
    createHouse: (req, res) => {
        // const { address, price, iamgeURL } = req.body;
        const newHouse = {...req.body, globalID};
        houses.push(newHouse);
        globalID =+ 1;
        res.status(200).json(houses);
    },
    removeHouse: (req, res) => {
        const identification = req.params;
        for (i = 0; i < houses.length; i++) {
            if (houses[i].globalID === identification);
            houses.splice(i, 1);
            res.status(200).json(houses);
        }
    }
};