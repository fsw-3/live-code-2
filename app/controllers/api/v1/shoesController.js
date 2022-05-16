const shoesService = require('../../services/shoesService');

module.exports = {

    create(req, res) {
        shoesService
        .create({
            name: req.body.name,
            merk: req.body.merk,
            size: req.body.size,
            color: req.body.color,
        })
        .then(( data ) => {
            res.status(200).json({
                status: "OK",
                data,
            });
        })
        .catch((err) => {
            res.status(400).json({
                status: "FAIL",
                message: err.message,
            });
        })
    },

     list(req, res){
        shoesService
        .list()
        .then((data) => {
            res.status(200).json({
                status: "OK",
                data
            });
        })
        .catch((err) => {
            res.status(400).json({
                status: "FAIL",
                message: err.message,
            })
        })
    },

}
