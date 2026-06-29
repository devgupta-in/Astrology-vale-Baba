const zodiacSigns = [
  "Capricorn",   // January
  "Aquarius",    // February
  "Pisces",      // March
  "Aries",       // April
  "Taurus",      // May
  "Gemini",      // June
  "Cancer",      // July
  "Leo",         // August
  "Virgo",       // September
  "Libra",       // October
  "Scorpio",     // November
  "Sagittarius"  // December
];

// based on date 31
const compliments = [
  "You have a great smile!",
  "You are incredibly talented.",
  "You make people feel comfortable.",
  "Your kindness is inspiring.",
  "You have an amazing sense of humor.",
  "You are stronger than you realize.",
  "You brighten everyone's day.",
  "You are a great problem solver.",
  "Your creativity is impressive.",
  "You have excellent ideas.",
  "You are a wonderful friend.",
  "You make a positive difference.",
  "You are confident and capable.",
  "Your positivity is contagious.",
  "You have a kind heart.",
  "You are full of potential.",
  "You always know how to help.",
  "You are incredibly thoughtful.",
  "Your determination is admirable.",
  "You are unique and special.",
  "You have a brilliant mind.",
  "You inspire those around you.",
  "You are doing an amazing job.",
  "You deserve all the success you achieve.",
  "You make every situation better.",
  "You have excellent leadership skills.",
  "You are courageous and resilient.",
  "Your hard work never goes unnoticed.",
  "You have an incredible personality.",
  "You are one of a kind.",
  "The world is a better place because of you."
];

// size 20
const victimCardCompliments = [
  "How am I supposed to focus when you look this good?",
  "It's unfair that you got all the good genes.",
  "You really woke up and decided to outshine everyone.",
  "Thanks for making the rest of us look average.",
  "Stop being so talented, you're raising the bar too high.",
  "You're the reason I have trust issues with mirrors.",
  "Could you be any more perfect?",
  "You make confidence look effortless, and I'm jealous.",
  "I'm filing a complaint for being this attractive.",
  "You stole all the charisma and left none for us.",
  "Being around you is bad for my self-esteem—in the best way.",
  "Why do you have to be good at everything?",
  "You're making the rest of us work overtime.",
  "Save some awesomeness for the rest of the world.",
  "You didn't have to flex this hard today.",
  "It's impossible to compete with someone like you.",
  "You make success look way too easy.",
  "You're setting impossible standards for everyone else.",
  "I blame you for making ordinary people seem boring.",
  "Honestly, you're just showing off at this point."
];

// recommendations 30
const recommendations = [
  "Drink more water today.",
  "Take a 15-minute walk.",
  "Read at least 10 pages of a book.",
  "Call or text someone you care about.",
  "Get 7–8 hours of sleep tonight.",
  "Try something you've never done before.",
  "Take a break from social media for an hour.",
  "Write down three things you're grateful for.",
  "Learn a new word today.",
  "Spend 20 minutes exercising.",
  "Eat at least one healthy meal today.",
  "Listen to your favorite music.",
  "Organize your workspace.",
  "Meditate for 10 minutes.",
  "Practice a hobby you enjoy.",
  "Compliment someone sincerely.",
  "Watch an educational video.",
  "Stretch your body for 10 minutes.",
  "Set one goal for tomorrow.",
  "Smile more today.",
  "Take a deep breath and relax.",
  "Avoid procrastination—start your hardest task first.",
  "Spend time with your family.",
  "Go outside and enjoy fresh air.",
  "Limit your screen time before bed.",
  "Write your thoughts in a journal.",
  "Learn one new programming concept.",
  "Help someone without expecting anything in return.",
  "Celebrate a small achievement today.",
  "Believe in yourself—you've got this!"
];

// predictions 20
const predictions = [
  "Within the next 30 days, someone you've never met will change your life.",
  "A wish you've secretly held for years will begin coming true sooner than expected.",
  "An unbelievable coincidence will make you question fate.",
  "You'll receive unexpected money from a source you never imagined.",
  "Someone from your past will return with news that changes everything.",
  "A golden opportunity will appear exactly when you're ready to give up.",
  "Your biggest dream will suddenly seem possible after one unexpected event.",
  "A stranger will recognize your hidden talent before you do.",
  "You'll be in the right place at the perfect time for something extraordinary.",
  "A life-changing phone call or message is closer than you think.",
  "You'll discover a talent that amazes everyone around you.",
  "An impossible problem will solve itself in a surprising way.",
  "Someone important will notice you without you trying.",
  "A lucky streak will begin when you least expect it.",
  "You'll achieve something people once said was impossible.",
  "The universe will send you a sign so obvious you won't be able to ignore it.",
  "A door that seemed permanently closed will suddenly open.",
  "You'll witness an event so unlikely that you'll remember it for the rest of your life.",
  "The next full moon will mark the beginning of a completely new chapter in your life.",
  "Your future self will thank you for a decision you're about to make."
];

const form = document.getElementById("astroForm");

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const name = document.getElementById("username").value;
  const surname = document.getElementById("surname").value;
  const date = parseInt(document.getElementById("date").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const text = `Hi ${name} ${surname}, Your zodiac sign is ${zodiacSigns[month-1]}.
   ${compliments[date-1]}. ${victimCardCompliments[year%20]}. ${recommendations[(date*month)%month]}. ${predictions[(name.length*surname.length)%20]}.`

  const result = document.getElementById("result");
  result.textContent = text;
})