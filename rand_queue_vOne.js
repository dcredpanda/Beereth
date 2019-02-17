/**
 * BeerEth Proto
 * Derek Cotton
 * 2/16/2019
 */

//!!! get_ingredients(purchase type in 5 or 10 call)   !!!

//Global vars control seeing weight for chance
	//Adjustable Sum(variables) MUST eq 1000
ARRAY_SIZE = 1000;
BARLEY_CHANCE = 320; //
YEAST_CHANCE = 320;
HOPS_CHANCE = 320;
BARCARD_CHANCE = 40;

//Function screen
if (ARRAY_SIZE == (BARLEY_CHANCE + YEAST_CHANCE
		+ HOPS_CHANCE + BARCARD_CHANCE)){
	
//Method returns array with custom chances (ratio -- ARRAY_SIZE)
function fill_ingredients(){
	
	var ingredients = new Uint8Array(ARRAY_SIZE);
	
	for (var i = 0; i < ARRAY_SIZE; i++){
		if (i < BARLEY_CHANCE){
			ingredients[i] = 1;
			}
		else if (i < (BARLEY_CHANCE + YEAST_CHANCE)){//!issue with parenthetical calculation
			ingredients[i] = 2;
			}
		else if (i < (BARLEY_CHANCE + YEAST_CHANCE + HOPS_CHANCE)){
			ingredients[i] = 3;
			}
		else{
			ingredients[i] = 4;
			}	
	}	

	return ingredients;		
}

//Populates controlled array randomly with time-seed
	//5 or 10 for card pack type
//!!NOTE that 10 card request returns 9 values (one value is gaurenteed Bar Card in contract)


//A = 0;
//B = 0;
//C = 0;
//D = 0;


function get_ingredients(card_request/*, A, B, C, D*/){
	
	ingredients = fill_ingredients(); //is chance-set array
	var time_random = new Date(); //date object to feed time method
	//if for 5 card array
	if (card_request == 5){
		//card_return array is script return
		var card_return = new Uint8Array(card_request);
		var milli_seed = time_random.getMilliseconds();
		//loop random fills 5
		for (var i = 0; i < card_request; i++){
			var seed_random = Math.floor(Math.random(milli_seed) * ARRAY_SIZE);
			card_return[i] = ingredients[seed_random];
			if (card_return[i] == 1){
				this.A++;
			}
			else if (card_return[i] == 2){
				this.B++;
			}
			else if (card_return[i] == 3){
				this.C++;
			}
			else if (card_return[i] == 4){
				this.D++;
			}
		}
	}
	//else if for 10-pack
	else if (card_request == 9){		
		var card_return = new Uint8Array(card_request);
		var milli_seed = time_random.getMilliseconds();
		//loop random fills 10
		for (var i = 0; i < (card_request); i++){
			var seed_random = Math.floor(Math.random(milli_seed) * ARRAY_SIZE);
			card_return[i] = ingredients[seed_random];
			if (card_return[i] == 1){
				this.A++;
			}
			else if (card_return[i] == 2){
				this.B++;
			}
			else if (card_return[i] == 3){
				this.C++;
			}
			else if (card_return[i] == 4){
				this.D++;
			}
		}	
	}
	//parameter error catch for pack type reques
	else {
		console.log("Enter valid card sale.")
	}
	//return value
	return card_return;
  }
}
//parameter error catch for array probability error
else{
	console.log("Error:Card chances must = 1000");
}
console.log(get_ingredients(5))


/* Testing block for output*/
//for (var z = 0; z < ARRAY_SIZE; z++){
//	console.log(get_ingredients(5))
//	console.log(get_ingredients(9))
//}
//console.log(A);
//console.log(B);
//	console.log(C);
//		console.log(D);
//var sum = A+B+C+D;
//console.log(sum);
//total = (5*1000) + (9*1000);
//console.log(total);
//
//console.log(A/sum);
//console.log(B/sum);
//	console.log(C/sum);
//		console.log(D/sum);
//		
//		console.log(40/1000);
