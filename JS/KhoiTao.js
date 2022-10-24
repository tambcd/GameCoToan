var imported = document.createElement('script');
imported.src = 'JS/Sources.js';
document.head.appendChild(imported);

//
function VeBanCoTrangDen(){
	for(var i = 1; i < 12; i++){
		for(var j = 1; j < 10; j++){
			document.getElementById(i.toString() +"_"+ j.toString()).style.backgroundColor = "rgb(255,255,255)";
			if(i % 2 != 0 ){
				if(j % 2 == 0)
					document.getElementById(i.toString() +"_"+ j.toString()).style.backgroundColor = "rgb(170,182,155)";
			}else{
				if(j % 2 != 0)
					document.getElementById(i.toString() +"_"+ j.toString()).style.backgroundColor = "rgb(170,182,155)";
			}
		}
	}
}
// Đặt các quân cờ
function DatCo(){
	for( i = 2; i < 11; i++){
		for(j = 1; j < 10; j++){
			if(i == 2 && j ==5 ){
				continue;
			}
			if(i == 10 && j ==5 ){
				continue;
			}
			document.getElementById("i" + i.toString() + j.toString()).src = "QuanCo/Rong.png";
		}
	}
	
	// Quân đen
	for(var i = 1; i < 10; i++){
		document.getElementById("i1" + i.toString()).src = CoDo.CoD[i];		
	}
	document.getElementById("i25").src =  CoDo.CoD[0];	
	// Quân đỏ
	for(var i = 1; i < 10; i++){
		document.getElementById("i11" + (10-i).toString()).src = CoDen.CoX[i];		
	}
	document.getElementById("i105").src = CoDen.CoX[0];
	
}
