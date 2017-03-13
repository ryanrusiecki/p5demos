//Ryan Rusiecki <rr1402@bard.edu> 
//March 13th, 2016
//IDEA 135
//Project 1 
//I have worked on this assignment with assistance from Keith O'Hara, Maeve Potter, as well as Ewan Creed. All of the statements displayed are taken or paraphrased from https://docs.google.com/spreadsheets/d/1sTkRkHLvZp9XlJOynYMXGslKY9fuB_e-2mrxqgLwvZY/edit#gid=652144590, http://www.alternet.org/media/14-fake-news-stories-created-or-publicized-donald-trump, http://www.cbsnews.com/latest/strange/, http://abcnews.go.com/Weird, and http://www.huffingtonpost.com/section/weird-news. 
var statements = ["Pope Francis shocks world, endorses Donald Trump for president", "WikiLeaks confirms Hillary sold weapons to ISIS, Then drops another bombshell", "FBI agent suspected in Hillary email leaks found dead in apartment murder-suicide", "FBI director received millions from Clinton Foundation, his brother’s law firm does Clinton’s taxes", "Hillary Clinton in 2013: I would like to see people like Donald Trump run for office; they’re honest and can’t be bought", "Obama signs executive order banning the pledge of allegiance in schools nationwide", "Woman Arrested For Defecating On Boss’ Desk After Winning The Lottery", "Florida man dies in meth-lab explosion after lighting farts on fire", "Police find 19 white female bodies in freezers with “Black Lives Matter” carved into skin", "Ex-Wife Ivana Claims Donald Trump Is Addicted to Penis Enlargement Pills", "TIME WARNER CABLE DECLINES TO RENEW CNN’S CONTRACT", "Germany folds to Shariah Law, Approves Child Marriages", "Doctor who treated Hillary’s blood clots found dead", "Pence: “Michelle Obama is the most vulgar first lady we’ve ever had”", "Obama cuts $2.6 billion from veterans while allocating $4.5 billion for Syrian migrants moving to America", "Chick-fil-A President Dan Cathy – “We Don’t Like The Blacks Either”", "George Washington had wooden teeth", "Kentucky Lawmaker Proposed Bill Requiring Men to Get Wives' Permission to Take Viagra", "Kentucky Lawmaker Proposed Bill Requiring Men to Get Wives' Permission to Take Viagra", "Galloping Moose Surprises Snowboarder On Colorado Run", "Fire Crews Rescue Iguana From Eastern Oregon House Fire", "Drunk Man Steals Forklift Keys", "Alaska Man Charged With Using Front End Loader To Steal ATM", "Parents Question School’s Slave Auction Poster Assignment", "Police Say Couple Staged Murder With Ketchup", "Boy Throws Fit Meeting Queen Elizabeth II", "Sea Turtle Flaps Flippers In 1st Rehab Swim After Surgery", "Hudson Valley Couple Claims $10M Jackpot From Scratch-Off", "4-year-old Takes Flight Amid High Winds In Cleveland Area", "Doctors Successfully Remove Grenade From Soldier’s Face", "Book Filled With Blank Pages Tops Amazon’s Best-Seller List", "Ohio Town Evicting 100-Pound Potbellied Pig", "Dozens Of Alligators Flock To Florida Sinkhole As Hikers Gawk", "Lawyer’s Pants Catch Fire During Arson Trial", "Michigan Man Gets Size-28 Shoes Thanks TO 3-D Printer", "California Police Find 2 Calves Crammed Inside Car", "City Employee Busted For Living In Makeshift Bedroom At Work", "Denver Zoo Giraffe Has Baby, After Getting Pregnant On Birth Control", "Sacramento Motorist Blows Through 3 Stoplights — Driving Backwards!", "Accused Toe-Sucker Faces New Claims Of Unwanted Food Touching", "Wallet Lost In 1952 Returned To Owner’s Son", "BMW In Which Tupac Shakur Was Fatally Shot Is For Sale For $1.5M", "President Of Iceland Reassures Nation He Won’t Ban Pineapple Pizza", "Baltimore Surgeon Gives Boy New Hand Using His Foot Bones", "Fifth-Grader Asks Police Department For Help With Homework", "Plane Collides With Deer in Charlotte, N.C.", "Atlanta Zoo Loses Bet, Names Tiny Cockroach After Tom Brady", "Ancient Sarcophagus Returned To Greece, Nearly 30 Years After It Was Stolen", "Oldest American, Adele Dunlap, Dead At 114", "Man Builds Church Of Snow For Village Without Chapel", "Boston Globe Early Edition Makes Wrong Call On Super Bowl", "Chicago Aquarium Euthanizes More Than 90-Year-Old Lungfish", "Superfan Heads To Super Bowl For 51st Time", "Teenagers Crash Car Into Swimming Pool On Way To School", "D.C. Schools Cancel Recess Over Escaped Bobcat", "Moose Falls Into Basement Of Idaho Home", "Texas Teacher Suspended Over Anti-Trump Stunt", "Family Adopts “Micro Pig,” Then It Grows To 650 Pounds", "Canadian Town Says There’s No Reason To Worry About Bright Pink Water", "Man Proposes To Girlfriend On Romantic Plane Ride, Immediately Throws Up", "Mom Pulls Gun On Other Mom In School Drop-Off Line", "Kid Runs On Set And Appears To Fart At TV Weatherman On The Air", "Dive Instructor Saves Shark With A Large Knife Wedged In Its Head", "Youth Basketball Coach Appears To Block Own Player’s Shot In A Game", "Guy Allegedly Poses As Nickelback Member To Get Some Sick Drum Equipment", "Video Of Giraffe About To Give Birth Removed For ‘Nudity And Sexual Content’", "Firefighter Busts Through Any Icy Lake To Save Trapped Dog", "Cinnamon Roll Can Explodes Inside Man’s Butt During Shoplifting Incident", "Woman Stabbed Her Husband To Death Because He Wouldn’t Eat Her ASS!", "Trump Offering Free One-Way Tickets to Africa & Mexico for Those Who Want to Leave America", "RAGE AGAISNT THE MACHINE To Reunite And Release Anti Donald Trump Album", "ISIS Leader Calls for American Muslim Voters to Support Hillary Clinton", "Woman murders college roomate for sending too many Candy Crush requests", "Donald Trump Protestor Speaks Out: “I was paid $3,500 To Protest Trump’s Rally", "Drug Kingpin Joaquin ‘El Chapo’ Guzman Escapes Mexican Prison For The Third Time", "President Obama Confirms He Will Refuse To Leave Office If Trump Is Elected", "Van Full of Illegals Shows Up To Vote Clinton At SIX Polling Places", "Security Detail Tackles Homeless Man On Oscars Red Carpet, Turned Out To Be Rob Zombie", "Man shoots off his own penis taking selfies with gun", "Pro-Lifers declare “Ejaculation Is Murder: Every Sperm Cell Is A Life”", "Rupaul Claims Trumped Touched Him Inappropriately In The 1990s", "Los Angeles Tap Water Contains 12% Xanax and 4% OxyCodone", "Panel Of Scientists Admits Woman Are Mammals, Yet ‘Not Human’", "Girl Infects 586 Men With HIV On Purpose", "Daycare Busted Running Toddler Fightclub, Parents Outraged", "Obama Signs Executive Order Declaring Investigation Into Election Results; Revote Planned For Dec. 19th", "Mike Pence: ‘Sarah Palin Is My Role Model For Beautiful, Smart American Women’", "Romanian Hacker With Access To Clinton Emails Found Dead In Jail Cell", "The United States Revokes Scientology’s Tax-Exempt Status", "Michael Jordan: ‘I Won’t Release Another Shoe Until Black People Unite’", "Woman With Too Much Makeup Mistaken As Clown; Attacked By Angry Mob", "Atlanta Officer Kills Black Woman, Injures Child, Following Breastfeeding Argument", "Woman Puts Poison On Her Vagina To Kill Husband When He Went Down On Her", "Donald Trump: ‘America Should Never Have Given Canada Its Independence’", "Zimbabwe: Group Of Lions Kills 5 Poachers And Injures 3 Others", "Obama Is A Kenyan Muslim Who Never Attended Columbia University", "Ted Cruz’s Father Was Involved In A Plot To Kill President Kennedy", "Thousands And Thousands Of Muslims were cheering’ on 9/11", "The Bowling Green Massacre of 2011 claimed 12 innocent lives"]
var values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var welcome;
var endgame = 0;
var benjerry1;
var chickfila;
var childimplant;
var benjerry2;
var ivankaputin;
var images = [ivankaputin, benjerry1, childimplant, chickfila, benjerry2]
var imagevalue = [0, 0, 0, 0, 1];
var input;
var button;
var score = 0;
var lives = 4;
var frameCount;
var countdown = 15;
var timer = 0;
var index = 0;
var fx = 666;
var fy = 500;
var fw = 100;
var fh = 50;
var tx = 333;
var ty = 500;
var tw = 100;
var th = 50;
var answer;

