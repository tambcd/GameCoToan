function Xe(id,step){
	var X = id.substring(0, id.indexOf('_'));
	var Y = id.substring(id.indexOf('_')+1);  
	switch(isCoDo(X, Y))
	{
// Cờ đỏ
		case true:
		
			// Đi lên trên
			var X_Top = parseInt(X);
			var Step_Top= step;
			while(!isBien(X_Top - 1, Y) && !isCoDo(X_Top - 1, Y) && Step_Top > 0){
				if(isCoDen(X_Top - 1, Y))
					break;
				DoiMau(X_Top - 1, Y);
				X_Top -= 1; 
				Step_Top-=1;

			}
			
			// Đi xuống dưới
			var X_Bottom = parseInt(X);
			var Step_Bottom= step;
			while(!isBien(X_Bottom +1, Y) && !isCoDo(X_Bottom + 1, Y) && Step_Bottom > 0){
				if(isCoDen(X_Bottom + 1, Y))
					break;
				DoiMau(X_Bottom + 1, Y);
				X_Bottom += 1; 
				Step_Bottom -=1;
			}
			
			// Đi qua trái
			var Y_Left = parseInt(Y);
			var Step_Left = step;
			while(!isBien(X, Y_Left - 1) && !isCoDo(X, Y_Left - 1) && Step_Left>0){
				if(isCoDen(X, Y_Left - 1))
					break;
				DoiMau(X, Y_Left - 1);
				Y_Left -= 1; 
				Step_Left-=1;
			}
			
			// Sang phải
			var Y_Right = parseInt(Y);
			var Step_Right=step;
			while(!isBien(X, Y_Right + 1) &&!isCoDo(X, Y_Right + 1) && Step_Right>0){
				if(isCoDen(X, Y_Right + 1))
						break;
				DoiMau(X, Y_Right + 1);
				Y_Right += 1; 
				Step_Right-=1;
			}
		break;		
		
// Cờ Den	
		case false:
			// Đi lên trên
			var X_Top = parseInt(X);
			var Step_Top = step;
			while(!isBien(X_Top - 1, Y) && !isCoDen(X_Top - 1, Y) && Step_Top >0){
				if(isCoDo(X_Top - 1, Y))
						break;
				// DoiMau(X_Top - 1, Y);
				TongNuocDi.push((X_Top-1)+"_"+(Y))
				X_Top -= 1; 
				Step_Top -=1;
			}
			
			// Đi xuống dưới
			var X_Bottom = parseInt(X);
			var Step_Bottom = step;
			while(!isBien(X_Bottom + 1, Y) && !isCoDen(X_Bottom + 1, Y) && Step_Bottom> 0){
				if(isCoDo(X_Bottom + 1, Y))
					break;
				// DoiMau(X_Bottom + 1, Y);
				TongNuocDi.push((X_Bottom+1)+"_"+(Y))
				X_Bottom += 1; 
				Step_Bottom -=1;
			}
			
			// Đi qua trái
			var Y_Left = parseInt(Y);
			var Step_Left =step;
			while(!isBien(X, Y_Left - 1) && !isCoDen(X, Y_Left - 1) && Step_Left>0){
				if(isCoDo(X, Y_Left - 1))
					break;
				// DoiMau(X, Y_Left - 1);
				TongNuocDi.push((X)+"_"+(Y_Left-1))
				Y_Left -= 1; 
				Step_Left-=1;
			}
			
			// Sang phải
			var Y_Right = parseInt(Y);
			var Step_Right= step;
			while(!isBien(X, Y_Right + 1) && !isCoDen(X, Y_Right + 1) &&Step_Right >0 ){
				if(isCoDo(X, Y_Right + 1))
					break;
				// DoiMau(X, Y_Right + 1);
				TongNuocDi.push((X)+"_"+(Y_Right+1))
				Y_Right += 1; 
				Step_Right-=1;
			}
		break;
		default:
	}
	
}