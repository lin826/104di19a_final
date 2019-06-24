{/* Work on  https://pro.104-dev.com.tw/vip/message/msgMasters */}

// <input id="emailContent"> 內容 
// <input id="emailMan"> 聯絡窗口 to insert value=""
// <input name="meetingDate"> 面試日期 to insert value="YYYY/MM/DD"

// <select name="meetingHour" class="b-form__selector"> 時 to insert value=""
// <select name="meetingMinute" class="b-form__selector"> 分 to insert value=""

// // This can be used while data conflict
// if (confirm("Press a button!")) {
//   console.log("You pressed OK!");
// } else {
// 	console.log("You pressed Cancel!");
// }

function InfoParser(msg) {
	this.msg = msg;

	// Match Chinese characters(\u4e00-\u9fa5).
	function parseLocation(line) {
		return line.match(/[\u4e00-\u9fa5]{1,2}(線|市)[\u4e00-\u9fa5\w\d._-]+/u);
	}
	// Match phone numbers
	function parseContact(line) {
		return line.match(/([0-9\(\)\* ._-]{9,})/);
	}

	function parseDate(line) {
		d_str = m_line.match(/([A-Z0-9]+[年月日._-]?[A-Z0-9]+[年月日._-]?[0-9]+)/gi);
		let meet_date = new Date(d_str.toString().replace('年','/').replace('月','/').replace('日',''));
		return [meet_date.getFullYear(), meet_date.getMonth()+1, meet_date.getDate()].join('/');
	}
}


// Use this as the trigger of automation.
{/* <input type="checkbox" name="syncToCalendar" value="1"></input> */}
document.querySelector("input[name=syncToCalendar]").addEventListener( 'change', function() {
    if(this.checked) {
        try {
            ;
        } catch {
            ;
        }
    }
});