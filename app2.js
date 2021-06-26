function launch() {
	var data = "dkr_run";
	var url = "http://192.168.29.193/cgi-bin/server.py?dkr="
	cmdpmt(data,url);
}

function ss() {
	var data = "start_stop";
	var url = "http://192.168.29.193/cgi-bin/server.py?dkr="
	cmdpmt(data,url);
}

function remove() {
	var data = "dkr_remove";
	var url = "http://192.168.29.193/cgi-bin/server.py?dkr="
	cmdpmt(data,url);
}

function show() {
	var data = "dkr_show";
	var url = "http://192.168.29.193/cgi-bin/server.py?dkr="
	cmdpmt(data,url);
}


function terminal() {
	var data = "cmdin";
	var url = "http://192.168.29.193/cgi-bin/server.py?x="
	cmdpmt(data,url);
}

function cmdpmt(data_id,url) {
  var xhr = new XMLHttpRequest();
  var i = document.getElementById(data_id).value 
  xhr.open("GET" , url  + i , true);
  xhr.send();
      
  xhr.onload = function() {
          var output = xhr.responseText;
          document.getElementById("cmdout").innerHTML = output ;
  }
}

var ifenter = document.getElementById("cmdin");

ifenter.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit_btn").click();
  }
});

/*
function dkr() {
  var rn = new XMLHttpRequest();
  var dkrop = document.getElementById('operation').value
  rn.open("GET" , "http://192.168.29.193/cgi-bin/server.py?dkr=" + dkrop  , true);
  rn.send();
      
  rn.onload = function() {
          var operationop = rn.responseText;
          document.getElementById("cmdout").innerHTML = operationop ;
  }
}*/
