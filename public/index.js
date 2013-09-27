<!-- Форма + кнопки -->
function xmlStart() {
    $("body").prepend('<div class="ymlYandex" style="display:none;">Yandex yml</div><textarea id="ymlYandex" style="width:100%; height:500px; display:none;" /><div class="ymlMail" style="padding-top:20px; display:none;">Mail yml</div><textarea id="ymlMail" style="width:100%; height:500px; display:none;" /><input id="parse" type="button" value="Парсить страницу" onClick="javascript: xmlOffer()" /><input id="end" type="button" value="Готово" onClick="javascript: xmlEndYandex(); xmlEndMail()" />'/*<input type="text" id="kat"/><input id="end" type="button" value="Добавить категорию" onClick="javascript: addKat()" />*/);
}

<!-- yml по каждому товару(запускается на каждой странице) -->
function xmlOffer() {
    for (i = 0; i < json.itemList.length; i++) {
    	var cost = ( parseFloat(json.itemList[i].price) + parseFloat($("#cur_delivery")[0].value) ) * (parseFloat($("#cur_rate")[0].value));

    	cost = ( 1 + parseFloat($("#cur_comission")[0].value / 100.0) * cost;


        var xml = '<offer id="' + json.itemList[i].itemId + '" available="true"><url>' + json.itemList[i].href + '</url><price>'+ 
        				cost + 
        		'</price><currencyId>RUR</currencyId><categoryId>1</categoryId><picture>' + json.itemList[i].image + '</picture><picture>' + json.itemList[i].image + '</picture><name>Товар #'+ i +' </name><param name="Цвет">Синий,Зеленый,Красный</param><param name="Размер">XXL,LLX</param></offer>';
        $("#ymlYandex")[0].value += xml;
	$("#ymlMail")[0].value += xml;
    }
	$('#parse').attr('disabled','disabled');
}

<!-- Начало + конец ymlYandex -->
function xmlEndYandex() { $("#ymlYandex")[0].value = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE yml_catalog SYSTEM "shops.dtd"><yml_catalog date="2013-04-01 17:00"><shop><name>BestShop</name><company>Best online seller Inc.</company><url>http://best.seller.ru/</url><currencies><currency id="RUR" rate="1"/><currency id="USD" rate="32" /></currencies><categories><category id="1">Категория #1</category></categories><offers>' + $("#ymlYandex")[0].value + '</offers></shop></yml_catalog>';
	$("#ymlYandex")[0].style.display = 'block';
	$(".ymlYandex")[0].style.display = 'block';
	$("#parse")[0].style.display = 'none';
	$("#end")[0].style.display = 'none'; 
}

<!-- Начало + конец ymlMail -->
function xmlEndMail() { $("#ymlMail")[0].value = '<torg_price date="2013-04-01 17:00"><shop><shopname>BestShop</shopname><company>Best online seller Inc.</company><url>http://best.seller.ru/</url><platform>CMS</platform><version>1.0</version><agency>Agency</agency><email>CMS@CMS.ru</email><currencies><currency id="RUR" rate="1"/></currencies><categories><category id="1">Категория #1</category></categories><offers>' + $("#ymlMail")[0].value + '</offers></shop></torg_price>';
	$("#ymlMail")[0].style.display = 'block';
	$(".ymlMail")[0].style.display = 'block';
}

$('li.top-item, li.sub-low-item, .paginator a:not(.active)').click(function() {
	$('#parse').removeAttr('disabled','disabled');
});













