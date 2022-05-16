const { Shoes } = require('../models/shoes');

module.exports = {
    create(data)
    {
        return Shoes.create(
            data,
            {
                paranoid: false
            }
        );
    },

    findAllShoes()
    {
        return Shoes.findAll();
    },
}