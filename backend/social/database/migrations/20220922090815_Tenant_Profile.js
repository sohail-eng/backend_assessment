/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Tenant_Profile',(table)=>
  {
    table.increments("tenant_id").primary();
    table.string("tenant_name",255);
    table.json("address");
    table.string("city",255);
    table.string("state",255);
    table.string("country",255);
    table.string("zip_code",255);
    table.string("phone",255);
    table.string("web_url",255);
  }).then(()=>
  {
    return knex.schema.createTable('User_Profile',(table)=>
    {
      table.increments("user_id").primary();
      table.string("first_name",255);
      table.string("last_name",255);
      table.string("department",255);
      table.string("designation",255);
      table.integer("tenant_id",255).references('tenant_id').inTable('Tenant_Profile');
      table.string("image_url",255)
      table.string("city",255);
      table.string("country",255);
      table.string("bio",255);
      table.json("social_links");
      table.integer("employee_id",255);
    });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('User_Profile').then(()=>
    {
      return knex.schema.dropTable('Tenant_Profile');
    });
};
