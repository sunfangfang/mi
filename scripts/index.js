window.onload=function(){
	var bnn=document.getElementsByClassName('Bnn-img'),
		link=document.getElementsByClassName('small-link'),
		secImg=document.getElementById('sec-img'),
		left=document.getElementById('bigleft'),
		right=document.getElementById('bigright'),
		timerId,previous=bnn[0],last=link[0],kaiguan=true,
		fn=(function(){
			var index=1;
			return function(){
				previous.setAttribute('class','Bnn-img');
				last.setAttribute('class','small-link');
				bnn[index].setAttribute('class','Bnn-img img1');
				link[index].setAttribute('class','small-link show');
				last=link[index];
				previous=bnn[index];
				index++;
				if(index==bnn.length){
					index=0;
				}	
			};
		})();
	timerId=setInterval(fn,1000);
	secImg.onmouseover=function(){
		clearInterval(timerId);
	}
	secImg.onmouseout=function(){
		if(kaiguan){
			clearInterval(timerId);
			timerId=setInterval(fn,1000);
		}
	}
	for(var i=0;i<link.length;i++){
		link[i].xx=i;
		link[i].onclick=function(){
			clearInterval(timerId);
			kaiguan=false;
			previous.setAttribute('class','Bnn-img');
			last.setAttribute('class','small-link');
			this.setAttribute('class','small-link show');
			bnn[this.xx].setAttribute('class','Bnn-img img1');
			previous=bnn[this.xx];
			last=this;
			index=this.xx+1;
			return false;
		}
	}
	
	left.onclick=function(){
		var i=0;
		clearInterval(timerId);
		kaiguan=false;
		previous.setAttribute('class','Bnn-img');
		var next=(previous.previousElementSibling)?previous.previousElementSibling:bnn[4];
		next.setAttribute('class','Bnn-img img1');
		previous=next;
		last.setAttribute('class','small-link');
		var next1=(last.previousElementSibling)?last.previousElementSibling:link[4];
		next1.setAttribute('class','small-link show');
		last=next1;
		i++;
			
	};
	right.onclick=function(){
		clearInterval(timerId);
		kaiguan=false;
		previous.setAttribute('class','Bnn-img');
		var next=(previous.nextElementSibling)?previous.nextElementSibling:bnn[0];
		next.setAttribute('class','Bnn-img img1');
		previous=next;
		last.setAttribute('class','small-link');
		var next1=(last.nextElementSibling)?last.nextElementSibling:link[0];
		next1.setAttribute('class','small-link show');
		last=next1;
	};


};