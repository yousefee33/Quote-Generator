const btn = document.getElementById("new-quote");
const quoteEl = document.getElementById("quote");
const personEl = document.getElementById("person");

const quotes = [
  { quote: "The best way to predict the future is to invent it.", person: "Alan Kay" },
  { quote: "Life is either a daring adventure or nothing at all.", person: "Helen Keller" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", person: "Zig Ziglar" },
  { quote: "Dream big and dare to fail.", person: "Norman Vaughan" },
  { quote: "Your time is limited, so don’t waste it living someone else’s life.", person: "Steve Jobs" },
  { quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt" },
  { quote: "The harder you work for something, the greater you'll feel when you achieve it.", person: "Nelson Mandela" },
  { quote: "Push yourself, because no one else is going to do it for you.", person: "Nelson Mandela" },
  { quote: "Great things never come from comfort zones.", person: "Nelson Mandela" },
  { quote: "Success doesn’t just find you. You have to go out and get it.", person: "Nelson Mandela" },
  { quote: "Dream it. Wish it. Do it.", person: "Nelson Mandela" },
  { quote: "The key to success is to focus on goals, not obstacles.", person: "Nelson Mandela" },
  { quote: "Don’t stop when you’re tired. Stop when you’re done.", person: "Marilyn Monroe" },
  { quote: "Wake up with determination. Go to bed with satisfaction.", person: "George Lorimer" },
  { quote: "Do something today that your future self will thank you for.", person: "Sean Patrick Flanery" },
  { quote: "Little things make big days.", person: "Isabel Marant" },
  { quote: "It’s going to be hard, but hard does not mean impossible.", person: "Art Williams" },
  { quote: "Don’t wait for opportunity. Create it.", person: "Chris Grosser" },
  { quote: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", person: "Nelson Mandela" },
  { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
  { quote: "Doubt kills more dreams than failure ever will.", person: "Suzy Kassem" },
  { quote: "You are never too old to set another goal or to dream a new dream.", person: "C.S. Lewis" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", person: "Winston Churchill" },
  { quote: "Act as if what you do makes a difference. It does.", person: "William James" },
  { quote: "You do not find the happy life. You make it.", person: "Camilla Eyring Kimball" },
  { quote: "Stay away from those people who try to disparage your ambitions.", person: "Mark Twain" },
  { quote: "Happiness is not by chance, but by choice.", person: "Jim Rohn" },
  { quote: "Be yourself; everyone else is already taken.", person: "Oscar Wilde" },
  { quote: "Success is not how high you have climbed, but how you make a positive difference.", person: "Roy T. Bennett" },
  { quote: "The mind is everything. What you think you become.", person: "Buddha" },
    { quote: "Value worry agree recently market this property wear.", person: "Barack Obama" },
  { quote: "Activity could analysis reflect final resource human source realize baby method discussion memory.", person: "Neil Armstrong" },
  { quote: "Himself everything name spend personal seek do future true culture begin amount especially answer.", person: "Maya Angelou" },
  { quote: "Seven shake investment model should that imagine capital side.", person: "Abraham Lincoln" },
  { quote: "Trip similar probably line city evidence cold time computer take year tax.", person: "Jane Austen" },
  { quote: "Direction trouble experience including understand moment product team government decade article.", person: "Martin Luther King Jr." },
  { quote: "Call someone however enter old hold because performance share product.", person: "Nelson Mandela" },
  { quote: "Reality seem fire whether wrong smile seek follow good strong industry analysis.", person: "Ada Lovelace" },
  { quote: "Purpose goal skill project future attack place music beautiful address.", person: "Beyoncé Knowles" },
  { quote: "Short reflect themselves arm family shake pass order still listen finish.", person: "Isaac Newton" },
  { quote: "Audience positive accept reflect necessary direction alone.", person: "Vincent van Gogh" },
  { quote: "Create newspaper civil far another country chair game social professor.", person: "Frida Kahlo" },
  { quote: "Build myself make during site usually affect material popular born daughter.", person: "Leonardo da Vinci" },
  { quote: "Common dark hundred moment course image true.", person: "Stephen Hawking" },
  { quote: "Health tax recently forget dinner away language community almost.", person: "Bruce Lee" },
  { quote: "Smile side strategy continue power serious summer front grow either.", person: "Bill Gates" },
  { quote: "Husband response long community receive center.", person: "Walt Disney" },
  { quote: "Learn accept thank daughter inside mother benefit.", person: "Taylor Swift" },
  { quote: "Less response behavior question share education course.", person: "Oprah Winfrey" },
  { quote: "Article summer far cell section recognize rule work another.", person: "Marie Curie" },
  { quote: "Believe way benefit goal act month wait start political include.", person: "Albert Einstein" },
  { quote: "Challenge voice audience quality short future rich accept.", person: "Elon Musk" },
  { quote: "Peace face entire enjoy anyone decision anything.", person: "Mark Twain" },
  { quote: "Policy help treat economy cell reach quickly rest matter.", person: "Malala Yousafzai" },
  { quote: "Exactly art evidence daughter idea anyone ever trip.", person: "J.K. Rowling" },
  { quote: "Address reduce parent drop turn section form.", person: "Jane Austen" },
  { quote: "Professional help night prove generation child someone policy born.", person: "Oscar Wilde" },
  { quote: "Account enjoy whole able rock test professional offer quickly.", person: "Rosa Parks" },
  { quote: "Born much benefit often discover mention general sign meet.", person: "Pablo Picasso" },
  { quote: "True role summer simple assume environment color alone able.", person: "William Shakespeare" },
  { quote: "Sit food probably challenge direction condition figure feel mission memory.", person: "Ludwig van Beethoven" },
    { quote: "No matter how slow you go as long as you do not stop.", person: "Confucius" },
  { quote: "The purpose of our lives is to be happy.", person: "Dalai Lama" },
  { quote: "Turn your wounds into wisdom.", person: "Oprah Winfrey" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", person: "Confucius" },
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", person: "Franklin D. Roosevelt" },
  { quote: "In the middle of every difficulty lies opportunity.", person: "Albert Einstein" },
  { quote: "Happiness is not something ready made. It comes from your own actions.", person: "Dalai Lama" },
  { quote: "We may encounter many defeats but we must not be defeated.", person: "Maya Angelou" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", person: "Henry David Thoreau" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", person: "C.S. Lewis" },
  { quote: "Success is going from failure to failure without losing your enthusiasm.", person: "Winston Churchill" },
  { quote: "It always seems impossible until it's done.", person: "Nelson Mandela" },
  { quote: "Don’t count the days, make the days count.", person: "Muhammad Ali" },
  { quote: "You miss 100% of the shots you don’t take.", person: "Wayne Gretzky" },
  { quote: "Strive not to be a success, but rather to be of value.", person: "Albert Einstein" },
  { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", person: "Ralph Waldo Emerson" },
  { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", person: "Ralph Waldo Emerson" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", person: "George Addair" },
  { quote: "Success is how high you bounce when you hit bottom.", person: "George S. Patton" },
  { quote: "Success is not in what you have, but who you are.", person: "Bo Bennett" },
  { quote: "A person who never made a mistake never tried anything new.", person: "Albert Einstein" },
  { quote: "The best dreams happen when you’re awake.", person: "Cherie Gilderbloom" },
  { quote: "Difficult roads often lead to beautiful destinations.", person: "Zig Ziglar" },
  { quote: "Work hard in silence, let success make the noise.", person: "Frank Ocean" },
  { quote: "Happiness is not something you postpone for the future; it is something you design for the present.", person: "Jim Rohn" },
  { quote: "You are enough just as you are.", person: "Meghan Markle" },
  { quote: "Don’t limit your challenges. Challenge your limits.", person: "Jerry Dunn" },
  { quote: "It’s not whether you get knocked down, it’s whether you get up.", person: "Vince Lombardi" },
  { quote: "The only way to achieve the impossible is to believe it is possible.", person: "Charles Kingsleigh" },
  { quote: "If you want to lift yourself up, lift up someone else.", person: "Booker T. Washington" },
  { quote: "You only live once, but if you do it right, once is enough.", person: "Mae West" },
    { quote: "Opportunities don't happen. You create them.", person: "Chris Grosser" },
  { quote: "I am not a product of my circumstances. I am a product of my decisions.", person: "Stephen Covey" },
  { quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", person: "Amelia Earhart" },
  { quote: "Do what you can with all you have, wherever you are.", person: "Theodore Roosevelt" },
  { quote: "What you lack in talent can be made up with desire, hustle, and giving 110% all the time.", person: "Don Zimmer" },
  { quote: "Don’t wait. The time will never be just right.", person: "Napoleon Hill" },
  { quote: "Start where you are. Use what you have. Do what you can.", person: "Arthur Ashe" },
  { quote: "Success is the sum of small efforts, repeated day in and day out.", person: "Robert Collier" },
  { quote: "Either you run the day or the day runs you.", person: "Jim Rohn" },
  { quote: "Security is mostly a superstition. Life is either a daring adventure or nothing.", person: "Helen Keller" },
  { quote: "Whether you think you can or you think you can’t, you’re right.", person: "Henry Ford" },
  { quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", person: "Roy T. Bennett" },
  { quote: "You are braver than you believe, stronger than you seem, and smarter than you think.", person: "A.A. Milne" },
  { quote: "Your limitation—it’s only your imagination.", person: "Unknown" },
  { quote: "Push yourself, because no one else is going to do it for you.", person: "Unknown" },
  { quote: "Great things never come from comfort zones.", person: "Unknown" },
  { quote: "Dream it. Wish it. Do it.", person: "Unknown" },
  { quote: "Sometimes later becomes never. Do it now.", person: "Unknown" },
  { quote: "Success doesn’t just find you. You have to go out and get it.", person: "Unknown" },
  { quote: "The harder you work for something, the greater you’ll feel when you achieve it.", person: "Unknown" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", person: "Sam Levenson" },
  { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", person: "Walt Whitman" },
  { quote: "Try to be a rainbow in someone else’s cloud.", person: "Maya Angelou" },
  { quote: "You cannot swim for new horizons until you have courage to lose sight of the shore.", person: "William Faulkner" },
  { quote: "Believe in yourself. You are braver than you think.", person: "Dr. Seuss" },
  { quote: "Don't be afraid to give up the good to go for the great.", person: "John D. Rockefeller" },
  { quote: "Limit your 'always' and your 'nevers.'", person: "Amy Poehler" },
  { quote: "A goal is a dream with a deadline.", person: "Napoleon Hill" },
  { quote: "Motivation is what gets you started. Habit is what keeps you going.", person: "Jim Rohn" },
  { quote: "In the end, we only regret the chances we didn’t take.", person: "Lewis Carroll" },
    { quote: "Everything you can imagine is real.", person: "Pablo Picasso" },
  { quote: "Whatever you are, be a good one.", person: "Abraham Lincoln" },
  { quote: "Be the change that you wish to see in the world.", person: "Mahatma Gandhi" },
  { quote: "Happiness depends upon ourselves.", person: "Aristotle" },
  { quote: "Do what you feel in your heart to be right – for you’ll be criticized anyway.", person: "Eleanor Roosevelt" },
  { quote: "Difficult roads often lead to beautiful destinations.", person: "Zig Ziglar" },
  { quote: "You only live once, but if you do it right, once is enough.", person: "Mae West" },
  { quote: "Be so good they can’t ignore you.", person: "Steve Martin" },
  { quote: "Strive not to be a success, but rather to be of value.", person: "Albert Einstein" },
  { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", person: "Ralph Waldo Emerson" },
  { quote: "In the middle of every difficulty lies opportunity.", person: "Albert Einstein" },
  { quote: "If you’re going through hell, keep going.", person: "Winston Churchill" },
  { quote: "Action is the foundational key to all success.", person: "Pablo Picasso" },
  { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", person: "Ralph Waldo Emerson" },
  { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", person: "Will Durant" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", person: "C.S. Lewis" },
  { quote: "Don’t limit your challenges. Challenge your limits.", person: "Jerry Dunn" },
  { quote: "You are capable of more than you know.", person: "Glinda the Good Witch" },
  { quote: "Don’t raise your voice, improve your argument.", person: "Desmond Tutu" },
  { quote: "A comfort zone is a beautiful place, but nothing ever grows there.", person: "Unknown" },
  { quote: "The best revenge is massive success.", person: "Frank Sinatra" },
  { quote: "Failure is not the opposite of success, it's part of success.", person: "Arianna Huffington" },
  { quote: "If opportunity doesn’t knock, build a door.", person: "Milton Berle" },
  { quote: "You miss 100% of the shots you don’t take.", person: "Wayne Gretzky" },
  { quote: "It always seems impossible until it’s done.", person: "Nelson Mandela" },
  { quote: "Go the extra mile. It’s never crowded there.", person: "Dr. Wayne D. Dyer" },
  { quote: "You didn’t come this far to only come this far.", person: "Unknown" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", person: "Henry David Thoreau" },
  { quote: "Today’s accomplishments were yesterday’s impossibilities.", person: "Robert H. Schuller" },
  { quote: "Don’t let yesterday take up too much of today.", person: "Will Rogers" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
    { quote: "Act as if what you do makes a difference. It does.", person: "William James" },
    { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", person: "Roy T. Bennett" },
    { quote: "You are never too old to set another goal or to dream a new dream.", person: "C.S. Lewis" },
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" }



];


function typeEffect(text, element, callback) {
  let i = 0;
  element.classList.add("typing");
  element.innerHTML = "";
  const timer = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      element.classList.remove("typing");
      if (callback) callback();
    }
  }, 30);
}

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const current = quotes[random];

  personEl.classList.remove("visible");

  typeEffect(current.quote, quoteEl, () => {
    personEl.innerText = current.person;
    personEl.classList.add("visible");
  });
}

btn.addEventListener("click", generateQuote);


generateQuote();
