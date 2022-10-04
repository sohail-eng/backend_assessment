const {Model} = require("objection");


class Tenant_Profile extends Model
{
    static get tableName()
    {
        return "Tenant_Profile";
    }

    static get relationMappings()
    {
        const User_Profile = require("./User_Profile");
        
        return{
            User_Profile:
            {
                relation:Model.HasManyRelation,
                modelClass:User_Profile,
                join:{
                    from:'Tenant_Profile.tenant_id',
                    to:'User_Profile.tenant_id'
                },
            },
        };
    }

}

module.exports = Tenant_Profile;