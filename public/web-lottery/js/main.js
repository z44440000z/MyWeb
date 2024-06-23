$(document).ready(function () {
    $.getJSON("json/data.json").done(function (result) {
        loca = localStorage.getItem('myLocation'); //取出已存在瀏覽器的資料
        //隨機抽籤
        var today = result.data[Math.floor(Math.random() * result.data.length)];
        $('#today_txt').html(today.Sign);
        $('#today_img').attr("src", "Image/" + today.Image);

        //午餐推薦
        var lunch = result.lunch[Math.floor(Math.random() * result.lunch.length)]
        var face = result.facemood[Math.floor(Math.random() * result.facemood.length)]
        $('#lunch').html("今天午餐適合吃" + lunch.content + "！" + face.content);
    })
})


//天氣
var url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-C0C3AC7F-DAC6-48F1-9F5D-F98ADC7B5B97"
var loca = localStorage.getItem('myLocation');;
var Wx = 0;
var PoP = 1;
var MaxT = 4;

$(document).ready(function () {
    $.getJSON(url, function (result) {
        var city = result.records.location[loca];
        if (city == null) {
            $('#weather').html("你沒有選哪個城市，我怎麼知道你要看哪裡的天氣呢？¯&#92_(ツ)_/¯")
        }
        else {
            $('#weather').html(city.locationName + "今天的最高溫度是" + city.weatherElement[MaxT].time[0].parameter.parameterName + "℃\n" + city.weatherElement[Wx].time[0].parameter.parameterName + "，降雨機率: " + result.records.location[loca].weatherElement[PoP].time[0].parameter.parameterName + "%");
        }
    })
})

//下拉選單
$.getJSON(url).done(function (result) {
    result.records.location.map(function (data) {
        if (loca != null) {
            if (result.records.location[loca] == data) {
                $('#myselect').append('<option selected="selected" value="' + data.locationName + '">' + data.locationName + '</option>');
            }
            else { $('#myselect').append('<option value="' + data.locationName + '">' + data.locationName + '</option>'); }
        }
        else { $('#myselect').append('<option value="' + data.locationName + '">' + data.locationName + '</option>'); }
    })
})

//選擇城市
$('#myselect').change(function () {
    $.getJSON(url, function (result) {
        var citylist = result.records.location;
        loca = citylist.findIndex(findlocation);
        localStorage.setItem('myLocation', loca); //把輸入的內容存在瀏覽器 
    })
});


function findlocation(item) {
    return item.locationName == $('#myselect').val();
}