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
varsort={
		selection : (x)=>{
			console.log('start : '+x);
			var i=0,j=0,k=0;
			for(i=0;i<x.length;i++){
				for(j=i;j<x.length;j++){
					if(x[i]*1>x[j+1]*1){
						k=x[i];
						x[i]=x[j+1];
						x[j+1]=k;
						console.log('j'+j);
					}
					console.log('z'+j);
				}
			}
			console.log('end : '+x);
			return x;
			},
	 bubble: x=>{
		 var arr = x, a=0, b=0;
		 for (var i=0;i<arr.length;i++){
			 for(var j=0;j<arr.length-1;i++){
				 if(a>b){
					 c=arr[i];
					 arr[i]=arr[i+1];
					 arr[i+1]=c;
				 }
			 }
		 }
		 return y;
	 },
	 insertion: x=>{
		 var arr = x, a=0, b=0;
		 for (var i=0;i<arr.length;i++){
			 for(var j=0;j<arr.length-1;i++){
				 if(a>b){
					 c=arr[i];
					 arr[i]=arr[i+1];
					 arr[i+1]=c;
				 }
			 }
		 }
		 return y;
	 },
	 ranking: x=>{
		 var arr = x, a=0, b=0;
		 for (var i=0;i<arr.length;i++){
			 for(var j=0;j<arr.length-1;i++){
				 if(a>b){
					 c=arr[i];
					 arr[i]=arr[i+1];
					 arr[i+1]=c;
				 }
			 }
		 }
		 return y;
	 }
}




