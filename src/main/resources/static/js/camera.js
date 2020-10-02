
var reloadInterval = 5000;
var loadDataService = null;
function loadValue() {
	var siteId = $('#selectSiteId').val();
	$.ajax({
        url: "/api/camera/get-water-value?siteId=" + siteId,
        method: 'GET',
        contentType: 'application/json',
        success: function (data) {
        	console.log(data)
        	document.getElementById("water-value").textContent = data
        },
        error: function (err) {
        	document.getElementById("water-value").textContent = err
        }
    });
}
function startLoadDataService() {
	loadValue();
	stopLoadDataService();
	loadDataService = setInterval(loadValue, reloadInterval);
}

function stopLoadDataService() {
	if (loadDataService != null) {
		clearInterval(loadDataService);
		loadDataService = null;
	}
}

var listkey = ['RD', 'LD', 'RU', 'LU']

function openModal(index) {
	startLoadDataService()
    let dataVideo = dataCurrentSite[index];
    $(".popup-video").css("display", "block");
    $(".popup-video").css("opacity", "1");
    //console.log(dataVideo)
    let siteId = $("#selectSiteId option:selected").val();
    let camId = dataVideo.deviceId;
    let dataLink = dataVideo.urlVideoView;
    let cameraType = dataVideo.cameraType;
    if (cameraType && cameraType == '1') {
    	listkey = ['RD', 'LD', 'RU', 'LU'];
	}else {
		listkey = []
	}
    $('.popup-video').attr('site-id', siteId);
    $('.popup-video').attr('cam-id', camId);
    $('.popup-video').attr('site-device-id', dataVideo.siteDeviceId);
    //$('.popup-video').attr('data-link', dataLink);
    
    player = new JSMpeg.Player(dataLink, {
  	  canvas: document.getElementById('canvas') // Canvas should be a canvas DOM element
  	})
    let title = '<p>Device info</p>';
    let detail = $('<ul>');
    detail.append($('<li> Watersensor Value: <span id=water-value></span></li>'));
    detail.append($('<li> Port: ' + dataVideo.port + '</li>'));
    detail.append($('<li> SiteName: ' + $("#selectSiteId option:selected").text() + '</li>'));
    $('#infoCamera').empty();
    $('#infoCamera').append(title);
    $('#infoCamera').append(detail);
}

$(".close").on("click", function (e) {
	stopLoadDataService();
    //$('#canvasFullScreen').empty();
    $(".popup-video").css("display", "none");
});

//#2A99C6
//#ECECEC
function doRemote(e, action) {
	if (listkey.includes($(e).attr('data-direction'))) {
		if (action == 'START')
			toastr.error('Not support');
		return;
	}
    let req = {
        rotation: $(e).attr('data-direction'),
        siteDeviceId: $('.popup-video').attr('site-device-id'),
        action: action
    };

    $.ajax({
        url: "/api/camera/rotate",
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(req),
        cache: false,
        success: function (data) {
            console.log(data)
        },
        error: function (err) {
            console.log(err)
        }
    });
}

$('.select2bs4').select2({
    theme: 'bootstrap4',
    minimumInputLength: 0
});

let dataCurrentSite = null;

$('#selectSiteId').on('change', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $.ajax({
        url: '/api/camera/get-list-camera-by-site-id?siteId=' + $(this).val(),
        method: 'GET',
        contentType: 'application/json',
        success: function (response) {
            dataCurrentSite = response;
            $('#showListDevice').empty();
            for (let i = 0; i < response.length; i++) {
                let wrapCard = $('<div class="card card-primary collapsed-card">');
                let cardHeader = $('<div class="card-header">');
                let btnCollapse = $('<button type="button" class="btn btn-tool" data-card-widget="collapse">' + $("#selectSiteId option:selected").text() + ' - ' + response[i].deviceName + '</button>');
                let btnViewCamera = $('<button type="button" class="btn btn-primary" onclick="openModal(' + i + ')">Xem Camera</button>');
                let contentDesc = $('<div class="card-body">');
                let detail = $('<ul>');
                detail.append($('<li> DeviceId: ' + response[i].deviceId + '</li>'));
                detail.append($('<li> DeviceName: ' + response[i].deviceName + '</li>'));
                detail.append($('<li> DeviceTypeName: ' + response[i].deviceTypeName + '</li>'));
                detail.append($('<li> IsCollectData: ' + response[i].isCollectData + '</li>'));
                detail.append($('<li> Port: ' + response[i].port + '</li>'));
                detail.append($('<li> SiteName: ' + $("#selectSiteId option:selected").text() + '</li>'));
                contentDesc.append(detail);
                cardHeader.append(btnCollapse);
                cardHeader.append(btnViewCamera);
                wrapCard.append(cardHeader);
                wrapCard.append(contentDesc);
                $('#showListDevice').append(wrapCard);
            }
        }, error: function (err) {
            toastr.error(err.responseJSON.message, err.responseJSON.code);
        }
    })
});