function preload() {
    benjerry1 = loadImage('assets/ben-jerry-trump.jpg');
    chickfila = loadImage('assets/chick-fil-a-racist-2.jpeg');
    childimplant = loadImage('assets/child_breast_implant.jpg');
    benjerry2 = loadImage('assets/empowermint.jpeg');
    ivankaputin = loadImage('assets/ivanka-putin-and-murdoch.jpg');
}

function setup() {
    createCanvas(999, 800);
    var welcome = 0;
    var endgame = 0;
    index = int(random(statements.length));
}

function draw() {
    if (welcome == 0); {
        mainScreen();
        openScreen();
    }
    if (welcome == 1) {
        mainScreen();
        gameScreen();
    }
    if (endgame == 1) {
        mainScreen();
        endScreen();
    }
    if (endgame == 2) {
        mainScreen();
        winScreen();
    }
}

function mainScreen() {
    background(255);
}

function openScreen() {
    var d = day();
    var h = hour();
    var m = month();
    var s = second();
    var y = year();
    var mi = minute();
    fill(0);
    textFont("Courier");
    textAlign(CENTER);
    textSize(15);
    text("Current time: " + h + ":" + mi + ":" + s, width / 2, 50);
    text("All content is based on news stories that have been published in 2016 and 2017.", width / 2, 700);
    textSize(16);
    textStyle(ITALIC)
    fill(255, 0, 0);
    text("*PLAYER DISCRETION IS ADVISED. INTENDED FOR MATURE PLAYERS.*", width / 2, 100)
    textStyle(NORMAL)
    textSize(10);
    fill(0);
    text("In this game you will be asked to determine whether something is TRUE or FALSE. You will be rewarded with XP accordingly. Be careful when making your decisions!", 333, 200, 333, 200);
    text("Estimated game time: ~ 5 minutes", 333, 150, 333, 50);
    text("Controls: Mouse", 333, 175, 333, 50);
    textSize(25);
    text("Welcome to Facts, B", width / 2, ((height / 4) * 2))
    textSize(75);
    fill(0);
    text("?", mouseX, mouseY);
}

