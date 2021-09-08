const db = require('../postgresql');

module.exports.home = async (req, res ) => {

    try {
        res.render('pages/index');     
    }
    catch(err) {

    }
}