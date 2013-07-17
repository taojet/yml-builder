<!-- Форма + кнопки -->
function xmlStart() {
    $("body").prepend('<textarea id="yml" style="width:100%; height:500px; display:none;" /><input id="parse" type="button" value="Парсить страницу" onClick="javascript: xmlOffers()" /><input id="end" type="button" value="Готово" onClick="javascript: xmlEnd()" />');
}

<!-- yml по каждому товару(запускается на каждой странице) -->
function xmlOffers() {
    for (i = 0; i < json.itemList.length; i++) {
        var xml = '<offer id="' + json.itemList[i].itemId + '" type="vendor.model" available="true"><name>Товар #'+ i +' </name><url>' + json.itemList[i].href + '</url><price>'+ json.itemList[i].price +' руб.</price><currencyId>RUR</currencyId><categoryId>1</categoryId><picture>' + json.itemList[i].image + '</picture><picture>' + json.itemList[i].image + '</picture><vendor>TaoBao</vendor><param name="images"><image id="'+i+'">' + json.itemList[i].image + '</image></param><param name="Цвет"><color id="1">Синий</color><color id="2">Зеленый</color></param><param name="Размер"><size id="1">XXL</size><size id="2">LLX</size></param></offer>';
        $("#yml")[0].value += xml;
    }
	$('#parse').attr('disabled','disabled');
}

<!-- Конец yml -->
function xmlEnd() { $("#yml")[0].value = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE yml_catalog SYSTEM "shops.dtd"><yml_catalog date="2013-04-01 17:00"><shop><name>BestShop</name><company>Best online seller Inc.</company><url>http://best.seller.ru/</url><platform>CMS</platform><version>1.0</version><agency>Agency</agency><email>CMS@CMS.ru</email><currencies><currency id="RUR" rate="1"/></currencies><categories><category id="1">Категория #1</category></categories><offers>' + $("#yml")[0].value + '</offers></shop></yml_catalog>';
$("#yml")[0].style.display = 'block';
$("#parse")[0].style.display = 'none';
$("#end")[0].style.display = 'none'; 
}

$('li.top-item, li.sub-low-item, .paginator a:not(.active)').click(function() {
$('#parse').removeAttr('disabled','disabled');
});













