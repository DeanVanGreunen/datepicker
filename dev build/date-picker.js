(function(){
    // CSS Utils
    function injectStyles(rule) { var div = $("<div />", {html: '&shy;<style>' + rule + '</style>'}).appendTo("body");}

    // Func Utils
    function generateUniqueID(length) {var result = '';var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';var charactersLength = characters.length;for ( var i = 0; i < length; i++ ) {result += characters.charAt(Math.floor(Math.random() * charactersLength));}return result;}

    //Code Generators
    function generateYears(dp_id, startYear){
        destroyYears(dp_id);
        let DatePickerYearsContainer = $($.parseHTML('<div></div>'))
            .addClass('date-picker-years');
        let DatePickerYearsContainerTitle = $($.parseHTML('<div></div>'))
            .addClass('date-picker-years-title');
        let DatePickerYearsContainerTitlePrevious = $($.parseHTML('<span></span>'))
            .addClass('date-picker-years-title-year-previous')
            .html('&nbsp; &lt; &nbsp;')
            .on('click',function(){
                generateYears(dp_id, parseInt($('div[dp_id='+ dp_id + ']').attr('startYear'))  - 16);
            });
        let DatePickerYearsContainerTitleSelectAYear = $($.parseHTML('<span></span>')).addClass('date-picker-years-title-year').html('Select A Year');
        let DatePickerYearsContainerTitleNext = $($.parseHTML('<span></span>'))
            .addClass('date-picker-years-title-year-next')
            .html('&nbsp; &gt; &nbsp;')
            .on('click',function(){
                generateYears(dp_id, parseInt($('div[dp_id='+ dp_id + ']').attr('startYear')) + 16);
            });
        DatePickerYearsContainerTitle.append(DatePickerYearsContainerTitlePrevious)
            .append(DatePickerYearsContainerTitleSelectAYear)
            .append(DatePickerYearsContainerTitleNext)
            .append(DatePickerYearsContainerTitle);
        let DatePickerYearsContainerTable = $($.parseHTML('<div></div>'))
            .addClass('date-picker-years-table');
        let DatePickerYearsContainerTableTable = $($.parseHTML('<table></table>'))
            .addClass('date-picker-years-table-table');
        let DatePickerYearsContainerTableTableRows = Array();
        startYear =  parseInt(startYear) || parseInt($('div[dp_id='+ dp_id + ']').attr('startYear')); //2019 -> 2015
        $('div[dp_id='+ dp_id + ']').attr('startYear', startYear);
        let year = parseInt(startYear);
        DatePickerYearsContainerTitleSelectAYear.html(year + ' - ' + (year + 15)); // Set Year From - To Title
        for(var x=0; x<4;x++){
            let DatePickerYearsContainerTableTableRow = $($.parseHTML('<tr></tr>'));
            for(var y=0; y<4;y++){
                let DatePickerYearsContainerTableTableRowEntry = $($.parseHTML('<td></td>'))
                    .html(year)
                    .on('click', function(){
                        selectYearAndDisplayMonths(this);
                    });
                    year = year + 1;
                    DatePickerYearsContainerTableTableRow.append(DatePickerYearsContainerTableTableRowEntry);
            }
            DatePickerYearsContainerTableTableRows.push(DatePickerYearsContainerTableTableRow);
        }
        DatePickerYearsContainerTableTable.append(DatePickerYearsContainerTableTableRows);
        DatePickerYearsContainer.append(DatePickerYearsContainerTableTable);
        $('div[dp_id='+ dp_id + ']').append(DatePickerYearsContainer);
    }

    function generateMonths(dp_id, selectedyear){
        destroyMonths(dp_id);
        let startYear = $('input[dp_id='+ dp_id + ']').attr('startYear');
        let DatePickerMonthsContainer = $($.parseHTML('<div></div>'));
            DatePickerMonthsContainer.addClass('date-picker-months');
        let DatePickerMonthsContainerTitle = $($.parseHTML('<div></div>'));
            DatePickerMonthsContainerTitle.addClass('date-picker-months-title');
        let DatePickerMonthsContainerTitleYear = $($.parseHTML('<span></span>'));
            DatePickerMonthsContainerTitleYear.addClass('date-picker-months-title-year');
            DatePickerMonthsContainerTitleYear.html(selectedyear);
            DatePickerMonthsContainerTitleYear.on('click',function(){
                hideDaysContainer(dp_id);
                hideMonthsContainer(dp_id);
                generateYears(dp_id, selectedyear);
                showYearsContainer();
            });
        DatePickerMonthsContainerTitle.append(DatePickerMonthsContainerTitleYear);
        DatePickerMonthsContainer.append(DatePickerMonthsContainerTitle);
        let DatePickerMonthsContainerTableContainer = $($.parseHTML('<div></div>'))
            .addClass('date-picker-months-table');
        let DatePickerMonthsContainerTableContainerTable = $($.parseHTML('<table></table>'))
            .addClass('date-picker-months-table-table');

        let DatePickerMonthsContainerTableContainerTableRow_1Entry_1 = $($.parseHTML('<td></td>'))
            .html('Jan')
            .on('click', function(){
                selectMonthAndDisplayDays(this);
            });
        let DatePickerMonthsContainerTableContainerTableRow_1Entry_2 = $($.parseHTML('<td></td>'))
            .html('Feb')
            .on('click', function(){
                selectMonthAndDisplayDays(this);
            });
        let DatePickerMonthsContainerTableContainerTableRow_1Entry_3 = $($.parseHTML('<td></td>'))
            .html('Mar')
            .on('click', function(){
                selectMonthAndDisplayDays(this);
            });
        let DatePickerMonthsContainerTableContainerTableRow_1Entry_4 = $($.parseHTML('<td></td>'))
            .html('Apr')
            .on('click', function(){
                selectMonthAndDisplayDays(this);
            });
        let DatePickerMonthsContainerTableContainerTableRow_1Entry_5 = $($.parseHTML('<td></td>'))
            .html('May')
            .on('click', function(){
                selectMonthAndDisplayDays(this);
            });
        let DatePickerMonthsContainerTableContainerTableRow_1Entry_6 = $($.parseHTML('<td></td>'))
            .html('Jun')
            .on('click', function(){
                selectMonthAndDisplayDays(this);
            });
        let DatePickerMonthsContainerTableContainerTableRow_1 = $($.parseHTML('<tr></tr>'));
        DatePickerMonthsContainerTableContainerTableRow_1.append(DatePickerMonthsContainerTableContainerTableRow_1Entry_1)
            .append(DatePickerMonthsContainerTableContainerTableRow_1Entry_2)
            .append(DatePickerMonthsContainerTableContainerTableRow_1Entry_3)
            .append(DatePickerMonthsContainerTableContainerTableRow_1Entry_4)
            .append(DatePickerMonthsContainerTableContainerTableRow_1Entry_5)
            .append(DatePickerMonthsContainerTableContainerTableRow_1Entry_6)
            .append(DatePickerMonthsContainerTableContainerTableRow_1);
        let DatePickerMonthsContainerTableContainerTableRow_2Entry_1 = $($.parseHTML('<td></td>'))
            .html('Jul')
            .on('click', function(){
                selectMonthAndDisplayDays(this);
            });
        let DatePickerMonthsContainerTableContainerTableRow_2Entry_2 = $($.parseHTML('<td></td>'))
            .html('Aug')
            .on('click', function(){
                selectMonthAndDisplayDays(this);
            });
        let DatePickerMonthsContainerTableContainerTableRow_2Entry_3 = $($.parseHTML('<td></td>'))
            .html('Sep')
            .on('click', function(){
                selectMonthAndDisplayDays(this);
            });
        let DatePickerMonthsContainerTableContainerTableRow_2Entry_4 = $($.parseHTML('<td></td>'))
            .html('Oct')
            .on('click', function(){
                selectMonthAndDisplayDays(this);
            });
        let DatePickerMonthsContainerTableContainerTableRow_2Entry_5 = $($.parseHTML('<td></td>'))
            .html('Nov')
            .on('click', function(){
                selectMonthAndDisplayDays(this);
            });
        let DatePickerMonthsContainerTableContainerTableRow_2Entry_6 = $($.parseHTML('<td></td>'))
            .html('Dec')
            .on('click', function(){
                selectMonthAndDisplayDays(this);
            });
        let DatePickerMonthsContainerTableContainerTableRow_2 = $($.parseHTML('<tr></tr>'));
        DatePickerMonthsContainerTableContainerTableRow_2.append(DatePickerMonthsContainerTableContainerTableRow_2Entry_1)
            .append(DatePickerMonthsContainerTableContainerTableRow_2Entry_2)
            .append(DatePickerMonthsContainerTableContainerTableRow_2Entry_3)
            .append(DatePickerMonthsContainerTableContainerTableRow_2Entry_4)
            .append(DatePickerMonthsContainerTableContainerTableRow_2Entry_5)
            .append(DatePickerMonthsContainerTableContainerTableRow_2Entry_6);
        DatePickerMonthsContainerTableContainerTable.append(DatePickerMonthsContainerTableContainerTableRow_2);
        DatePickerMonthsContainerTableContainer.append(DatePickerMonthsContainerTableContainerTable);
        DatePickerMonthsContainer.append(DatePickerMonthsContainerTableContainer);
        $('div[dp_id='+ dp_id + ']').append(DatePickerMonthsContainer);

    }   

    function generateDays(dp_id, month, year){ //month is 1 - 12; Jan to Dec
        destroyDays(dp_id);
        let DatePickerDaysContainer =  $($.parseHTML('<div></div>'))
            .addClass('date-picker-days');
        let DatePickerDaysContainerTitle =  $($.parseHTML('<div></div>'))
            .addClass('date-picker-days-title');

        let DatePickerDaysContainerTitleMonth =  $($.parseHTML('<span></span>'))
            .addClass('date-picker-days-title-month')
            .html(month)
            .on('click', function(){
                GotoYearAndDisplayMonths(year,dp_id);
            });
        let DatePickerDaysContainerTitleDashSeperator =  $($.parseHTML('<span></span>'))
            .html('&nbsp;-&nbsp;');
        let DatePickerDaysContainerTitleYear =  $($.parseHTML('<span></span>'));
            DatePickerDaysContainerTitleYear.addClass('date-picker-days-title-year')
            .html(year)
            .on('click', function(){
                generateYears(dp_id, year);
                hideDaysContainer(dp_id);
                hideMonthsContainer(dp_id);
                showYearsContainer(dp_id);
            });

        DatePickerDaysContainerTitle.append(DatePickerDaysContainerTitleMonth)
            .append(DatePickerDaysContainerTitleDashSeperator)
            .append(DatePickerDaysContainerTitleYear);

        DatePickerDaysContainer.append(DatePickerDaysContainerTitle);

        let DatePickerDaysContainerTableContainer =  $($.parseHTML('<div></div>'))
            .addClass('date-picker-days-table');
        
        let DatePickerDaysContainerTableContainerTable =  $($.parseHTML('<table></table>'))
            .addClass('date-picker-days-table-table');
        
        let DatePickerDaysContainerTableContainerTableRow_1 =  $($.parseHTML('<tr></tr>'))
            .append($($.parseHTML('<th>M</th>')))
            .append($($.parseHTML('<th>T</th>')))
            .append($($.parseHTML('<th>W</th>')))
            .append($($.parseHTML('<th>T</th>')))
            .append($($.parseHTML('<th>F</th>')))
            .append($($.parseHTML('<th>S</th>')))
            .append($($.parseHTML('<th>S</th>')));

        
        DatePickerDaysContainerTableContainerTable.append(DatePickerDaysContainerTableContainerTableRow_1);

        // Generate 5 Rows, skip x space, increment.
        // Find which day the 1st of Month starts on.
        // Get N amount of days in said month.
        let dayOfTheWeekForThe1stOfTheMonth = [2, 3, 4, 5,6, 7, 1][(new Date(1, month, year)).getDay()]; //dd, mm, yyy
        let totalDaysInMonth = new Date(year, month + 1, 0).getDate();
        let skip = dayOfTheWeekForThe1stOfTheMonth - 1;
        let counter = 0;
        let cal_i = 1;
        for(var i=0;i<5;i++){
            let DatePickerDaysContainerTableContainerTableRow_X = $($.parseHTML('<tr></tr>'));
                for(var di=0;di<7;di++){
                    if(skip > counter){
                        DatePickerDaysContainerTableContainerTableRow_X.append($($.parseHTML('<td>&nbsp;</td>')));
                    } else if(cal_i <= totalDaysInMonth + 1){
                        let DatePickerDaysContainerTableContainerTableRow_X_DAY = $($.parseHTML('<td>'+cal_i+'</td>'))
                        .on('click', function(){                            
                            selectDayAndSubmitDate(this);
                        });
                        DatePickerDaysContainerTableContainerTableRow_X.append(DatePickerDaysContainerTableContainerTableRow_X_DAY);
                        cal_i = cal_i + 1;
                    }
                    counter = counter + 1;
                }
            DatePickerDaysContainerTableContainerTable.append(DatePickerDaysContainerTableContainerTableRow_X);
        }

        DatePickerDaysContainerTableContainer.append(DatePickerDaysContainerTableContainerTable);

        DatePickerDaysContainer.append(DatePickerDaysContainerTableContainer);

        $('div[dp_id='+ dp_id + ']').append(DatePickerDaysContainer);
    }

    //Destroy | Clean Up Code
    function destroyYears(dp_id){$('div[dp_id='+ dp_id + '] > .date-picker-years').parent().html('');}
    function destroyMonths(dp_id){$('div[dp_id='+ dp_id + '] > .date-picker-months').parent().html('');}
    function destroyDays(dp_id){$('div[dp_id='+ dp_id + '] > .date-picker-days').parent().html('');}

    // Visibilty
    function hideYearsContainer(dp_id){$('div[dp_id='+ dp_id + '] > .date-picker-years').addClass('hide');}
    function showYearsContainer(dp_id){$('div[dp_id='+ dp_id + '] > .date-picker-years').removeClass('hide');}
    function hideMonthsContainer(dp_id){$('div[dp_id='+ dp_id + '] > .date-picker-months').addClass('hide');}
    function showMonthsContainer(dp_id){$('div[dp_id='+ dp_id + '] > .date-picker-months').removeClass('hide');}
    function hideDaysContainer(dp_id){$('div[dp_id='+ dp_id + '] > .date-picker-days').addClass('hide');}
    function showDaysContainer(dp_id){$('div[dp_id='+ dp_id + '] > .date-picker-days').removeClass('hide');}

    function selectYearAndDisplayMonths(el){
        let selectedyear = $(el).html();
        let datePicker_ID = $(el).parent().parent().parent().parent().attr('dp_id');
        $(el).parent().parent().parent().parent().attr('selectedyear',selectedyear);
        generateMonths(datePicker_ID, selectedyear);
        hideYearsContainer(datePicker_ID);
        hideDaysContainer(datePicker_ID);
        showMonthsContainer(datePicker_ID);
    }
    
    function GotoYearAndDisplayMonths(year, datePicker_ID){
        hideDaysContainer(datePicker_ID);
        hideYearsContainer(datePicker_ID);
        generateMonths(datePicker_ID, year);
        showMonthsContainer(datePicker_ID);
    }

    function selectMonthAndDisplayDays(el){
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let selectedmonth = $(el).html();
        let month = months.indexOf(selectedmonth) + 1;
        let datePicker_ID = $(el).parent().parent().parent().parent().parent().attr('dp_id');
        $(el).parent().parent().parent().parent().parent().attr('selectedmonth', month);
        let year = $(el).parent().parent().parent().parent().parent().attr('selectedyear');
        hideYearsContainer(datePicker_ID);
        hideMonthsContainer(datePicker_ID);
        generateDays(datePicker_ID, month, year);
        showDaysContainer(datePicker_ID);
    }

    function selectDayAndSubmitDate(el){
        $(el).parent().parent().parent().parent().parent().attr('selectedday', $(el).html());
        let dp_id = $(el).parent().parent().parent().parent().parent().attr('dp_id');
        let day = $(el).parent().parent().parent().parent().parent().attr('selectedday');
        let month = $(el).parent().parent().parent().parent().parent().attr('selectedmonth');
        let year = $(el).parent().parent().parent().parent().parent().attr('selectedyear');
        $('input[dp_id='+ dp_id + ']').val(day + '/' + month + '/' + year);
        hideYearsContainer(dp_id);
        hideMonthsContainer(dp_id);
        hideDaysContainer(dp_id);
    }

    //Get All Inputs where datepicker="true"
    let inputs = $("input[datepicker=true]");

    // For Each Input field
    $(inputs).each(function(el){

        // Apply Unique ID to the datepicker_div set.
        let UID = generateUniqueID(12);
        $(this).attr('dp_id', UID);

        // Default Action, Show Days
        $(this).on('click', function(){
            hideDaysContainer(UID);
            hideMonthsContainer(UID);
            generateYears(UID, new Date().getFullYear());
            showYearsContainer(UID);
        });
        
        // Default to current date
        if($(this).val() == ""){
            var dd = String(new Date().getDate()).padStart(2, '0');
            var mm = String(new Date().getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = new Date().getFullYear();
            let today = dd + '/' + mm + '/' + yyyy;
            $(this).val(today);
        }

        // Internals
        let date_value = $(this).val();
        let date_value_day = date_value.split('/')[0];
        let date_value_month = date_value.split('/')[1];
        let date_value_year = date_value.split('/')[2];

        // Set Start Dates To Current Value
        $(this).attr('startDay', date_value_day);
        $(this).attr('startMonth', date_value_month);
        $(this).attr('startYear', date_value_year);

        // DatePicker Container
        let DPC = $($.parseHTML('<div></div>'));
        DPC.attr('dp_id',UID);
        DPC.addClass('date-picker');
        $('body').append(DPC);

        //Align DatePicker With Input Field
        var elm = $(this);
        var posY_top = (elm.offset().top + elm.outerHeight() + 4);
        var posX_left = elm.offset().left;
        DPC.css('top', posY_top);
        DPC.css('left', posX_left);
        
        generateYears(UID, date_value_year);
        
        hideDaysContainer(UID);
        hideMonthsContainer(UID);
        hideYearsContainer(UID);
        
    });
    //OPTIONAL: Can Include CSS HERE
    //injectStyles('body { background-color: red; }');
})();