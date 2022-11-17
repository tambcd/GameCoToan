function Tuong(id, step){
	var X = id.substring(0, id.indexOf('_'));
	var Y = id.substring(id.indexOf('_')+1);  
	// console.log("huy test", id, step,isCoDo(X, Y));
	var checkCoDo = isCoDo(X, Y);
	var iX = 0, iY = 0;
	checkAnQuan(parseInt(X), parseInt(Y), id, checkCoDo);
	switch (checkCoDo){
// Co do
		case true:
			// Đi lên trên phải
			iX = parseInt(X);
			iY = parseInt(Y);
			var step_Top_Right = step;
			while (!isBien(iX - 1, iY + 1) && !isCoDo(iX - 1, iY + 1)  && step_Top_Right>0){
				if(isCoDen(iX - 1, iY + 1))
					break;
				DoiMau(iX - 1, iY + 1);
				iX -= 1;
				iY += 1;
				step_Top_Right-=1;
			}
			
			// Đi lên trên bên trái
			iX = parseInt(X);
			iY = parseInt(Y);
			var step_Top_Left = step;
			while (!isBien(iX - 1, iY - 1) && !isCoDo(iX - 1, iY - 1) && step_Top_Left >0){
				if(isCoDen(iX - 1, iY - 1))
					break;
				DoiMau(iX - 1, iY - 1);
				iX -= 1;
				iY -= 1;
				step_Top_Left-=1;
			}
			
			// Đi xuống bên trái
			iX = parseInt(X);
			iY = parseInt(Y);
			var step_Bottom_Left= step;
			while (!isBien(iX + 1 , iY - 1)  && !isCoDo(iX + 1, iY - 1) && step_Bottom_Left>0){
				if(isCoDen(iX + 1, iY - 1))
					break;
				DoiMau(iX + 1, iY - 1);
				iX += 1;
				iY -= 1;
				step_Bottom_Left-=1;
			}
			
			// Đi xuống dưới bên phải
			iX = parseInt(X);
			iY = parseInt(Y);
			var step_Bottom_Right=step;
			while(!isBien(iX + 1, iY + 1) && !isCoDo(iX + 1, iY + 1)&& step_Bottom_Right>0){
				if(isCoDen(iX + 1, iY + 1))
					break;
				DoiMau(iX + 1, iY + 1);
				iX += 1;
				iY += 1;
				step_Bottom_Right-=1;
			}
		break;
		
		case false:
			console.log("check cờ đen");
			// var TongDi=[]
			// Co den
			// Đi lên bên phải
			iX = parseInt(X);
			iY = parseInt(Y);
			var step_Top_Right =step;
			while( !isBien(iX - 1, iY + 1) && !isCoDen(iX - 1, iY + 1) && step_Top_Right>0){
				if(isCoDo(iX -1, iY +1))
					break;
				if(isAI){
					TongNuocDi.push((iX-1)+"_"+(iY+1))
				}else{
					DoiMau(iX - 1, iY + 1);
				}
				iX--;
				iY++;
				step_Top_Right-=1;
			} 
			
			// Đi lên bên trái
			iX = parseInt(X);
			iY = parseInt(Y);
			var step_Top_Left =step;
			while(!isBien(iX - 1, iY - 1) && !isCoDen(iX - 1, iY -1) && step_Top_Left >0){
				if(isCoDo(iX -1, iY -1))
					break;
				if(isAI){
					TongNuocDi.push((iX-1)+"_"+(iY-1))
				}else{
					DoiMau(iX -1, iY -1);
				}
				iX--;
				iY--;
				step_Top_Left-=1;
			}
		
			// Đi dưới bên trái
			iX = parseInt(X);
			iY = parseInt(Y);
			var step_Bottom_Left =step;
			while(!isBien(iX + 1, iY - 1) && !isCoDen(iX + 1, iY - 1)&& step_Bottom_Left>0){
				if(isCoDo(iX + 1, iY - 1))
					break;
				if(isAI){
					TongNuocDi.push((iX+1)+"_"+(iY-1))
				}else{
					DoiMau(iX + 1, iY - 1);
				}
				iX++;
				iY--;
				step_Bottom_Left-=1;
			}
			
			//Đi dưới bên phải
			iX = parseInt(X);
			iY = parseInt(Y);
			var step_Bottom_Right =step;
			while(!isBien(iX + 1, iY + 1) && !isCoDen(iX + 1, iY + 1) && step_Bottom_Right>0){
				if(isCoDo(iX + 1, iY + 1))
					break;
					
				if(isAI){
					TongNuocDi.push((iX+1)+"_"+(iY+1))
				}else{
					DoiMau(iX + 1, iY + 1);
				}
				iX++;
				iY++;
				step_Bottom_Right-=1;
			}	
		break;
	}
		
}

