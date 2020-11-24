const station =
    {
        clientAction: '',
        indexOfRow: -1,
        table: undefined,
        numOfInputSearch: 0,
        oldValue: undefined,
        keyUpTime: undefined,
        totalTurb: 0,
        numTT: 1,
        dataRow:[[{"deep":undefined,"value":undefined,"turbidity":undefined,"speed":undefined}]],
        dataRowAvg:[{"deep":undefined,"value":undefined,"turbidity":undefined,"speed":undefined}],
        dataTotalDeep:[],
        dataDistance:[],
        objSearch: {
            s_objectType: '',
            s_objectTypeName: '',
            s_stationCode: '',
            s_stationName: '',
            s_longtitude: '',
            s_latitude: '',
            s_provinceName: '',
            s_districtName: '',
            s_wardName: '',
            s_address: '',
            s_riverName: '',
            s_status: '',
        },
        objParameterSearch: {
            s_parameterName: '',
            s_unitName: '',
            s_note: ''
        },
        parameter: {
            id: null,
            stationId: null,
            countryId: null,
            areaId: null,
            provinceId: null,
            districtId: null,
            wardId: null,
            siteId: null,
            riverId: null
        },
        init: function () {
            // station.getStationType();
            // station.getArea();
            // station.getProvince();
            station.getStationCode();
            station.getRiver();
            // station.getParameter();
            // station.searchParameter();
            station.disabled_right();
            station.show_search();
            station.drawTableTT();
        },
        getStationCode: function () {
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/get-list-select-station",
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    $("#stationId").select2({data: data});
                    station.info = data;
                    global.disableLoading();
                },
                error: function (data) {
                    if (data.status === 401) {
                        window.location.href = "/logout";
                    }
                    //console.log(data);
                }
            });
        },
        getRiver: function () {
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "common/get-select-list-rivers",
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    $("#riverId").empty();
                    $("#riverId").select2({data: data});
                    if (station.clientAction === 'update') {
                        $('#riverId').val(station.parameter.riverId).trigger('change');
                    }
                    global.disableLoading();
                }
            });
        },
        stationIdOnchange: function (obj) {
            let stationId = $(obj).val();
            let rId = undefined;
            for (let item of station.info) {
                if (item.id === stationId) {
                    rId = parseInt(item.moreInfo);
                    break;
                }
            }
            console.log(rId);
            $("#riverId").val(rId).trigger('change');
            $("#riverId").prop('disabled', true);
        },
        timeStartOnchange: function () {
            let l1 = $("#timeStart").val().trim();
            let l2 = $("#timeEnd").val().trim();
            if (l2 < l1 && l1.length > 0 && l2.length > 0) {
                $("#timeStart_error").html('Thời gian bắt đầu không lớn hơn thời gian kết thúc');
                $("#timeStart").focus();
                return false;
            }
            let t1 = moment(l1, 'DD/MM/YYYY HH:mm').valueOf();
            let t2 = moment(l2, 'DD/MM/YYYY HH:mm').valueOf();
            $("#timeAvg").val(moment((t2 + t1) / 2).format('DD/MM/YYYY HH:mm'));
            $("#timeStart_error").html('');
            $("#timeEnd_error").html('');
            return true;
        },
        timeEndOnchange: function () {
            let l1 = $("#timeStart").val().trim();
            let l2 = $("#timeEnd").val().trim();
            if (l2 < l1 && l1.length > 0 && l2.length > 0) {
                $("#timeEnd_error").html('Thời gian kết thúc không nhỏ hơn thời gian bắt đầu');
                $("#timeEnd").focus();
                return false;
            }
            let t1 = moment(l1, 'DD/MM/YYYY HH:mm').valueOf();
            let t2 = moment(l2, 'DD/MM/YYYY HH:mm').valueOf();
            $("#timeAvg").val(moment((t2 + t1) / 2).format('DD/MM/YYYY HH:mm'));
            $("#timeStart_error").html('');
            $("#timeEnd_error").html('');
            return true;
        },
        waterLevelStartOnchange: function () {
            let l1 = $("#waterLevelStart").val().trim();
            let l2 = $("#waterLevelEnd").val().trim();
            if (l2 < l1 && l1.length > 0 && l2.length > 0) {
                $("#waterLevelStart_error").html('Mực nước bắt đầu không lớn hơn mực nước kết thúc');
                $("#waterLevelStart").focus();
                return false;
            }
            $("#waterLevelAvg").val((parseInt(l2) + parseInt(l1)) / 2);
            $("#waterLevelStart_error").html('');
            $("#waterLevelEnd_error").html('');
            return true;
        },
        waterLevelEndOnchange: function () {
            let l1 = $("#waterLevelStart").val().trim();
            let l2 = $("#waterLevelEnd").val().trim();
            if (l2 < l1 && l1.length > 0 && l2.length > 0) {
                $("#waterLevelEnd_error").html('Mực nước kết thúc không nhỏ hơn mực nước bắt đầu');
                $("#waterLevelEnd").focus();
                return false;
            }
            $("#waterLevelAvg").val((parseInt(l2) + parseInt(l1)) / 2);
            $("#waterLevelStart_error").html('');
            $("#waterLevelEnd_error").html('');
            return true;
        },
        drawTableTT:function (){
            let strHead = '';
            let strHead1 = '<tr><th style="width: 10px" rowspan="4">STT</th>';
            let strHead2 = '<tr>';
            let strHead3 = '<tr>';
            let strHead4 = '<tr>';
            for(let i = 0 ; i < station.numTT; i ++){
                strHead1 += '<th id="thTT'+i+'" colspan="4" style="width: 100px;text-align: center">Thủy trực '+(i+1)+'</th>';
                strHead2 += '<th style="text-align: center">Độ sâu</th> <th style="text-align: center">Giá trị</th><th style="text-align: center">Độ đục</th><th style="text-align: center">Tốc độ</th>';
                if(station.dataTotalDeep[i] !== undefined){
                    strHead3 += '<th colspan="2">Tổng độ sâu(m)</th><th colspan="2" contenteditable="true" onkeypress="return station.isNumber(event)" onblur="station.deepValue(0,'+i+',-1,this)">'+station.dataTotalDeep[i]+'</th>';
                }else {
                    strHead3 += '<th colspan="2">Tổng độ sâu(m)</th><th colspan="2" contenteditable="true" onkeypress="return station.isNumber(event)" onblur="station.deepValue(0,'+i+',-1,this)"></th>';
                }
                if(station.dataDistance[i] !== undefined) {
                    strHead4 += '<th colspan="2">Khoảng cách(m)</th><th colspan="2" contenteditable="true" onkeypress="return station.isNumber(event)" onblur="station.deepValue(0,'+i+',-2,this)">'+station.dataDistance[i]+'</th>';
                }else{
                    strHead4 += '<th colspan="2">Khoảng cách(m)</th><th colspan="2" contenteditable="true" onkeypress="return station.isNumber(event)" onblur="station.deepValue(0,'+i+',-2,this)"></th>';
                }
            }
            strHead1 +='<th style="min-width: 70px !important;"><i class="fa fa-plus" onclick="station.addTT()"></i>\n' +
                '  &nbsp;<i class="fa fa-minus" onclick="station.subTT()"></i></th></tr>';
            strHead2 += '</tr>';
            strHead3 += '</tr>';
            strHead4 += '</tr>';
            strHead = strHead1 + strHead3+ strHead4+ strHead2;
            $("#tHeadTT").html(strHead);

            let strBody = '';
            for(let i = 0 ; i < station.dataRow.length;i++){
                let t = station.dataRow[i];
                strBody += '<tr><td>'+(i+1)+'</td>';
                for(let j = 0 ; j < t.length ; j++){
                    if(t[j].deep === undefined){
                        strBody += '<td contenteditable="true" onkeypress="return station.isNumber(event)" onblur="station.deepValue('+i+','+j+',1,this)"></td>';
                    }else {
                        strBody += '<td contenteditable="true" onkeypress="return station.isNumber(event)" onblur="station.deepValue('+i+','+j+',1,this)">' + t[j].deep + '</td>';
                    }
                    if(t[j].value === undefined){
                        strBody += '<td></td>';
                    }else {
                        strBody += '<td>' + t[j].value + '</td>';
                    }
                    if(t[j].turbidity === undefined){
                        strBody += '<td contenteditable="true" onkeypress="return station.isNumber(event)" onblur="station.deepValue('+i+','+j+',3,this)"></td>';
                    }else {
                        strBody += '<td contenteditable="true" onkeypress="return station.isNumber(event)" onblur="station.deepValue('+i+','+j+',3,this)">' + t[j].turbidity + '</td>';
                    }
                    if(t[j].speed === undefined){
                        strBody += '<td contenteditable="true" onkeypress="return station.isNumber(event)" onblur="station.deepValue('+i+','+j+',4,this)"></td>';
                    }else {
                        strBody += '<td contenteditable="true" onkeypress="return station.isNumber(event)" onblur="station.deepValue('+i+','+j+',4,this)">' + t[j].speed + '</td>';
                    }
                }
                strBody += '</tr>';
            }

            strBody += '<tr><td style="font-weight: bold">Trung bình</td>';
            for(let j = 0 ; j < station.dataRowAvg.length ; j++){
                if(station.dataRowAvg[j].turbidity === undefined){
                    strBody += '<td style="background-color: #dee2e6"></td><td style="background-color: #dee2e6"></td><td style="background-color: #dee2e6"></td><td style="background-color: #dee2e6"></td>';
                }else{
                    strBody += '<td style="background-color: #dee2e6"></td><td style="background-color: #dee2e6"></td><td style="background-color: #dee2e6">'+station.dataRowAvg[j].turbidity+'</td><td style="background-color: #dee2e6"></td>';
                }
            }
            strBody += '</tr>';
            strBody += '<tr><td style="font-weight: bold" colspan="'+station.dataRowAvg.length*2+'">Độ đục toàn bộ sông</td><td colspan="'+(station.dataRowAvg.length*2 + 1)+'">'+station.totalTurb+'</td> </tr>';

            strBody += '<tr><td><i class="fa fa-plus" onclick="station.addRow()"></i>\n' +
                '&nbsp;<i class="fa fa-minus" onclick="station.subRow()"></i></td></tr>';
            $("#tBodyTT").html(strBody);
        },
        addTT:function (){
            station.numTT ++;
            for(let i = 0 ; i < station.dataRow.length;i++){
                let t = station.dataRow[i];
                t.push({"deep":undefined,"value":undefined});
            }
            station.dataRowAvg.push({"deep":undefined,"value":undefined});
            station.drawTableTT();
        },
        subTT:function (){
            if(station.numTT > 1){
                station.numTT --;
                for(let i = 0 ; i < station.dataRow.length;i++){
                    let t = station.dataRow[i];
                    t.pop();
                }
                station.dataRowAvg.pop();
                station.drawTableTT();
            }
        },
        addRow:function (){
            let col = station.dataRow[0].length;
            let cell = [];
            for(let i = 0 ; i < col ; i ++){
                cell.push({"deep":undefined,"value":undefined});
            }
            station.dataRow.push(cell);
            station.drawTableTT();
        },
        subRow:function (){
            let col = station.dataRow.length;
            if(col > 1) {
                station.dataRow.pop();
                station.drawTableTT();
            }
        },
        deepValue:function (i,j,t,obj){
            let val = parseFloat($(obj).html());
            if(!isNaN(val) && val !== NaN) {
                if (t === 1) {
                    station.dataRow[i][j].deep = val;
                    let d = station.dataTotalDeep[j];
                    if(!isNaN(d) && d !== NaN) {
                        station.dataRow[i][j].value = Math.round(val * d * 100) / 100;
                        station.calculateAvg(j);
                        station.drawTableTT();
                    }
                }
                else if (t === 3) {
                    station.dataRow[i][j].turbidity = val;
                    station.calculateAvg(j);
                    station.drawTableTT();
                }
                else if (t === -1) {
                    station.dataTotalDeep[j] = val;
                    for(let k = 0 ; k < station.dataRow.length ; k++){
                        let d = station.dataRow[k][j].deep;
                        if(!isNaN(d) && d !== NaN) {
                            station.dataRow[k][j].value = Math.round(val * d * 100) / 100;
                        }
                    }
                    station.drawTableTT();
                    // station.dataRow[i][j].value = val * station.dataTotalDeep[i];
                }
                else if (t === -2) {
                    station.dataDistance[j] = val;
                    station.drawTableTT();
                } else {
                    station.dataRow[i][j].speed = val;
                }
            }
        },
        isNumber(e){
            // console.log(String.fromCharCode(e.which));
            if (String.fromCharCode(e.which) !== '.' && isNaN(String.fromCharCode(e.which))) {
                e.preventDefault();
                return false;
            }
            return true;
        },
        calculateAvg:function (j){
            //tinh trung binh cua moi thuy truc
            let avg = 0;
            let slots = [];
            for(let i = 0 ; i < station.dataRow.length ; i ++){
                if(station.dataRow[i][j].turbidity !== undefined ){
                    slots.push(station.dataRow[i][j]);
                }
            }
            let l = slots.length;
            switch (l) {
                case 0:
                    break;
                case 1:
                    if(slots[0].deep === 0.5){
                        avg =slots[0].turbidity * 0.1;
                    }else{
                        avg =slots[0].turbidity;
                    }
                    break;
                case 2:
                    if(slots[0].deep === 0.2 && slots[1].deep === 0.8){
                        avg = (slots[0].turbidity * slots[0].speed + slots[1].turbidity * slots[1].speed)/(slots[0].speed + slots[1].speed);
                    }else{
                        avg = (slots[0].turbidity + slots[1].turbidity) /2;
                    }
                    break;
                case 3:
                    if(slots[0].deep === 0.2 && slots[1].deep === 0.6 && slots[2].deep === 0.8){
                        avg = (slots[0].turbidity * slots[0].speed + slots[1].turbidity * slots[1].speed + slots[2].turbidity * slots[2].speed)/(slots[0].speed + slots[1].speed + slots[2].speed);
                    }else{
                        avg = (slots[0].turbidity + slots[1].turbidity + slots[2].turbidity) /3;
                    }
                    break;
                case 5:
                    if(slots[0].deep === 0 && slots[1].deep === 0.2 && slots[2].deep === 0.6 && slots[3].deep === 0.8 && slots[4].deep === 1){
                        avg = (slots[0].turbidity * slots[0].speed + 3 * slots[1].turbidity * slots[1].speed +
                                3 * slots[2].turbidity * slots[2].speed + 2 * slots[3].turbidity * slots[3].speed + slots[4].turbidity * slots[4].speed)
                            /(slots[0].speed + slots[1].speed + slots[2].speed);
                    }else{
                        avg = (slots[0].turbidity + slots[1].turbidity + slots[2].turbidity + slots[4].turbidity + slots[5].turbidity) /5;
                    }
                    break;
                default:
                    for(let i = 0 ; i < slots.length;i++){
                        avg += slots[i].turbidity;
                    }
                    avg = avg/slots.length;
                    break;
            }
            station.dataRowAvg[j].turbidity = avg;
            let total = 0 ;
            for(let i = 0 ; i < station.dataRowAvg.length ; i++){
                total += station.dataRowAvg[i].turbidity;
            }
            station.totalTurb = total/station.dataRowAvg.length;
        },
        btnSave: function (e) {
            e.preventDefault();
            if (!station.validate()) {
                return;
            }
            global.showLoading();
            // Get form
            var form = $('#uploadForm')[0];

            // Create an FormData object
            let data = new FormData(form);
            data.append("username", global.username);
            data.append("timeAvg", $("#timeAvg").val());
            data.append("data", JSON.stringify(station.dataRow));
            data.append("dataAvg", JSON.stringify(station.dataRowAvg));
            data.append("totalTurb",station.totalTurb);

            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "manual-input/create-liss",
                type: "POST",
                enctype: 'multipart/form-data',
                method: "POST",
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                // timeout: 600000,
                success: function (data) {
                    if (data.status == 1) {
                        toastr.success('Thành công', data.message);
                        //reset cac thong tin them moi
                        station.btnRefresh();
                        // station.btnRefreshParameter();
                        // station.uuid = global.uuidv4();
                        station.table.ajax.reload();
                        station.closePopup();
                    } else {
                        if (data.message === 'NOK1') {
                            toastr.error('', 'Mã trạm đã tồn tại');
                            $("#stationCode").focus();
                        } else {
                            toastr.error('', data.message);
                        }
                    }
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        btnUpdate: function (e) {
            e.preventDefault();
            if (!station.validate()) {
                return;
            }
            global.showLoading();
            // Get form
            var form = $('#uploadForm')[0];

            // Create an FormData object
            let data = new FormData(form);
            data.append("username", global.username);
            data.append("timeAvg", $("#timeAvg").val());
            data.append("waterLevelAvg", $("#waterLevelAvg").val());
            data.append("id",station.parameter.id);
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "manual-input/update-liss",
                type: "POST",
                enctype: 'multipart/form-data',
                method: "POST",
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                // timeout: 600000,
                success: function (data) {
                    if (data.status == 1) {
                        toastr.success('Thành công', data.message);
                        //reset cac thong tin them moi
                        station.btnRefresh();
                        // station.btnRefreshParameter();
                        // station.uuid = global.uuidv4();
                        station.table.ajax.reload();
                        station.closePopup();
                    } else {
                        if (data.message === 'NOK1') {
                            toastr.error('', 'Mã trạm đã tồn tại');
                            $("#stationCode").focus();
                        } else {
                            toastr.error('', data.message);
                        }
                    }
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        btnRefresh: function () {
            $("#stationTypeId").val('-1').trigger('change');
            $("#modeStationType").val('1').trigger('change');
            $("#stationCode").val('');
            $("#stationName").val('');
            $("#longtitude").val('');
            $("#latitude").val('');

            $("#areaId").val('-1').trigger('change');
            $("#provinceId").val('-1').trigger('change');
            $("#districtId").val('-1').trigger('change');
            $("#wardId").val('-1').trigger('change');
            $("#address").val('');
            $("#riverId").val('-1').trigger('change');
            $("#status").val('1').trigger('change');
        },
        btnDelete: function () {
            if (!confirm('Bạn thực sự muốn xóa ?')) {
                return;
            }
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "manual-input/delete-liss",
                method: "POST",
                // contentType: "application/json",
                data: jQuery.param({id: station.parameter.id}),
                success: function (data) {
                    if (data.status == 1) {
                        toastr.success('Thành công', data.message);
                        //reset cac thong tin them moi
                        station.btnRefresh();
                        // station.btnRefreshParameter();
                        // station.uuid = global.uuidv4();
                        station.table.ajax.reload();
                        station.disabled_right();
                        $("#btnSave").css("display", "none");
                        $("#btnDelete").css("display", "none");
                        $("#btnReset").css("display", "none");
                        $("#btnCancel").css("display", "none");
                        $("#btnDoNew").attr("disabled", false);
                        if (station.indexOfRow > -1) {
                            station.table.row(station.indexOfRow).deselect();
                        }
                        station.show_search();
                    } else {
                        toastr.error('', data.message);
                    }
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        rowSelect: function (e, dt, type, indexes) {
            // $('#btnCopy').removeAttr('disabled');
            // $('#btnDelete').removeAttr('disabled');

        },
        preEdit: function (indexes) {
            station.clientAction = 'update';
            station.indexOfRow = indexes;
            let rowData = station.table.rows(indexes).data().toArray();
            station.fillDataToForm(rowData);
        },
        fillDataToForm: function (rowData) {
            $('.help-block').html('');
            if (rowData != null && rowData != undefined && rowData.length > 0) {
                console.log(rowData);
                station.enabled_right();
                $("#btnSave").css("display", "none");
                $("#btnDelete").css("display", "inline");
                $("#btnReset").css("display", "none");
                $("#btnCancel").css("display", "inline");
                $("#btnUpdate").css("display", "inline");
                // $("#btnDoNew").attr("disabled", true);
                station.togle_search();

                $('#stationId').val(rowData[0].stationId).trigger('change');
                $("#stationId").prop("disabled", true);
                $('#riverId').val(rowData[0].riverId);
                $('#timeStart').val(rowData[0].timeStart);
                $('#timeEnd').val(rowData[0].timeEnd);
                $('#timeAvg').val(rowData[0].timeAvg);

                // $('#waterLevelStart').val(rowData[0].waterLevelStart);
                // $('#waterLevelEnd').val(rowData[0].waterLevelEnd);
                // $('#waterLevelAvg').val(rowData[0].waterLevelAvg);
                //
                // $('#speedMax').val(rowData[0].speedMax);
                // $('#speedAvg').val(rowData[0].speedAvg);
                //
                // $('#deepAvg').val(rowData[0].deepAvg);
                // $('#deepMax').val(rowData[0].deepMax);
                //
                // $('#squareRiver').val(rowData[0].squareRiver);
                // $('#widthRiver').val(rowData[0].widthRiver);
                //
                // $('#waterFlow').val(rowData[0].waterFlow);
                // $('#note').val(rowData[0].note);

                station.dataRow = JSON.parse(rowData[0].data);
                station.totalTurb = rowData[0].totalTurb;
                station.parameter.stationId = rowData[0].stationId;
                station.parameter.riverId = rowData[0].riverId;
                station.parameter.id = rowData[0].id;
                station.drawTableTT();
            }
        },
        rowDeselect: function (e, dt, type, indexes) {
        },
        disabled_right: function () {
            $("#form_input input:text").each(function () {
                $(this).prop("readonly", true);
            });
            $("#form_input input:password").each(function () {
                $(this).prop("readonly", true);
            });
            $("#form_input select").each(function () {
                $(this).attr("disabled", true);
            });
            $("#input_group_id").attr("disabled", true);
            $(".checkedGender").attr("disabled", true);
            $(".checkedQuyen").attr("disabled", true);
        },
        enabled_right: function () {
            $("#form_input input:text").each(function () {
                $(this).prop("readonly", false);
            });
            $("#form_input input:password").each(function () {
                $(this).prop("readonly", false);
            });
            $("#form_input select").each(function () {
                $(this).attr("disabled", false);
            });
            $("#input_group_id").attr("disabled", false);
            $(".checkedGender").attr("disabled", false);
            $(".checkedQuyen").attr("disabled", false);
        },
        show_search: function () {
            $("#box_info").hide(0);
            $("#box_search").show(500);
            $("#box_search").attr('class', 'col-sm-12');
            station.table.rows().deselect()
        },
        togle_search: function () {
            $("#box_info").show(500);
            $("#box_info").attr('class', 'col-sm-12');
            $("#box_search").hide(0);
            // $("#box_search").attr('class', 'col-sm-5');
        },
        formReset: function () {
            $('#form_data')[0].reset();
        },
        validate: function () {
            $('.help-block').html('');
            if (!station.validateElement('stationId', 'select', 'Trạm không được để trống')) {
                return false;
            }
            if (!station.validateElement('riverId', 'select', 'Thuộc sông nào')) {
                return false;
            }
            if (!station.validateElement('timeStart', 'input', 'Thời gian bắt đầu không được để trống')) {
                return false;
            }
            if (!station.validateElement('timeEnd', 'input', 'Thời gian kết thúc không được để trống')) {
                return false;
            }
            // if (!station.validateElement('waterLevelStart', 'input', 'Mực nước bắt đầu không được để trống')) {
            //     return false;
            // }
            // if (!station.validateElement('waterLevelEnd', 'input', 'Mực nước kết thúc không được để trống')) {
            //     return false;
            // }
            // if (!station.waterLevelStartOnchange()) {
            //     return false;
            // }
            // if (!station.waterLevelEndOnchange()) {
            //     return false;
            // }
            if (!station.timeStartOnchange()) {
                return false;
            }
            if (!station.timeEndOnchange()) {
                return false;
            }
            return true;
        },
        validateElement: function (obj, type, message) {
            if (type === 'input') {
                if ($('#' + obj).val().trim().length < 1) {
                    $('#' + obj + '_error').html(message);
                    $('#' + obj).focus();
                    return false;
                }
            } else {
                if ($('#' + obj).val() === "-1") {
                    $('#' + obj + '_error').html(message);
                    $('#' + obj).focus();
                    return false;
                }
            }
            return true;
        },

        stationCodeKeyPress: function (event) {
            let key = event.keyCode | event.which;
            if ((key > 47 && key < 58) || key === 8 || (key > 64 && key < 91) || (key > 96 && key < 123)) {
                return true;
            }
            return false;
        },
        stationCodeKeyUp: function (event) {
            let val = $("#stationCode").val().trim();
            $("#stationCode").val(val.toUpperCase());
        },
        closePopup: function () {
            station.disabled_right();
            $('.help-block').html('');
            $("#btnSave").css("display", "none");
            $("#btnDelete").css("display", "none");
            $("#btnReset").css("display", "none");
            $("#btnCancel").css("display", "none");
            $("#btnDoNew").attr("disabled", false);
            if (station.indexOfRow > -1) {
                station.table.row(station.indexOfRow).deselect();
            }
            station.show_search();
        },
        btnExport: function () {
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + 'station-type/export',
                data: JSON.stringify(station.objSearch),
                method: 'POST',
                contentType: "application/json",
                xhrFields: {
                    responseType: 'blob'
                },
                success: function (data, textStatus, xhr) {
                    global.disableLoading();
                    console.log(textStatus + "| " + xhr.getAllResponseHeaders());
                    var a = document.createElement('a');
                    var url = window.URL.createObjectURL(data);
                    console.log("url: " + url);
                    a.href = url;
                    a.download = xhr.getResponseHeader("content-disposition");
                    document.body.append(a);
                    a.click();
                    // a.remove();
                    // window.URL.revokeObjectURL(url);
                }
            });
        },
        downloadFile: function (linkFile){
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + 'station-type/export',
                data: JSON.stringify(station.objSearch),
                method: 'POST',
                contentType: "application/json",
                xhrFields: {
                    responseType: 'blob'
                },
                success: function (data, textStatus, xhr) {
                    global.disableLoading();
                    console.log(textStatus + "| " + xhr.getAllResponseHeaders());
                    var a = document.createElement('a');
                    var url = window.URL.createObjectURL(data);
                    console.log("url: " + url);
                    a.href = url;
                    a.download = xhr.getResponseHeader("content-disposition");
                    document.body.append(a);
                    a.click();
                    // a.remove();
                    // window.URL.revokeObjectURL(url);
                }
            });
        }
    }

$(document).ready(function () {
    $('#timeStart').daterangepicker({
        timePicker: true,
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 2020,
        format: 'DD/MM/YYYY',
        autoUpdateInput: false,
        autoApply: true,
        // autoClose: true,
        // showOtherMonths: true,
        // alwaysShowCalendars: false,
        useCurrent: false,
        allowInputToggle: true
    });
    $('#timeStart').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY HH:mm'));
        station.timeStartOnchange();

    });

    $('#timeEnd').daterangepicker({
        timePicker: true,
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 2020,
        format: 'DD/MM/YYYY',
        autoUpdateInput: false,
        autoApply: true,
        // autoClose: true,
        // showOtherMonths: true,
        // alwaysShowCalendars: false,
        useCurrent: false,
        allowInputToggle: true
    });
    $('#timeEnd').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY HH:mm'));
        station.timeEndOnchange();
    });

    $('#tableDataView thead th').each(function () {
        var title = $(this).text();
        var dataId = $(this).attr("data-id");
        var is_select = $(this).attr("is_select");
        if (dataId != null && dataId != undefined) {
            if (is_select == null || is_select == undefined) {
                $(this).html('<input id="' + dataId + '" class="table-data-input-search" type="text" autocomplete="off" placeholder="Search ' + title + '" />');
            } else {
                $(this).html('<select class="select_table" id=' + dataId + '> <option value="">Hãy chọn</option><option value="1">Hoạt động</option> <option value="0">Không hoạt động</option> </select>');
            }
            $('#s_timeStart').daterangepicker({
                timePicker: true,
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 2020,
                format: 'DD/MM/YYYY',
                autoUpdateInput: false,
                autoApply: true,
                // autoClose: true,
                // showOtherMonths: true,
                // alwaysShowCalendars: false,
                useCurrent: false,
                allowInputToggle: true
            });

            $('#s_timeEnd').daterangepicker({
                timePicker: true,
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 2020,
                format: 'DD/MM/YYYY',
                autoUpdateInput: false,
                autoApply: true,
                // autoClose: true,
                // showOtherMonths: true,
                // alwaysShowCalendars: false,
                useCurrent: false,
                allowInputToggle: true
            });
            $('#s_timeStart').on('apply.daterangepicker', function (ev, picker) {
                $(this).val(picker.startDate.format('DD/MM/YYYY HH:mm'));
                station.objSearch['s_timeStart'] = $(this).val();
                station.table.search(station.objSearch).draw();
            });
            // $('#s_timeStart').on('cancel.daterangepicker', function (ev, picker) {
            //     $(this).val(picker.startDate.format('DD/MM/YYYY HH:mm'));
            //     station.objSearch['s_timeStart'] = $(this).val();
            //     station.table.search(station.objSearch).draw();
            // });
            $('#s_timeEnd').on('apply.daterangepicker', function (ev, picker) {
                $(this).val(picker.startDate.format('DD/MM/YYYY HH:mm'));
                station.objSearch['s_timeEnd'] = $(this).val();
                station.table.search(station.objSearch).draw();
            });
            // $('#s_timeEnd').on('cancel.daterangepicker', function (ev, picker) {
            //     $(this).val(picker.startDate.format('DD/MM/YYYY HH:mm'));
            //     station.objSearch['s_timeEnd'] = $(this).val();
            //     station.table.search(station.objSearch).draw();
            // });
        }
    });

    var search = $.fn.dataTable.util.throttle(
        function (val) {
            station.table.search(val).draw();
        },
        1000
    );

    global.showLoading();
    var draw = 0;
    station.table = $('#tableDataView').DataTable({
        columnDefs: [
            {
                orderable: false,
                // targets: 0,
                // className: 'select-checkbox',
                // checkboxes: {
                //     selectRow: true
                // }
            }
        ],
        // select: {
        //     style: 'multi',
        //     // selector: 'td:first-child',
        //     type: 'checkbox'
        // },
        "pagingType": "full_numbers",
        "lengthMenu": [
            [10, 25, 50],
            [10, 25, 50]
        ],
        "lengthChange": true,
        "searchDelay": 1500,
        "searching": false,
        "ordering": false,
        "info": true,
        "autoWidth": true,
        "scrollX": true,
        "responsive": false,
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Nhập thông tin tìm kiếm",
        },
        // "select": {
        //     "style": "single"
        // },
        "processing": true,
        "serverSide": true,
        "columns": [
            // {"data": ""},
            {"data": "indexCount", "render": $.fn.dataTable.render.text()},
            {"data": "control"},
            {"data": "objectType", "render": $.fn.dataTable.render.text()},
            {"data": "objectName", "render": $.fn.dataTable.render.text()},
            {"data": "stationCode", "render": $.fn.dataTable.render.text()},
            {"data": "stationName", "render": $.fn.dataTable.render.text()},
            {"data": "riverName", "render": $.fn.dataTable.render.text()},
            {"data": "timeStart", "render": $.fn.dataTable.render.text()},
            {"data": "timeEnd", "render": $.fn.dataTable.render.text()},
            {"data": "timeAvg", "render": $.fn.dataTable.render.text()},
            {"data": "totalTurb", "render": $.fn.dataTable.render.text()},
            // {"data": "squareRiver", "render": $.fn.dataTable.render.text()},
            // {"data": "widthRiver", "render": $.fn.dataTable.render.text()},
            // {"data": "speedAvg"},
            // {"data": "speedMax"},
            // {"data": "deepAvg"},
            // {"data": "deepMax"},
            // {"data": "waterLevelStart"},
            // {"data": "waterLevelEnd"},
            // {"data": "waterLevelAvg"},
            // {"data": "note"},
            {"data": "linkFile"},
        ],
        initComplete: function () {
            // Apply the search
            this.api().columns().every(function () {
                var that = this;
                $('.table-data-input-search').on('keyup onchange', function () {
                    // let id = $(this).attr("id");
                    // // if (that.search() !== this.value) {
                    // //
                    // // }
                    // station.objSearch[id] = this.value;
                    // station.numOfInputSearch++;
                    // if (station.numOfInputSearch > 11) {
                    //     that.search(JSON.stringify(station.objSearch)).draw();
                    //     station.numOfInputSearch = 0;
                    // }
                    station.oldValue = this.___value___;
                    this.___value___ = this.value;
                    if (station.oldValue == this.___value___) return;
                    station.keyUpTime = new Date().getTime();
                    let id = $(this).attr('id');
                    station.objSearch[id] = this.value;
                    setTimeout(function () {
                        if (new Date().getTime() - station.keyUpTime > 1000) {
                            station.table.search(station.objSearch).draw();
                            station.keyUpTime = new Date().getTime();
                        }

                    }, 1100);
                });


            });
            $('.select_table').on('change', function () {
                let id = $(this).attr("id");
                station.objSearch[id] = this.value;
                station.table.search(JSON.stringify(station.objSearch)).draw();
            });
        },
        "ajax": {
            headers: {
                'Authorization': token
            },
            "url": apiUrl + "manual-input/get-list-liss-pagination",
            "method": "POST",
            "contentType": "application/json",
            "data": function (d) {
                console.log(d);
                draw = d.draw;
                return JSON.stringify({
                    "draw": d.draw,
                    "start": Math.round(d.start / d.length),
                    "length": d.length,
                    "search": JSON.stringify(station.objSearch)
                });
            },
            "dataFilter": function (response) {
                let responseJson = JSON.parse(response);
                console.log(responseJson);
                let dataRes = {
                    "draw": draw,
                    "recordsFiltered": responseJson.recordsTotal,
                    "recordsTotal": responseJson.recordsTotal,
                    "data": []
                };

                for (let i = 0; i < responseJson.content.length; i++) {
                    console.log(responseJson.content);
                    dataRes.data.push({
                        "": "",
                        "indexCount": i + 1,
                        "control": "<span class='fa fa-edit' title='Cập nhật'  onclick='station.preEdit(" + i + ")' style='cursor: pointer'></span>",
                        "createdAt": responseJson.content[i].createdAt,
                        // "deepAvg": responseJson.content[i].deepAvg,
                        // "deepMax": responseJson.content[i].deepMax,
                        "id": responseJson.content[i].id,
                        "objectType": responseJson.content[i].objectType,
                        "objectName": responseJson.content[i].objectName,
                        "linkFile": "<i class='fa fa-download' onclick='station.downloadFile('"+responseJson.content[i].linkFile+"')'></i>",
                        // "note": responseJson.content[i].note,
                        "riverName": responseJson.content[i].riverName,
                        // "speedAvg": responseJson.content[i].speedAvg,
                        // "speedMax": responseJson.content[i].speedMax,
                        // "squareRiver": responseJson.content[i].squareRiver,
                        "stationId": responseJson.content[i].stationId,
                        "stationCode": responseJson.content[i].stationCode,
                        "stationName": responseJson.content[i].stationName,
                        "timeAvg": responseJson.content[i].timeAvg,
                        "timeEnd": responseJson.content[i].timeEnd,
                        "timeStart": responseJson.content[i].timeStart,
                        "data": responseJson.content[i].data,
                        "totalTurb": responseJson.content[i].totalTurb,
                        // "waterLevelEnd": responseJson.content[i].waterLevelEnd,
                        // "waterLevelStart": responseJson.content[i].waterLevelStart,
                        // "widthRiver": responseJson.content[i].widthRiver,
                    })
                }

                return JSON.stringify(dataRes);
            }
        }
    });
    station.init();
    global.disableLoading();

    station.table.on('select', station.rowSelect)
        .on('deselect', station.rowDeselect);
    //set action for button control
    $('#btnCreate').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // set state for button control
        $('#btnCreate').css('display', 'none');
        $('#btnCopy').css('display', 'none');
        $('#btnDelete').css('display', 'none');
        $('#btnEdit').css('display', 'none');

        // set state for button save and back
        $('#btnSaveCreate').css('display', '');
        $('#btnBackCreate').css('display', '');

        // disable mouse click table
        $('#wrap_table_data').css('pointer-events', 'none');

        // clean form
        station.formReset();
    });

    $('#btnDoNew').click(function () {
        station.clientAction = 'insert';
        station.enabled_right();
        $("#btnSave").css("display", "inline");
        $("#btnDelete").css("display", "none");
        $("#btnUpdate").css("display", "none");
        $("#btnReset").css("display", "inline");
        $("#btnCancel").css("display", "inline");
        $("#btnDoNew").attr("disabled", true);
        $("#stationTypeId").prop("disabled", false);
        station.parameter.stationId = null;
        // if (station.tableParameter !== undefined) {
        // station.uuid = global.uuidv4();
        // station.objParameterSearch['s_uuid'] = station.uuid;
        //     station.objParameterSearch['s_stationId'] = station.parameter.stationId;
        //     station.tableParameter.clear().draw();
        // }
        // station.table.row(':eq('+station.indexOfRow+')', { page: 'current' }).deselect();
        station.togle_search();
        station.btnRefresh();
    });

    $('#btnCancel').click(function () {
        station.disabled_right();
        $("#btnSave").css("display", "none");
        $("#btnDelete").css("display", "none");
        $("#btnReset").css("display", "none");
        $("#btnCancel").css("display", "none");
        $("#btnDoNew").attr("disabled", false);
        if (station.indexOfRow > -1) {
            station.table.row(station.indexOfRow).deselect();
        }
        station.table.search(station.objSearch).draw();
        station.show_search();
    });

});
