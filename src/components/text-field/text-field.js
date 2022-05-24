import '../../../node_modules/jquery-mask-plugin/dist/jquery.mask.min';
import './text-field.scss';
import $ from 'jquery';

$(".text-field_mask").mask("99.99.9999", {
  placeholder: "ДД.ММ.ГГГГ"
});