function checkAnQuan(X,Y,id, checkCoDo){
	const QuanCo = parseInt(GetName(id).split('_')[0]);

	if(checkCoDo){
		// Check ăn quân trên
		if(isCoDo(X - 1, Y)){
			const Tren = parseInt(GetName((X-1).toString()+"_" + Y.toString()).split('_')[0]);
			const anQuanTren =AnQuan(QuanCo,Tren);
			console.log("Trên ", QuanCo, Tren,anQuanTren)
			anQuanTren.forEach((item)=>{
				if((((X-1)-item)>=1 && ((X-1)-item)<=11) && item>0 && isCoDen((X-1)-item, Y)){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDen(X-1-i,Y)){
							check= false;
							break;
						}
					}
					if(check){
						DoiMau((X-1)-item, Y);
					}
				}
			})
		}

		// Check ăn quân dưới
		if(isCoDo(X + 1, Y)){
			const Duoi = parseInt(GetName((X+1).toString()+"_" + Y.toString()).split('_')[0]);
			const anQuanDuoi =AnQuan(QuanCo,Duoi);
			console.log("Dưới ", QuanCo, Duoi,anQuanDuoi)
			anQuanDuoi.forEach((item)=>{
				if((((X+1)+item)>=1 && ((X+1)+item)<=11) && item>0 && isCoDen((X+1)+item, Y)){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDen(X+1+i,Y)){
							check= false;
							break;
						}
					}
					if(check){					
						DoiMau((X+1)+item, Y);
					}
				}
			})
		}

		// Check ăn quân Trái
		if(isCoDo(X, Y - 1)){
			const Trai = parseInt(GetName(X.toString()+"_" + (Y-1).toString()).split('_')[0]);
			const anQuanTrai =AnQuan(QuanCo,Trai);
			console.log("Trái ", QuanCo, Trai,anQuanTrai)
			anQuanTrai.forEach((item)=>{
				if(((Y-1)-item>=1 && (Y-1)-item<=9) && item>0 && isCoDen(X, (Y-1)-item)){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDen(X,Y-1-i)){
							check= false;
							break;
						}
					}
					if(check){					
						DoiMau(X, (Y-1)-item);
					}
				}
			})
		}

		// Check ăn quân Phải
		if(isCoDo(X, Y + 1)){
			const Phai = parseInt(GetName(X.toString()+"_" + (Y+1).toString()).split('_')[0]);
			const anQuanPhai =AnQuan(QuanCo,Phai);
			console.log("Phải ", QuanCo, Phai,anQuanPhai)
			anQuanPhai.forEach((item)=>{
				if(((Y+1)+item>=1 && (Y+1)+item<=9) && item>0 && isCoDen(X, (Y+1)+item)){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDen(X,Y+1+i)){
							check= false;
							break;
						}
					}
					if(check){					
						DoiMau(X, (Y+1)+item);
					}
				}
			})
		}

		// Check ăn quân trên phải
		if(isCoDo(X - 1, Y + 1)){
			const TrenPhai = parseInt(GetName((X-1).toString()+"_"+(Y+1).toString()).split('_')[0]);
			const anQuanTrenPhai =AnQuan(QuanCo,TrenPhai);
			console.log("Trên phải", QuanCo, TrenPhai,anQuanTrenPhai)
			anQuanTrenPhai.forEach((item)=>{
				if((((X-1)-item)>=1 && ((X-1)-item)<=11)&&((Y+1)+item>=1 && (Y+1)+item<=9)
					&& item>0 && isCoDen((X-1)-item, (Y+1)+item)
				){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDen(X-1-i,Y+1+i)){
							check= false;
							break;
						}
					}
					if(check){					
						DoiMau((X-1)-item, (Y+1)+item);
					}
				}
			})
		}

		// Check ăn quân trên trái
		if(isCoDo(X - 1, Y - 1)){
			const TrenTrai = parseInt(GetName((X-1).toString()+"_"+(Y-1).toString()).split('_')[0]);
			const anQuanTrenTrai =AnQuan(QuanCo,TrenTrai);
			console.log("Trên trái", QuanCo, TrenTrai,anQuanTrenTrai)
			anQuanTrenTrai.forEach((item)=>{
				if((((X-1)-item)>=1 && ((X-1)-item)<=11)&&((Y-1)-item>=1 && (Y-1)-item<=9)
				&& item>0 && isCoDen((X-1)-item, (Y-1)-item)
			){
				var check = true;
				for(var i=1 ;i<item;i++){
					if(isCoDen(X-1-i,Y-1-i)){
						check= false;
						break;
					}
				}
				if(check){					
					DoiMau((X-1)-item, (Y-1)-item);
				}
			}
			})
		}

		// Check ăn quân dưới phải
		if(isCoDo(X + 1, Y + 1)){
			const DuoiPhai = parseInt(GetName((X+1).toString()+"_"+(Y+1).toString()).split('_')[0]);
			const anQuanDuoiPhai =AnQuan(QuanCo,DuoiPhai);
			console.log("dưới phải", QuanCo, DuoiPhai,anQuanDuoiPhai)
			anQuanDuoiPhai.forEach((item)=>{
				if((((X+1)+item)>=1 && ((X+1)+item)<=11) && ((Y+1)+item>=1 && (Y+1)+item<=9)
					&& item>0 && isCoDen((X+1)+item, (Y+1)+item)
				){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDen(X+1+i,Y+1+i)){
							check= false;
							break;
						}
					}
					if(check){					
						DoiMau((X+1)+item, (Y+1)+item);
					}
				}
			})
		}
		
		// Check ăn quân dưới Trái
		if(isCoDo(X + 1, Y - 1)){
			const DuoiTrai = parseInt(GetName((X+1).toString()+"_"+(Y-1).toString()).split('_')[0]);
			const anQuanDuoiTrai =AnQuan(QuanCo,DuoiTrai);
			console.log("dưới trái", QuanCo, DuoiTrai,anQuanDuoiTrai)
			anQuanDuoiTrai.forEach((item)=>{
				if((((X+1)+item)>=1 && ((X+1)+item)<=11)&&((Y-1)-item>=1 && (Y-1)-item<=9)
					&& item>0 && isCoDen((X+1)+item, (Y-1)-item)
				){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDen(X+1+i,Y-1-i)){
							check= false;
							break;
						}
					}
					if(check){					
						DoiMau((X+1)+item, (Y-1)-item);
					}
				}
			})
		}
	}else{
		// Check ăn quân trên
		if(isCoDen(X - 1, Y)){
			const Tren = parseInt(GetName((X-1).toString()+"_" + Y.toString()).split('_')[0]);
			const anQuanTren =AnQuan(QuanCo,Tren);
			console.log("Trên ", QuanCo, Tren,anQuanTren)
			anQuanTren.forEach((item)=>{
				if((((X-1)-item)>=1 && ((X-1)-item)<=11) && item>0 && isCoDo((X-1)-item, Y)){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDo(X-1-i,Y)){
							check= false;
							break;
						}
					}
					if(check){
						if(isAI){
							TongNuocDi.push((X-1-item)+"_"+(Y))
						}else{
							DoiMau((X-1)-item, Y);
						}
					}
				}
			})
		}

		// Check ăn quân dưới
		if(isCoDen(X + 1, Y)){
			const Duoi = parseInt(GetName((X+1).toString()+"_" + Y.toString()).split('_')[0]);
			const anQuanDuoi =AnQuan(QuanCo,Duoi);
			console.log("Dưới ", QuanCo, Duoi,anQuanDuoi)
			anQuanDuoi.forEach((item)=>{
				if((((X+1)+item)>=1 && ((X+1)+item)<=11) && item>0 && isCoDo((X+1)+item, Y)){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDo(X+1+i,Y)){
							check= false;
							break;
						}
					}
					if(check){
						if(isAI){
							TongNuocDi.push((X+1+item)+"_"+(Y))
						}else{
							DoiMau((X+1)+item, Y);
						}
					}
				}
			})
		}

		// Check ăn quân Trái
		if(isCoDen(X, Y - 1)){
			const Trai = parseInt(GetName(X.toString()+"_" + (Y-1).toString()).split('_')[0]);
			const anQuanTrai =AnQuan(QuanCo,Trai);
			console.log("Trái ", QuanCo, Trai,anQuanTrai)
			anQuanTrai.forEach((item)=>{
				if(((Y-1)-item>=1 && (Y-1)-item<=9) && item>0 && isCoDo(X, (Y-1)-item)){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDo(X,Y-1-i)){
							check= false;
							break;
						}
					}
					if(check){
						if(isAI){
							TongNuocDi.push((X)+"_"+(Y-1-item))
						}else{
							DoiMau(X, (Y-1)-item);
						}
					}
				}
			})
		}

		// Check ăn quân Phải
		if(isCoDen(X, Y + 1)){
			const Phai = parseInt(GetName(X.toString()+"_" + (Y+1).toString()).split('_')[0]);
			const anQuanPhai =AnQuan(QuanCo,Phai);
			console.log("Phải ", QuanCo, Phai,anQuanPhai)
			anQuanPhai.forEach((item)=>{
				if(((Y+1)+item>=1 && (Y+1)+item<=9) && item>0 && isCoDo(X, (Y+1)+item)){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDo(X,Y+1+i)){
							check= false;
							break;
						}
					}
					if(check){
						if(isAI){		
							TongNuocDi.push((X)+"_"+(Y+1+item))
						}else{
							DoiMau(X, (Y+1)+item);
						}
					}
				}
			})
		}

		// Check ăn quân trên phải
		if(isCoDen(X - 1, Y + 1)){
			const TrenPhai = parseInt(GetName((X-1).toString()+"_"+(Y+1).toString()).split('_')[0]);
			const anQuanTrenPhai =AnQuan(QuanCo,TrenPhai);
			console.log("Trên phải", QuanCo, TrenPhai,anQuanTrenPhai)
			anQuanTrenPhai.forEach((item)=>{
				if((((X-1)-item)>=1 && ((X-1)-item)<=11)&&((Y+1)+item>=1 && (Y+1)+item<=9)
					&& item>0 && isCoDo((X-1)-item, (Y+1)+item)
				){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDo(X-i-1,Y+1+i)){
							check= false;
							break;
						}
					}
					if(check){
						if(isAI){							
							TongNuocDi.push((X-1-item)+"_"+(Y+1+item))
						}else{
							DoiMau((X-1)-item, (Y+1)+item);
						}
					}
				}
			})
		}

		// Check ăn quân trên trái
		if(isCoDen(X - 1, Y - 1)){
			const TrenTrai = parseInt(GetName((X-1).toString()+"_"+(Y-1).toString()).split('_')[0]);
			const anQuanTrenTrai =AnQuan(QuanCo,TrenTrai);
			console.log("Trên trái", QuanCo, TrenTrai,anQuanTrenTrai)
			anQuanTrenTrai.forEach((item)=>{
				if((((X-1)-item)>=1 && ((X-1)-item)<=11)&&((Y-1)-item>=1 && (Y-1)-item<=9)
				&& item>0 && isCoDo((X-1)-item, (Y-1)-item)
			){
				var check = true;
				for(var i=1 ;i<item;i++){
					if(isCoDo(X-i-1,Y-1-i)){
						check= false;
						break;
					}
				}
				if(check){
					if(isAI){
						TongNuocDi.push((X-1-item)+"_"+(Y-1-item))
					}else{
						DoiMau((X-1)-item, (Y-1)-item);
					}
				}
			}
			})
		}

		// Check ăn quân dưới phải
		if(isCoDen(X + 1, Y + 1)){
			const DuoiPhai = parseInt(GetName((X+1).toString()+"_"+(Y+1).toString()).split('_')[0]);
			const anQuanDuoiPhai =AnQuan(QuanCo,DuoiPhai);
			console.log("dưới phải", QuanCo, DuoiPhai,anQuanDuoiPhai)
			anQuanDuoiPhai.forEach((item)=>{
				if((((X+1)+item)>=1 && ((X+1)+item)<=11) && ((Y+1)+item>=1 && (Y+1)+item<=9)
					&& item>0 && isCoDo((X+1)+item, (Y+1)+item)
				){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDo(X+i+1,Y+1+i)){
							check= false;
							break;
						}
					}
					if(check){
						if(isAI){
							TongNuocDi.push((X+1)+item, (Y+1)+item);
						}else{
							DoiMau((X+1)+item, (Y+1)+item);
						}
					}
				}
			})
		}
		
		// Check ăn quân dưới Trái
		if(isCoDen(X + 1, Y - 1)){
			const DuoiTrai = parseInt(GetName((X+1).toString()+"_"+(Y-1).toString()).split('_')[0]);
			const anQuanDuoiTrai =AnQuan(QuanCo,DuoiTrai);
			console.log("dưới trái", QuanCo, DuoiTrai,anQuanDuoiTrai)
			anQuanDuoiTrai.forEach((item)=>{
				if((((X+1)+item)>=1 && ((X+1)+item)<=11)&&((Y-1)-item>=1 && (Y-1)-item<=9)
					&& item>0 && isCoDo((X+1)+item, (Y-1)-item)
				){
					var check = true;
					for(var i=1 ;i<item;i++){
						if(isCoDo(X+i+1,Y-1-i)){
							check= false;
							break;
						}
					}
					if(check){
						if(isAI){
							TongNuocDi.push((X+1)+item, (Y-1)-item);
						}else{
							DoiMau((X+1)+item, (Y-1)-item);
						}
					}
				}
			})
		} 
	}
	console.log("================================")		
}

function AnQuan(x,y){
	if(x<y){
		if(y===0){
			return [x+y,-1,x*y,-1,-1];
		}else{
			return [x+y,-1,x*y,Math.floor(x/y),x%y];
		}
	}else
		if(y===0)
		{
			return [x+y,x-y,x*y,-1,-1];
		}
		else {
			return [x+y,x-y,x*y,Math.floor(x/y),x%y];
		}
}