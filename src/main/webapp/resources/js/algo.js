var series = {
		arithmetic : (s,e)=>{
	        var sum =0;
	        var start =s*1 ;
	        var end =e*1;
		        for(var i=start;i<=end;i++){
	        	   sum += i;
		        }
		       return sum;
		},
		switchSeries : ()=>{
			var sum = 0;
			var start = 1;
			var end = 100;
			var opcode = 1;
			for(var i=start;i<=end;i++){
				sum = sum + (opcode * i);
				opcode = opcode * -1;
			}
			return sum;
		},
		geoSeries : x=> {
			var current = 1;
			var sum =0;
			for (var i=0;i<=x-1;i++){
				current += i;
				sum += current;
			}
			return sum;
		},
		diffSeries:x=>{},
		factorial : ()=>{},
		fibonacci : x=>{
			alert('확인 --->' + x);
		}
};




