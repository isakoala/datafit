/*

We allow prepaid debit card users to load money onto their card directly via a cash deposit. Users need to use their card number as reference. This mechanism works as long as a card can be uniquely identified.

Human error sometimes comes into play, if one or more digits is inadvertently dropped. In some cases the bank also abbreviates card numbers by replacing multiples of a particular digit with a letter.

Below, "references" contains a sample of references for cash payments and "cardNumbers" contains the card numbers on our system. Write a function that extracts the relevant part of a reference and determines whether it mathes a card number unambiguously. For each reference, give a "match" status of "unique", "multiple" or "none".

(The actual card numbers have been obfuscated for security reasons, of course.)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

*/

'use strict';

// Sample of cash deposit references
const references = [
	'CASH DEP SANDRIDGE ( 49,48 ) DEPOSIT NO : 0132540003715129 CONTACT',
	'CASH DEP GROBLERSDA( 7,06 ) DEPOSIT NO : 013254@3715186 CONTACT',
	'CASH DEP BRITS ONE ( 10,09 ) DEPOSIT NO : 01325400037152 CONTACT',
	'CASH DEP THOHOYANDO( 46,45 ) DEPOSIT NO : 013254@371P41 CONTACT',
	'CASH DEP NEWTOWN JU( 40,39 ) DEPOSIT NO : 013254@03715P5 CONTACT',
	'CASH DEP PORT ELIZA( 36,35 ) DEPOSIT NO : 013254@3715G2 CONTACT',
	'CASH DEP BRAKPAN 1 ( 6,55 ) DEPOSIT NO : 0132540003710138 CONTACT'
];

// Our card numbers
const cardNumbers = [
	'0132540003715053',
  '0132540003715061',
  '0132540003715079',
  '0132540003715087',
  '0132540003715095',
  '0132540003715103',
  '0132540003715111',
  '0132540003715129',
  '0132540003715137',
  '0132540003715145',
  '0132540003715152',
  '0132540003715160',
  '0132540003715178',
  '0132540003715186',
  '0132540003715194',
  '0132540003715202',
  '0132540003715210',
  '0132540003715228',
  '0132540003715236',
  '0132540003715244',
  '0132540003715251',
  '0132540003715269',
  '0132540003715277',
  '0132540003715285',
  '0132540003715293',
  '0132540003715301',
  '0132540003715319',
  '0132540003715327',
  '0132540003715335',
  '0132540003715343',
  '0132540003715350',
  '0132540003715368',
  '0132540003715376',
  '0132540003715384',
  '0132540003715392',
  '0132540003715400',
  '0132540003715418',
  '0132540003715426',
  '0132540003715434',
  '0132540003715442',
  '0132540003715509',
  '0132540003715517',
  '0132540003715525',
  '0132540003715533',
  '0132540003715541',
  '0132540003715558',
  '0132540003715566',
  '0132540003715574',
  '0132540003715582',
  '0132540003715590'
];

function getCardNoFromReferences() {

    var initializeOccuranceArray;
    var iterateThroughReferences;
    var iterateThroughReferences2;
    var iterateThroughCardNumbers;
    var occurencesArray = [];

    for (initializeOccuranceArray = 0; initializeOccuranceArray < references.length; initializeOccuranceArray++){

        occurencesArray[initializeOccuranceArray] = 0;

    }

    for (iterateThroughReferences = 0; iterateThroughReferences < references.length; iterateThroughReferences++) {

        var cardNumber = references[iterateThroughReferences].substring(references[iterateThroughReferences].indexOf(':') + 2, references[iterateThroughReferences].length - 7);

        for(iterateThroughCardNumbers = 0; iterateThroughCardNumbers < cardNumbers.length; iterateThroughCardNumbers++){

            if(parseInt(cardNumbers[iterateThroughCardNumbers]) === parseInt(cardNumber)){
                
                occurencesArray[iterateThroughReferences] = occurencesArray[iterateThroughReferences] + 1;
    
            }

        }

    }

    for (iterateThroughReferences2 = 0; iterateThroughReferences2 < references.length; iterateThroughReferences2++){

        var cardNumber = references[iterateThroughReferences2].substring(references[iterateThroughReferences2].indexOf(':') + 2, references[iterateThroughReferences2].length - 7);
        
        if (occurencesArray[iterateThroughReferences2] > 1){
            console.log("Card Number: " + cardNumber + ", " + "Status: Multiple");
        }
        else if (occurencesArray[iterateThroughReferences2] == 1){
            console.log("Card Number: " + cardNumber + ", " + "Status: Unique");
        }
        else{
            console.log("Card Number: " + cardNumber + ", " + "Status: None");
        }
    }

}

getCardNoFromReferences();
