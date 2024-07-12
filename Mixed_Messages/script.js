const generateRandomNumber = (num) => {
  let randomNum = Math.floor(Math.random() * num);
  return randomNum;
};

const tarotCards = {
    majorArcana: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Justice', 'The Hermit', 'Wheel of Fortune', 'Strength', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World'],
    fortune: ['Good Luck!', 'Mystories... Luck..', 'Very Good Luck!', 'Bad Luck!', 'Very Bad Luck!'],
    adivice: ['Take time to know yourself', 'Be patient and persistent', 'In order to get, you have to give', 'Be your best at all times.', 'Don\'t be afraid of being afraid','Don\'t make decisions when you are angry or ecstatic', 'Don\'t worry what other people think', 'Do what is right, not what is easy', 'Believe in yourself']
};

let yourCard = [];

for (let prop in tarotCards) {
    let keyValue = tarotCards[prop];
    let randomIndex = generateRandomNumber(keyValue.length);
    yourCard.push(keyValue[randomIndex]);
};

const tarotWisdom = (wisdom) => {
  let messageToShow = [];
  messageToShow.push(`\u{1F0CF} As predicted Your today's Tarot Card is "${wisdom[0]}" \u{1F607}`);
  messageToShow.push(`You are having a \u{1F449} ${wisdom[1]}`);
  messageToShow.push(`\u{2663} \u{2665} As Advice \u{2666} \u{2660} : "${wisdom[2]}"`);
  const theMessageString = messageToShow.join('\n');
  console.log(theMessageString);
};

tarotWisdom(yourCard);
