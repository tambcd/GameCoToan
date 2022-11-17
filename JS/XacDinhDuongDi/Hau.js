var TongNuocDi=[]
function Hau(id,step){
	TongNuocDi=[];
	Tuong(id,step);
	Xe(id,step);
	
	var X = id.substring(0, id.indexOf('_'));
	var Y = id.substring(id.indexOf('_')+1);  
	
	if(!isCoDo(X,Y)){
		// console.log("check nươc đi ", TongNuocDi)
		DiChuyen(id,TongNuocDi[Math.floor(Math.random() * TongNuocDi.length)]);
	}
}