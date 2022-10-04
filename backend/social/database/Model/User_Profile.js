const {Model} = require("objection");

class User_Profile extends Model
{
    static get tableName()
    {
        return "User_Profile";
    }
}

module.exports = User_Profile;