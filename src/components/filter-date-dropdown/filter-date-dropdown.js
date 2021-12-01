let $ = require( "jquery" );

let date_button = $(".filter-date-dropdown")

date_button.on("click", function() {
  calendareCreate();
})