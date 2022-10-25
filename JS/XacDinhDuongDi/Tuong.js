function Tuong(id, step){
	var X = id.substring(0, id.indexOf('_'));
	var Y = id.substring(id.indexOf('_')+1);  
		
		var iX = 0, iY = 0;
		switch (isCoDo(X, Y)){
// Co do
			case true:
				// Đi lên trên phải
				iX = parseInt(X);
				iY = parseInt(Y);
				var step_Top_Right = step;
				while (!isBien(iX - 1, iY + 1) && !isCoDo(iX - 1, iY + 1) && step_Top_Right>0){
					DoiMau(iX - 1, iY + 1);
					if(isCoDen(iX - 1, iY + 1))
						break;
					iX -= 1;
					iY += 1;
					step_Top_Right-=1;
				}
				
				// Đi lên trên bên trái
				iX = parseInt(X);
				iY = parseInt(Y);
				var step_Top_Left = step;
				while (!isBien(iX - 1, iY - 1) && !isCoDo(iX - 1, iY - 1) && step_Top_Left >0){
					DoiMau(iX - 1, iY - 1);
					if(isCoDen(iX - 1, iY - 1))
						break;
					iX -= 1;
					iY -= 1;
					step_Top_Left-=1;
				}
				
				// Đi xuống bên trái
				iX = parseInt(X);
				iY = parseInt(Y);
				var step_Bottom_Left= step;
				while (!isBien(iX + 1 , iY - 1)  && !isCoDo(iX + 1, iY - 1) && step_Bottom_Left>0){
					DoiMau(iX + 1, iY - 1);
					if(isCoDen(iX + 1, iY - 1))
						break;
					iX += 1;
					iY -= 1;
					step_Bottom_Left-=1;
				}
				
				// Đi xuống dưới bên phải
				iX = parseInt(X);
				iY = parseInt(Y);
				var step_Bottom_Right=step;
				while(!isBien(iX + 1, iY + 1) && !isCoDo(iX + 1, iY + 1)&& step_Bottom_Right>0){
					DoiMau(iX + 1, iY + 1);
					if(isCoDen(iX + 1, iY + 1))
						break;
					iX += 1;
					iY += 1;
					step_Bottom_Right-=1;
				}
				
			break;
			
// Co den
			case false:
			
				// Đi lên bên phải
				iX = parseInt(X);
				iY = parseInt(Y);
				var step_Top_Right =step;
				while( !isBien(iX - 1, iY + 1) && !isCoDen(iX - 1, iY + 1) && step_Top_Right>0){
					DoiMau(iX - 1, iY + 1);
					if(isCoDo(iX -1, iY +1))
						break;
					iX--;
					iY++;
					step_Top_Right-=1;
				} 
				
				// Đi lên bên trái
				iX = parseInt(X);
				iY = parseInt(Y);
				var step_Top_Left =step;
				while(!isBien(iX - 1, iY - 1) && !isCoDen(iX - 1, iY -1) && step_Top_Left >0){
					DoiMau(iX -1, iY -1);
					if(isCoDo(iX -1, iY -1))
						break;
					iX--;
					iY--;
					step_Top_Left-=1;
				}
			
				// Đi dưới bên trái
				iX = parseInt(X);
				iY = parseInt(Y);
				var step_Bottom_Left =step;
				while(!isBien(iX + 1, iY - 1) && !isCoDen(iX + 1, iY - 1)&& step_Bottom_Left>0){
					DoiMau(iX + 1, iY - 1);
					if(isCoDo(iX + 1, iY - 1))
						break;
					iX++;
					iY--;
					step_Bottom_Left-=1;
				}
				
				//Đi dưới bên phải
				iX = parseInt(X);
				iY = parseInt(Y);
				var step_Bottom_Right =step;
				while(!isBien(iX + 1, iY + 1) && !isCoDen(iX + 1, iY + 1)>0 && step_Bottom_Right){
					DoiMau(iX + 1, iY + 1);
					if(isCoDo(iX + 1, iY + 1))
						break;
					iX++;
					iY++;
					step_Bottom_Right-=1;
				}			
			break;
		}
		
}