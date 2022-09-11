import $ from 'jquery';

//导入样式 在（webpack中，一切皆模块，都可以用过es导入语法进行导入使用）
import './css/index.css';

import './css/index.less'

import logo from '@/images/logo.jpg';


$(function () {
    $('li:odd').css('background-color', 'red');
    $('li:even').css('background-color', 'blue');
    $('.box').attr('src', logo);
})