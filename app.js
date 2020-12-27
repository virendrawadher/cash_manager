var cashAmt = document.querySelector('#cashAmt');
var cashGiven = document.querySelector('#cashGiven');
var changeBtn = document.querySelector('#return-change');
var outputText = document.querySelector('#output-text');

var currency = [1, 5, 10, 20, 100, 500, 2000]
var twoThousand = 0; var fiveHundred = 0; var hundered = 0; var twentyT = 0; var tenT = 0; var fiveR = 0; var oneR = 0;

function changeCalculate(){
    var output = "";
    var balAmt = parseInt(cashGiven.value) - parseInt(cashAmt.value) 
    if(balAmt >= 0){
        output += "Balance Amount(Rs) :- " + balAmt +"<br />"
        while (true){
            if (balAmt >= 2000){ 
                var twocount = 1;           
                var twoTho = currency[6] * twocount;
                balAmt -= twoTho
                twoThousand += twocount;
            }
            else if (balAmt < 2000 && balAmt >= 500){
                var fiveHcount = 1;
                var fiveH = currency[5] * fiveHcount;
                balAmt -= fiveH 
                fiveHundred += fiveHcount;
            }
            else if (balAmt < 500 && balAmt >= 100){
                var oneHcount = 1;
                var oneH = currency[4] * oneHcount;
                balAmt -= oneH 
                hundered += oneHcount;
            }
            else if (balAmt < 100 && balAmt >= 20){ 
                var twentycount = 1;
                var twenty = currency[3] * twentycount;
                balAmt -= twenty
                twentyT += twentycount;
            }
            else if (balAmt < 20 && balAmt >= 10){
                var tencount = 1;  
                var ten = currency[2] * tencount;
                balAmt -= ten;
                tenT += tencount;
            }
            else if (balAmt < 10 && balAmt >= 5){
                var fivecount = 1;
                var five = currency[1] * fivecount;
                balAmt -= five; 
                fiveR += fivecount;
            }
            else if (balAmt < 5 && balAmt >= 1){
                var onecount = 1;
                var one = currency[0] * onecount;
                balAmt -= one; 
                oneR += onecount;
            }
            else{
                break;
            }
        }
    }
    else{
        alert("Cash given cannot be less than bill amount");
        cashAmt.value = "";
        cashGiven.value = "";
    }

    if(twoThousand != 0){
        output += "Two Thousand:- " + twoThousand + "<br />";
    } 
    if(fiveHundred != 0){
        output += "Five Hundred:- " + fiveHundred + "<br />";
    }
    if(hundered != 0){
        output += "One Hundred:- " + hundered + "<br />";
    }
    if(twentyT != 0){
        output += "Twenty:- " + twentyT + "<br />";
    }
    if(tenT != 0){
        output += "Ten Rupee:- " + tenT + "<br />";
    }
    if(fiveR != 0){
        output += "Five Rupee:- " + fiveR + "<br />";
    }
    if (oneR != 0){
        output += "One Rupee:- " + oneR + "<br />";
    }

    outputText.innerHTML = output;
    twoThousand = 0; fiveHundred = 0; hundered = 0; twentyT = 0; tenT = 0; fiveR = 0; oneR = 0;

     
}

// cashGiven.style.display = "None";
function enterCash(){
    if(cashAmt.value !== "" && parseInt(cashAmt.value) > 0){
        cashGiven.style.display = "Block";
        cashGiven.style.margin = "auto";
    }
    if(parseInt(cashAmt.value) <= 0){
        cashAmt.value = "";
        cashGiven.style.display = "None"
        cashGiven.style.margin = "auto";
        alert("Enter cash above zero");
    }
    
}

cashAmt.addEventListener('change', enterCash)
changeBtn.addEventListener('click', changeCalculate)
