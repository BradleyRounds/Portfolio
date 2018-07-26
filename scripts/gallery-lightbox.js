'use strict';

/*GLOBAL VARS*/
var slideIndex = 1,
	MaxSlideIndex = 0,
	descriptions = [],
  descriptionText,
	dots,
	slides,
	captionText,
  order;

function openLightboxWeb()          {
  order = 0;
    
  $('.lightbox:eq(' + order + ')').slideDown();
  $('.lightbox_row:eq(' + order + ')').slideUp();
  MaxSlideIndex = 2;
  descriptions = [""];
  slides = $('.lightboxWeb');
  descriptionText = $('.lightbox_description').eq(order);
  captionText = $('.lightbox_captionContainer').eq(order).children();
  dots = $('.Web-lightbox_previewImg');
}
function openLightboxSchool()       {
  order = 1;

  $('.lightbox:eq(' + order + ')').slideDown();
  $('.lightbox_row:eq(' + order + ')').slideUp();
  MaxSlideIndex = 7;
  descriptions = [
    "This site was made in my last semester of my Associates Degree, the site was all about PHP and database dependancy. We first sent in a project proposal detailing what we had in mind for mind cented around selling my comic book collection, it went something like this.<br><br><pre>Bradley Rounds<br>CWB-208<br>9/30/2017<br>Website Propose: <br>Sell my comic book collection (The ones I don’t want to keep)<br>At the very least, get all the information for the collection into a database.<br><br>Pages:<br>Intro/Home Page<br>Comic Book Series	(Semi static html page, images of the series volume 1 as the links to the books page)<br>Books Within Series (Multiple Pages, A layout populated with data from SQL Database)<br>Order Request Form Page (Linked to from the books page)<br><br>Form Inputs:<br>Series 		(Auto Filled from SQL) (Not changeable at form)<br>Issue #A	(Auto filled from SQL and Overwritable)<br>Issue #B	(Auto filled from SQL and Overwritable) (A and B to create a Range) (Optional)<br><br><br>Price		(Auto Filled from SQL)<br>Contact Info<br>	FirstName 		[Text Input]<br>	LastName		[Text Input]<br>	Email			[Text Input]<br>	Mailing Address		[Text Input]<br>		(Address)<br>		(City)<br>		(State)<br>		(Country)	[Default USA]<br>	Payment Option	[Radial Button Choices]<br><br><br>SQL Databases:<br>Prices<br>CREATE TABLE  (<br>  PriceCode int,			[Primary Key]<br>  Price float(5,2)<br>);<br><br><br>Books <br>CREATE TABLE books (<br>  SeriesID int,	[Primary Key]<br>  SeriesTitle varchar(20),		 [NotNull]<br>  BookTitle varchar(20),		 [NotNull]<br>  IssueNum int,<br>  Condition varchar(10),<br>  Publisher varchar(50),<br>  Year date,<br>  PriceCode int,	(Foreign Key)<br>);<br><br><br>Users<br>CREATE TABLE contact (<br>  PersonID int,				[Primary Key]<br>  LastName varchar(20),			[NotNull]<br>  FirstName varchar(25),<br>  Address varchar(75),<br>  City varchar(255),<br>  State char(2),<br> Country varchar(10),<br> PayPreferance int,<br>);</pre><br><br>A few things changed along the way after my proposal was approved, I first decided to go with a single page site, with a simple AJAX theme. Create, remove, hide and show div's and tables populated with the contents of the database. Running Queries and Inserts in the background of the site. The project was completed using simple HTML5 structure, SCSS for the design and layout, jQuery/javascript for the User experiance, SQL for the database interaction and phpMyAdmin for the databases' design and population.",
    "This website I created in the second class of the CTE program, and it reviews the Hardware, Software, and other computer things that we learned; like OS's (Operating systems), Securities, Storage, computer components, computer repair, networking and servers.",
    "This being the third version of the educational site, we took it up a level and like the second version, used Adobe Fireworks to create this time, the entire main design. Allowing for different monitor size compatability and an even more professional look and feel. You notice that the design changed dramatically, from the top-center navigation to the top-left navigation, we took a 850px by 600px image, and using Dreamweaver extended the images to fill whatever size or type of browser the user was using, like any other website nowadays does.",
    "This site is almost the same as the first educational website  1, however we used Adobe Fireworks CS6 to create a more professional &quot;button&quot; navigation bar, instead of just using links. Adding a more &quot;advanced&quot; look to the site. In this site and using Adobe Fireworks I learned about the different &quot;states&quot; of buttons.",
    "This project we learned about Dreamweaver, a program that writes most of the code for you. This is the reason that in the first website we learned to manually write code, the reason you know if you use a computer is that they are not perfect. There were 4 requirements for the assignment.<blockquote>1. The site must be educational based.<br />2. This site must have 5 pages, 1 sub-topic per page.<br />3. The site must have 3 external links<br />4. Every page must be validated and have a footer.<br /></blockquote>I chose the broad subject of science and history, and then the man topic of Archimedes. Sadly, I think this was a bad choice because there isn't a lot of info about his life and accomplishments. In the creation of this site we learned how to use a table to form a navigation bar at the top of the screen, and how validating your sites is important. Also about UCD (User Centered Design) and how to capture your viewers attention.",
    "The website also was during the second class of the CTE program. The requirements were to create from scratch a quick website in the form of an essay, 4 pages minimum, using an Adobe Fireworks button navigation, and correct XHTML and CSS validation. The content was to be made from the research I did on a judicial court case case of Horizon Group v. Amanda Bonnen that involved the Web (Twitter).",
    "In this website we learned the basics of coding a web-page using a lesson guide (<a href='http://www.math.unm.edu/writingHTML/tut/lessons.html' target='_blank'>Link</a>) and following a job aid, we completed lessons teaching us about the  HTML tags and design elements that make up a basic website. In the week that we had to complete this we were required to go up to a lesson with the option of doing more, I completed all of the lesson required then more up to lesson 23."];
  slides = $('.lightboxSchool');
  descriptionText = $('.lightbox_description').eq(order);
  captionText = $('.lightbox_captionContainer').eq(order).children();
  dots = $('.School-lightbox_previewImg');
}
function openLightboxPortfolio()    {
  order = 2;

  $('.lightbox:eq(' + order + ')').slideDown();
  $('.lightbox_row:eq(' + order + ')').slideUp();
  MaxSlideIndex = 3;
  descriptions = [
    "This is the portfolio that you are currently browsing, I made the bulk of this site in the fall of 2017. This site contains my portfolio pieces of Web Design, Illustration, Animation, Game Design as well as some coding projects of languages like Javascript, Python and PHP",
    "This website was my jumping point to this current one, while creating this site I was only focused on simple HTML structure and enough CSS to display all of my content within a reasonable amount of pages. As you can see with the screen-shot most of the structure has stayed the same through to this version.",
    "My first and oldest portfolio I have, this site was made in 2015 during a highschool CIS class. It was designed and built using Adobe Dreamweaver and Adobe Fireworks, the structure was table designed and the page 'look' was Firework images splicing. No forms, minimal css, and the portfolio page had three items on it."];
  slides = $('.lightboxPortfolio');
  descriptionText = $('.lightbox_description').eq(order);
  captionText = $('.lightbox_captionContainer').eq(order).children();
  dots = $('.Portfolio-lightbox_previewImg');
}
function openLightboxIllustration() {
  order = 3;

  $('.lightbox:eq(' + order + ')').slideDown();
  $('.lightbox_row:eq(' + order + ')').slideUp();
  MaxSlideIndex = 6;
  descriptions = [
    "For a final project in my animation 1 class at Front Range we had to make a poster for a music festival, real or imaginary using vector art and all of our own illustrations if we had any. I decided to do my own take on The Governors Ball, a real festival that takes place in NYC every year.",
    "",
    "",
    "This Illustration was a little creative project of my own when I wanted to become better at photoshops more intercate features, I dont believe that I'm a master at photoshop but this illustration proves that If i give something enough time that I can make some cool projects."];
  slides = $('.lightboxIllustration');
  descriptionText = $('.lightbox_description').eq(order);
  captionText = $('.lightbox_captionContainer').eq(order).children();
  dots = $('.Illustration-lightbox_previewImg');
}
function openLightboxAnimation()    {
  order = 4;

  $('.lightbox:eq(' + order + ')').slideDown();
  $('.lightbox_row:eq(' + order + ')').slideUp();
  MaxSlideIndex = 4;
  descriptions = [
    "",
    "",
    "",
    ""];
  slides = $('.lightboxAnimation');
  descriptionText = $('.lightbox_description').eq(order);
  captionText = $('.lightbox_captionContainer').eq(order).children();
  dots = $('.Animation-lightbox_previewImg');
}
function openLightboxGames()        {
  order = 5;

  $('.lightbox:eq(' + order + ')').slideDown();
  $('.lightbox_row:eq(' + order + ')').slideUp();
  MaxSlideIndex = 7;
  descriptions = [
    "Wack-a-Capsule<br><br>The first game I created was the Wack-A-Capsule game. The game plays like the classic Wack-a-Mole arcade game.<br><br><strong>Objective </strong>:Smack the 'Capsules' back down as they dodge in and out of their tubes trying to get a high score before the time runs out.<br><strong>Instructions: </strong>Click the Capsules with the mouse when they are visible.",
    "The second game I created is the classic Brick Breaker game, the old flip phone game. The game works by controling a paddle bouncing a ball at a block of seperate bricks, and when hitting them, you destroy them. When all of the briks are destroyed the game is over. For this game we learned to create animations inside of graphics and play them with an action.<br><br><strong>Objective </strong>:Get the Highest score you can while clearing all the blocks on the level.<br><strong>Instructions: </strong>Move the paddle side to side with the mouse.",
    "The third game I created is called Moon Fighter. The game contains a futuristic space ship that shoots down enemy ships over a moon landscape.<br>In creating this game we learned about having the code create multiple instances of a graphic and the code with them onto the stage. Which simulates an AI and not have to manually place all of the other graphics onto the game stage.<br><br><strong>Objective </strong>:The objective is to destroy all 60 of the enemy ships in the allotted 20 seconds.<br><strong>Instructions: </strong>Move side to side with the mouse and Click to Shoot.",
    "This game is a simulated World War 2 air defense game, where there are planes bombing a city and you have try and defend it using 3 turrets. And like in WWII you know you cannot win. During the creating of this game we learned how to optimize games, how to increase the possible frame-rate, and performance without sacrificing any graphics quality.<br><br><strong>Objective </strong>:The goal of the game is to try to destroy as many bombers as you can before your turrets are all destoyed.<br><strong>Instructions: </strong>Aim with the Mouse and Click to Shoot.",
    "This game is a card matching game, however all of the cards look exactly the same, to win, you have to match the sounds because you cannot compare the cards.<br>The objective is to match all of the cards with their pairs, and that's it! there isn't any timing or points, you just get to match them all. With this game we learned about embedding sounds into our games, which added another whole set of aspects our game's experience.<br><br><strong>Objective </strong>:The goal of the game is to Match the tiles by their Sound Cue.<br><strong>Instructions: </strong>A and D to move Left and Right, SPACE to jump.",
    "The second to last game we created in class, using adobe flashes' pixel copying syntax, taking a pre-created text file then reading the pre programed numbers to lay out a level.<br />To create the custom pre-dreated level we also had to create a level editor program which used the same syntax in reverse to take basically an image, and copy the numbers into the text file. For this game  we learned the special syntax, and reading / writing data from a external file.<br><br><strong>Objective </strong>:Collect all of the gold on the map.<br><strong>Instructions: </strong>Arrow Keys to move around and climb the ladders, SPACE to jump.",
    "This was the last game I created in that class, which involved having computer generated terrain, and level design. The objective or story of this game is that you are a rover on mars collecting water to make the planet more habitable.<br>We designed every aspect of this game from the ground up, each seperate piece of the rover (The wheels, undercarage, rollcage, exhaust, driver...) the gound, the rocks, the water drops while alltogether have them stay and work together w/ some realistic movement. And the most interesting part of this game was how the background and look of the terrain changes with the collection of the water.<br><br><strong>Objective </strong>:Change the planet buy collecting the water.<br><strong>Instructions: </strong>A and D to move Left and Right, SPACE to jump."];
  slides = $('.lightboxGames');
  descriptionText = $('.lightbox_description').eq(order);
  captionText = $('.lightbox_captionContainer').eq(order).children();
  dots = $('.Games-lightbox_previewImg');
}

function closeLightbox() {
  $('.myLightbox').slideUp();
  $('.lightbox_row').slideDown();
  slides = undefined;
  dots = undefined;
}

function showSlides(n) {
  /*KEEP n WITHIN BOUNDS*/
  if (n > MaxSlideIndex) {slideIndex = 1; }
  if (n < 1) {slideIndex = MaxSlideIndex; }

  slides.hide();
  slides[slideIndex - 1].style.display = 'block';
  dots.removeClass('activelightbox');
  dots[slideIndex - 1].classList.add('activelightbox');
  captionText.html(dots[slideIndex - 1].alt);
  descriptionText.html(descriptions[slideIndex - 1]);
}
function plusSlides(n) {showSlides(slideIndex += n); }
function currentSlide(n) {showSlides(slideIndex = n); }


$(document).ready(function () {
  $('.interior').click(closeLightbox);
});