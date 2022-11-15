function LuotDi(){
	var Temp = document.getElementById("iCoDen").src;
	document.getElementById("iCoDen").src = document.getElementById("iCoDo").src;
	document.getElementById("iCoDo").src = Temp;
}

function GetDiem(Name){
	switch(Name){
		case '1':
			return 50;		
		case '2':
			return 60;		
		case '3':
			return 70;		
		case '4':
			return 100;		
		case '5':
			return 150;
		case '6':
			return 200;
		case '7':
			return 250;
		case '8':
			return 300;		
		case '9':
			return 350;				
		case '0':
			return 400;		
		default:
			return 0;
		
	}
}

function DoiMau(X, Y){
	document.getElementById(X.toString() +"_"+ Y.toString()).style.backgroundColor = "#F6CD61";
}

function GetColor(id){
	var rgb = document.getElementById(id).style.backgroundColor;
	var Temp = rgb.substring(rgb.indexOf('(') + 1, rgb.length - 1);
	while(Temp.indexOf(' ') != -1){
		Temp = Temp.replace(" ", "");
	}
	return Temp; //rgb
}

function GetName(id){
	try{
		var src = document.getElementById("i" + id.replace('_', '')).src;
		var Ten = src.substring(src.lastIndexOf('/') + 1, src.length - 4);
		return Ten;
	}catch(err){
		return err;
	}
}

function isChieuVua(Name){
	return Name.localeCompare("Vua") == 0 ? true : false;
}

function isCoDo(X, Y){
	if((X>=1 && (X<=11))&&(Y>=1 && Y<=9)){
		var Temp = GetName(X.toString() +"_"+ Y.toString());
		Temp = Temp.substring(Temp.indexOf('_') + 1 );
		return Temp.localeCompare("Do") == 0 ? true : false;
	}else{
		return false;
	}
}

function isCoDen(X, Y){
	if((X>=1 && (X<=11))&&(Y>=1 && Y<=9)){
		var Temp = GetName(X.toString()+"_" + Y.toString());
		Temp = Temp.substring(Temp.indexOf('_') + 1 );
		return Temp.localeCompare("Den") == 0 ? true : false;
	}
	else{
		return false;
	}
}

function isRong(X, Y){
	var Temp = GetName(X.toString() +"_" + Y.toString());
	Temp = Temp.substring(Temp.indexOf('_') + 1 , Temp.length);
	return Temp.localeCompare("Rong") == 0 ? true : false;
}

function isBien(X, Y){
	if(X < 1 || X > 11)
		return true;
	else if(Y < 1 || Y > 9)
		return true;
	else
		return false;
}

function DiChuyen(id, idMoi){
	// console.log("idmoi", idMoi)
	if(id.localeCompare(idMoi) == 0 ||  GetColor(idMoi).localeCompare(Mau.NuocDi) != 0)
		return false;
	
	document.getElementById("i" + idMoi.replace('_', '')).src = document.getElementById("i" + id.replace('_', '')).src;
	document.getElementById("i" + id.replace('_', '')).src = CoDen.Rong;



	return true;
}	