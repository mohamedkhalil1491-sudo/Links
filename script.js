// ===============================
// Dr. Mohamed Khalil Website
// script.js
// ===============================

const english = {

doctorName: "Dr. Mohamed Khalil",

doctorTitle: "Ophthalmologist",

doctorSubtitle:
"Laser Vision Correction • Cataract Surgery • Comprehensive Eye Care",

bookText: "Book Appointment",

instagramText: "Instagram",

aboutTitle: "About",

aboutText:
"Dedicated to providing modern evidence-based eye care with special interest in laser vision correction, cataract surgery and comprehensive ophthalmology.",

locationTitle: "Clinic Locations",

zagazigTitle: "Zagazig",

cairoTitle: "New Cairo"

};

const arabic = {

doctorName: "د. محمد خليل",

doctorTitle: "أخصائي طب وجراحة العيون",

doctorSubtitle:
"تصحيح الإبصار بالليزر • جراحات المياه البيضاء • زراعة العدسات",

bookText: "احجز موعد",

instagramText: "إنستجرام",

aboutTitle: "نبذة",

aboutText:
"نقدم رعاية متكاملة للعين وفق أحدث المعايير العلمية مع اهتمام خاص بتصحيح الإبصار بالليزر وجراحات المياه البيضاء وزراعة العدسات.",

locationTitle: "أماكن العيادات",

zagazigTitle: "الزقازيق",

cairoTitle: "التجمع الخامس"

};

function applyLanguage(lang){

document.getElementById("doctorName").innerHTML=lang.doctorName;

document.getElementById("doctorTitle").innerHTML=lang.doctorTitle;

document.getElementById("doctorSubtitle").innerHTML=lang.doctorSubtitle;

document.getElementById("bookText").innerHTML=lang.bookText;

document.getElementById("instagramText").innerHTML=lang.instagramText;

document.getElementById("aboutTitle").innerHTML=lang.aboutTitle;

document.getElementById("aboutText").innerHTML=lang.aboutText;

document.getElementById("locationTitle").innerHTML=lang.locationTitle;

document.getElementById("zagazigTitle").innerHTML=lang.zagazigTitle;

document.getElementById("cairoTitle").innerHTML=lang.cairoTitle;

if(lang===arabic){

document.body.style.direction="rtl";

document.body.style.fontFamily="'Cairo',sans-serif";

document.documentElement.lang="ar";

}else{

document.body.style.direction="ltr";

document.body.style.fontFamily="'Poppins',sans-serif";

document.documentElement.lang="en";

}

}

document.getElementById("englishBtn").addEventListener("click",()=>{

localStorage.setItem("language","en");

applyLanguage(english);

});

document.getElementById("arabicBtn").addEventListener("click",()=>{

localStorage.setItem("language","ar");

applyLanguage(arabic);

});

const savedLanguage=localStorage.getItem("language");

if(savedLanguage==="ar"){

applyLanguage(arabic);

}else{

applyLanguage(english);

}

// ===============================
// Simple fade-in animation
// ===============================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".locationCard,.about,.hero-content").forEach((el)=>{

el.style.opacity="0";

el.style.transform="translateY(30px)";

el.style.transition="all .8s ease";

observer.observe(el);

});
