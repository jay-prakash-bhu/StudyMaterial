// Dark Mode Toggle

document.addEventListener("DOMContentLoaded", function () {
    const darkModeBtn = document.getElementById("toggleDarkMode");

    function toggleDarkMode() {
        document.body.classList.toggle("dark");
        const isDarkMode = document.body.classList.contains("dark");
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
        darkModeBtn.innerText = isDarkMode ? "🌗 Light Mode" : "🌙 Dark Mode";
    }

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark");
        darkModeBtn.innerText = "🌗 Light Mode";
    }

    darkModeBtn.addEventListener("click", toggleDarkMode);
});

// Navigation Functions
function showHome() {
document.getElementById("home").style.display = "block";
document.getElementById("courses").style.display = "none";
document.getElementById("course-content").style.display = "none";
document.getElementById("blog").style.display = "none";
document.getElementById("contact").style.display = "none";
document.getElementById("quote-section").style.display="block";
}

function showCourses() {
    document.getElementById("home").style.display = "none";
    document.getElementById("courses").style.display = "block";
    document.getElementById("course-content").style.display = "none";
}

function showCourseContent(courseName) {
    document.getElementById("home").style.display = "none";
    document.getElementById("courses").style.display = "none";
    document.getElementById("course-content").style.display = "block";
    document.getElementById("course-title").innerText = courseName;

    document.getElementById("syllabus").href = "pdfs/" + courseName.replace(/\s+/g, '') + "-Syllabus.pdf";
    document.getElementById("notes").href = "pdfs/" + courseName.replace(/\s+/g, '') + "-Notes.pdf";
    // document.getElementById("pyq").href = courseName.replace(/\s+/g, '') + "-PYQ.pdf";
    document.getElementById("pyq").href = "pdfs/" + courseName.replace(/\s+/g, '') + "-PYQ.pdf";
    // document.getElementById("videos").href = "pdfs/" + courseName.replace(/\s+/g, '') + "-Videos.pdf";
    // Add YouTube links for each course
const videoLinks = {
"MSMC 201": "https://youtube.com/playlist?list=PLqvFn3F4z4AaLNq1LzGRhCNajsSSSvHP7&si=4CAxtNDDFOLrStth",
"MSMC 202": "https://www.youtube.com/watch?v=your_video_id_202",
"MSMC 203": "https://www.youtube.com/watch?v=your_video_id_203",
"MSMC 204": "https://www.youtube.com/watch?v=your_video_id_204",
"MSMC 205": "https://www.youtube.com/watch?v=your_video_id_205",
"MSMC 206": "https://www.youtube.com/watch?v=your_video_id_206"
};

// Set the YouTube link
document.getElementById("videos").href = videoLinks[courseName]||"#";
}

// Navigation Functions for Blog and Contact
function showBlog() {
document.getElementById("home").style.display = "none";
document.getElementById("courses").style.display = "none";
document.getElementById("course-content").style.display = "none";
document.getElementById("blog").style.display = "block";
document.getElementById("contact").style.display = "none";
}

function showContact() {
document.getElementById("home").style.display = "none";
document.getElementById("courses").style.display = "none";
document.getElementById("course-content").style.display = "none";
document.getElementById("blog").style.display = "none";
document.getElementById("contact").style.display = "block";
}

