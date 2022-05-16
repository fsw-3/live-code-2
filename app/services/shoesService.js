const shoesRepository = require('../repositories/shoesRepository');

module.exports = {

     async create(data)
    {
        try {
            return shoesRepository.create(data);
        } catch (error) {
            throw error;
        }
    },

    async list()
    {
        try {
            const shoes = await carRepository.findAllShoes();
            return {
                data: shoes,
            }
        } catch (error) {
            throw error;
        }
    },

}