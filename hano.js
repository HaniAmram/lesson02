var http = require('http'); 
var url = require('url');
var queryString = require('querystring');



http.createServer(function (request, response) {
function fibonacci(n) { 
  if (n==0) {return 0;}  
  else
   if (n==1) {return 1;}
  else  { var x = fibonacci(n-1)+fibonacci(n-2);
          return x  ;} 
} 

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var oQueryParams;
				response.writeHead(200, {'Content-Type': 'text/html' }); 
				response.write('<span style="color:black; font-weight: bold; font-size:2em;">Q3+Q4 - Http Server</h1>'+'</span>'+'<br>'+'<br>');
			 if (request.url.indexOf('?') >= 0) {
                 oQueryParams = queryString.parse(request.url.replace(/^.*\?/, ''));
                 console.log(oQueryParams);         } 

var href_str     = url.format(url.parse(request.url,true).href)	;
var search_str   = url.format(url.parse(request.url,true).search) ;
var first_param  = search_str.substring(search_str.indexOf('?')+1,search_str.indexOf('=')) ; 
var first_param_val = new Number(url.format(url.parse(request.url,true).query.a)); 
var scnd_param   = search_str.substr(search_str.indexOf('&')+1,1) ;  
var scnd_param_val = new Number(url.format(url.parse(request.url,true).query.b)) ;
var fib_param = new Number(url.format(url.parse(request.url,true).query.num)) ;
var pathname_str = url.format(url.parse(request.url,true).pathname).substr(1,url.format(url.parse(request.url,true).pathname).length) ;  

	if ((pathname_str!='add')&&(pathname_str!='subtract')&&(pathname_str!='multiply')&&(pathname_str!='divide')&&(pathname_str!='fibonacci')){
		response.end('No arithmetic action was requiered'+'<br>');
	} else if(  ((search_str.substr(1,search_str.length-1).search("a="))<0  ||
	            (search_str.substr(1,search_str.length-1).search("b="))<0  ) &&
				((pathname_str!='fibonacci')||(search_str.substr(1,search_str.length-1).search("num="))<0)
				)
				
	  {response.end('The URL structure doesnt fit server settings');
	  
	} else if ( !(isNumber(first_param_val))||
	            !(isNumber(scnd_param_val)) ||
				!(isNumber(fib_param)))
      {response.end('Parameters dont contain valid numbers');
	} else{
		
	if((pathname_str=='add')||(pathname_str=='subtract')||(pathname_str=='multiply')||(pathname_str=='divide')){	
	                response.write( 'The requested method is : '+url.parse(request.url,true).pathname.substring(1,request.url.indexOf('?')) +'</br>'
					              +'The first param. is : ' + first_param +' '+'='+first_param_val+'</br>'
				                  +'The scond param. is : ' + scnd_param+' '+'='+scnd_param_val +'</br>')}
	if(pathname_str=='fibonacci') { 
         	        response.write('The fibonacci parameter is '+ fib_param +'</br>')}
																 
	
	//response.write( JSON.stringify( url.parse(request.url,true).query ) );
	 if (pathname_str=='add'){var add_res =first_param_val+scnd_param_val;
                           	  response.write ('The result is '+add_res+'<br>');
							  }
else if (pathname_str=='subtract'){var sub_res =first_param_val-scnd_param_val;
                           	  response.write ('The result is '+sub_res+'<br>');
							  }	
else if (pathname_str=='multiply'){var mul_res =first_param_val*scnd_param_val;
                           	  response.write ('The result is '+mul_res+'<br>');
							  }		
else if (pathname_str=='divide'){var div_res =first_param_val/scnd_param_val;
                           	  response.write ('The result is '+div_res+'<br>');
							  }	
else //if (pathname_str=='fibonacci')
                              {var fib_res =fibonacci(fib_param);
                           	  response.write ('The result is '+fib_res+'<br>');
							  }								  
//else                              {response.write ('No arithmetic action was requiered'+'<br>');
							  }									  
			response.end( '<br>'+'href is : '+url.parse(request.url,true).href +'</br>'
			           +'search is : ' +url.parse(request.url,true).search +'<br>'
						+'query is : '+url.parse(request.url,true).query.a + '<br>'
						+'pathname is : '+pathname_str //+url.parse(request.url,true).pathname + '<br>' 			
						)	;					
			
}).listen(9615); 