function gameScreen() {
    textSize(75);
    fill(0);
    text("?", mouseX, mouseY);
    textSize(25);
    //timer
    var ctimer = int((timer - millis()) / 1000);
    text(ctimer, 50, 50);
    //lives 
    if (lives === 4) {
        text("? ? ? ?", 900, 50);
    }
    if (lives === 3) {
        text("? ? ?", 900, 50);
    }
    if (lives === 2) {
        text("? ?", 900, 50);
    }
    if (lives === 1) {
        text("?", 900, 50);
    }
    if (lives === 0) {
        endgame = endgame + 1;
    }
    //display main statement
    fill(50);
    textSize(15);
    if (millis() > timer && welcome === 1) {
        index = int(random(statements.length));
        timer = millis() + 10000;
    }
    textAlign(CENTER);
    text(statements[index], width / 2, height / 2);
    //dislpay score
    fill(50);
    textSize(15);
    text("Score:" + score, 150, 50);
    //draw and change color of false box and text
    //color change false box
    if ((mouseX > fx) && (mouseX < fx + fw) && (mouseY > fy) && (mouseY < fy + fh)) {
        fill(255);
    }
    else {
        fill(0);
    }
    rect(fx, fy, fw, fh);
    //text color change false box
    textSize(12);
    fill(255);
    textAlign(CENTER);
    text("FALSE", fx, fy, fw, fh);
    if ((mouseX > fx) && (mouseX < fx + fw) && (mouseY > fy) && (mouseY < fy + fh)) {
        fill(0);
    }
    else {
        fill(255);
    }
    text("FALSE", fx, fy, fw, fh);
    //draw and change color of true box and text
    //color change true box
    if ((mouseX > tx) && (mouseX < tx + tw) && (mouseY > ty) && (mouseY < ty + th)) {
        fill(255);
    }
    else {
        fill(0);
    }
    rect(tx, ty, tw, th);
    //text color change true box
    if ((mouseX > tx) && (mouseX < tx + tw) && (mouseY > ty) && (mouseY < ty + th)) {
        fill(0);
    }
    else {
        fill(255);
    }
    text("TRUE", tx, ty, tw, th);
    (boolean(ctimer));
    if (ctimer == false) {
        lives = lives - .5;
        frameRate(1);
    }
    else {
        frameRate(60);
    }
    if (score > 2500) {
        endgame = endgame + 2;
    }
    print(frameCount)
}

function endScreen() {
    background(0);
    fill(255);
    textAlign(CENTER);
    textSize(65);
    text("YOU CANNOT BE TRUSTED.", width / 2, height / 4);
    textSize(20);
    text("Score:" + score, width / 2, height / 3);
    textSize(15);
    text("Reload window to retry", width / 2, height / 2);
    noLoop();
}

function winScreen() {
    background(255);
    fill(0);
    textAlign(CENTER);
    textSize(75);
    text("WINNER!", width / 2, height / 4);
    textSize(15);
    text("Thank you for playing :) ", width / 2, height / 2);
    noLoop();
}

function keyPressed() {
    if (key === " ") {
        welcome = 1;
    }
    else {
        welcome = 0;
    }
}

function mousePressed() {
    if ((mouseX > fx) && (mouseX < fx + fw) && (mouseY > fy) && (mouseY < fy + fh)) {
        if ((values[index] == 0)) {
            score = score + 50;
            index = int(random(statements.length));
            timer = millis() + 10000;
        }
        else {
            lives = lives - 1;
            index = int(random(statements.length));
            timer = millis() + 10000;
        }
    }
    if ((mouseX > tx) && (mouseX < tx + tw) && (mouseY > ty) && (mouseY < ty + th)) {
        if ((values[index] == 1)) {
            score = score + 50;
            index = int(random(statements.length));
            timer = millis() + 10000;
        }
        else {
            lives = lives - 1;
            index = int(random(statements.length));
            timer = millis() + 10000;
        }
    }
}