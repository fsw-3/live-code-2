const authService = require('../../services/authService');

module.exports = {
     register(req, res) {
        authService
        .register(req.body)
        .then(( data ) => {
            res.status(200).json({
                status: "OK",
                data
            });
        })
        .catch((err) => {
            res.status(400).json({
                status: "FAIL",
                message: err.message,
            });
        });
    },

    login(req, res){
        authService
        .login(req.body)
        .then((data) => {
            res.status(200).json({
                status: "OK",
                data
            });
        })
        .catch((err) =>{
            res.status(400).json({
                status: "FAIL",
                message: err.message,
            });
        })
    }
}