// Quotes Array
const quotes = [
"Sometimes, the heart speaks louder than words ever could.- Jay",


"Life isn’t about finding yourself; it’s about creating yourself, one step at a time. – Jay",


"Behind every smile, there’s a story that only the heart understands. – Jay",


"We don’t remember days, we remember moments. Make them count. - Jay",


"It’s okay to not have everything figured out; sometimes, the journey is the answer.– Jay",

"सपने वो नहीं जो हम सोते वक्त देखते हैं, सपने वो हैं जो हमें सोने नहीं देते। – ए. पी. जे. अब्दुल कलाम",
"खुद पर विश्वास रखो, दुनिया तुम्हारे कदमों में होगी। – स्वामी विवेकानंद",
"जो समय के साथ नहीं चलता, वह समय के साथ रुक जाता है। – डॉ. भीमराव अंबेडकर",
"सफलता तभी मिलती है जब हमारी मेहनत और हमारी उम्मीद एक साथ होती है। – महात्मा गांधी",
"आपका आज जैसा होगा, आपका भविष्य वैसा ही होगा। – श्रीराम शर्मा आचार्य",
"जिन्हें मंजिलें मिलती हैं, उन्हें रास्ते नहीं खोजने पड़ते। – चंद्रशेखर आज़ाद",
"मनुष्य को अपनी स्थिति से नहीं, अपनी सोच से पहचान मिलती है। – संत तिरुवल्लुवर",
"हमें डर से नहीं, संघर्ष से जीतना है। – भगत सिंह",
"खुश रहना एक कला है, और इसे हर कोई सीख सकता है। – डॉ. ए. पी. जे. अब्दुल कलाम",
"जो गिरकर संभलता है, वही जीवन की सच्ची समझ पाता है। – भगवान श्री कृष्ण",
"The only way to do great work is to love what you do. – Steve Jobs",
"Life is what happens when you're busy making other plans. – John Lennon",
"Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
"In the middle of every difficulty lies opportunity. – Albert Einstein",
"Your time is limited, so don't waste it living someone else's life. – Steve Jobs"
];

// Function to Get a Random Quote
function getQuoteOfTheDay() {
const randomIndex = Math.floor(Math.random() * quotes.length);
document.getElementById('quote-text').innerText = quotes[randomIndex];
}

// Call the function to display the quote when the page loads
document.addEventListener("DOMContentLoaded", getQuoteOfTheDay);

function toggleMenu() {
const menu = document.getElementById('menu');
const homeSection = document.getElementById('home');
menu.classList.toggle('show');

// If menu is open, add margin to the home section to push it down
if (menu.classList.contains('show')) {
homeSection.style.marginTop = '110px'; // Adjust based on the height of the navbar
} else {
homeSection.style.marginTop = '0';
}
}

// Hide menu on clicking a link
document.querySelectorAll('.menu a').forEach(item => {
item.addEventListener('click', () => {
document.getElementById('menu').classList.remove('show');
});
});


  // function createFlower() {
  //           const flower = document.createElement("div");
  //           flower.classList.add("flower");
  //           document.body.appendChild(flower);
  //           flower.style.left = Math.random() * window.innerWidth + "px";
  //           flower.style.animationDuration = Math.random() * 2 + 3 + "s";
  //       }

//         // Function to create water drops
//         function createWaterDrop() {
//             const waterDrop = document.createElement("div");
//             waterDrop.classList.add("water-drop");
//             document.body.appendChild(waterDrop);
//             waterDrop.style.left = Math.random() * window.innerWidth + "px";
//             waterDrop.style.animationDuration = Math.random() * 2 + 3 + "s";
//         }

//         // Start creating flowers and water drops
//         let flowerInterval = setInterval(createFlower, 200);
//         let waterDropInterval = setInterval(createWaterDrop, 300);

//         // Stop the effects after 10 seconds
// setTimeout(function() {
//     clearInterval(flowerInterval);   // Stop the flower rain
//     clearInterval(waterDropInterval);  // Stop the water drops

    // Remove flower elements from the DOM after 10 seconds
//     setTimeout(() => {
//         let flowers = document.querySelectorAll('.flower');
//         flowers.forEach(flower => flower.remove());
//     }, 1000);  // Wait for a second before removing flowers to let animations complete

//     // Remove water drop elements from the DOM after 10 seconds
//     setTimeout(() => {
//         let waterDrops = document.querySelectorAll('.water-drop');
//         waterDrops.forEach(drop => drop.remove());
//     }, 1000);  // Wait for a second before removing water drops to let animations complete

// }, 10000); // Stop after 10 seconds
