function valid_time(time) {
  var close = new Date();
  close.setHours(21, 30, 0, 0);
  var open = new Date();
  open.setHours(8, 30, 0, 0);
  if (time < close && time > open) return true;
  else return false;
}

function date_present(dates_arr, date) {
  date.setHours(0,0,0,0);
  var res = false;
  $.each(dates_arr, function(_, single_date) {
    if (date - single_date == 0) {
      res = true;
      return false;
    }
  });
  return res;
}

$(document).ready(function() {
  var res = false;

  var holidays = [
    {id: 1, date: "Jan 1 2013"},
    {id: 2, date: "Mar 29 2013"},
    {id: 3, date: "Apr 1 2013"},
    {id: 4, date: "May 1 2013"},
    {id: 5, date: "Jun 24 2013"},
    {id: 6, date: "Aug 15 2013"},
    {id: 7, date: "Sep 11 2013"},
    {id: 11, date: "Dec 25 2013"},
    {id: 12, date: "Dec 26 2013"}
  ];

  var arr_holidays = [];
  $.each(holidays, function(_, datestr) {
    arr_holidays.push(new Date(datestr.date));
  });

  var openings = [
    {id: 1, date: "Jan 13 2013"},
    {id: 2, date: "Jul 7 2013"},
    {id: 3, date: "Dec 8 2013"},
    {id: 4, date: "Dec 15 2013"},
    {id: 5, date: "Dec 22 2013"},
  ];

  var arr_openings = [];
  $.each(openings, function(_, datestr) {
    arr_openings.push(new Date(datestr.date));
  });

  var today = new Date();
  if (!date_present(arr_holidays, today)) {
    if (!today.getDay() == 0) {
      res = true;
    }
    else if (date_present(arr_openings, today))
      res = true;
  }

  if (res && valid_time(new Date())) $("#isopen > h1").html("Yes.");
  else $("#isopen > h1").html("No.");
});
