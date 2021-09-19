var $ = require( "jquery" );
import "../../../node_modules/jquery-mask-plugin/dist/jquery.mask.min";

$(".text-field_mask").mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ" });