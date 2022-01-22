
// document Attribute
let form = document.forms[0];
let inputElement = document.querySelector("[name = 'elements']");
let inputTexts = document.querySelector("[name = 'texts']");
let selectType = document.querySelector("[name = 'type']");
let inputCreate = document.querySelector("[name = 'create']");
let optionDiv = document.querySelector("[value = 'Div']");
let optionSection = document.querySelector("[value = 'Section']");
let optionImg = document.querySelector("[value = 'img']");
let optionLink = document.querySelector("[value = 'link']");
let myResults = document.querySelector(".results");
inputElement.setAttribute("min", "0");
inputElement.setAttribute("max", "12");
// basic formats
form.style.cssText = "background-color:#fcfcfd;margin:0 auto;padding-top: 20px";
let styCss = "width: 330px;display: block;margin: auto;padding: 15px 20px;margin-bottom: 15px;border: none;font-size: 16px;background-color: #f1f1ff";
inputElement.style.cssText = styCss;
inputTexts.style.cssText = styCss;
selectType.style.cssText = styCss;
inputCreate.style.cssText = `${styCss};background-color: #009783`;
// start function 
form.onsubmit = function (el) {
  el.preventDefault();  // preventDefault
  document.querySelectorAll(".box").forEach(el => el.remove());// remove class
  // start images
  if (selectType.value === "img") {
    let myDivAll = document.createElement("div");
    myDivAll.className = "box spin";
    myResults.appendChild(myDivAll);
    myResults.style.cssText = "background-color: #000;display: flex;justify-content: center; align-items: center; height: calc(100vh - 300px)";
    myDivAll.style.cssText="position: relative;width: 200px;height: 300px;transform-style: preserve-3d;animation: rotat 15s linear infinite;-webkit-animation: rotat 15s linear infinite";
    for (let i = 1; i <= inputElement.value; i++) {
      let divImg = document.createElement("div");
      let img1 = document.createElement("img");
      img1.setAttribute("alt","img");
      myDivAll.appendChild(divImg);
      divImg.appendChild(img1);
      let images = [
        "img/1.png",
        "img/2.png",
        "img/3.png",
        "img/4.png",
        "img/5.png",
        "img/6.png",
        "img/7.png",
        "img/8.png",
        "img/9.png",
        "img/10.png",  
      ];
      for (let i = 0; i < images.length; i++) {
        let randomNum = Math.floor(Math.random() * images.length);
        let randomImgSrc = images[randomNum];
        img1.src = randomImgSrc;
      };
       //css img
      let dimgCss =  `transform:rotateY(calc(${i} * 45deg))translateZ(300px);position: absolute;top:0; left:0;height: 100%; width:100%;transform-style: preserve-3d`;
      divImg.style.cssText = dimgCss;
      let imgCss = `position: absolute;width: 100%;height: 100%`;
      img1.style.cssText = imgCss;
      if (inputElement.value < "5") {
        divImg.style.cssText = `${dimgCss};transform:rotateY(calc(${i} * 90deg))translateZ(100px)`;
        img1.style.cssText = imgCss;
      }
      if (inputElement.value === "1") {
        divImg.style.cssText = `${dimgCss};transform:rotateY(calc(${i} * 360deg))translateZ(0px)`;
        img1.style.cssText = imgCss;
      }
      if (inputElement.value === "5" ) {
        divImg.style.cssText = `${dimgCss};transform:rotateY(calc(${i} * 72deg))translateZ(150px)`;
        img1.style.cssText = imgCss;
      }
      if (inputElement.value === "6" ) {
        divImg.style.cssText = `${dimgCss};transform:rotateY(calc(${i} * 60deg))translateZ(200px)`;
        img1.style.cssText = imgCss;
      }
      divImg.id = `id-${i}`;
      // rotate img
      divImg.onclick = function () {
        divImg.classList.toggle("spin");
      }
    };
  };
  // end images
  // start div and Section
  if (selectType.value === "Div" ||selectType.value === "Section") {
    for (let i = 1; i <= inputElement.value; i++) {
      let Element = document.createElement(selectType.value);
      let divSectText = document.createTextNode(inputTexts.value);
      myResults.appendChild(Element);
      Element.appendChild(divSectText); 
      Element.className = "box";
      myResults.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 35px";
      Element.style.cssText = "background-color: #fc5213;color: #fff;text-align:center;padding: 10px;font-size: 25px;font-weight: 300; height:50px";
      Element.setAttribute("id", `id-${i+1}`);
    }
  };
 // end div and Section
 // start link
  if(selectType.value === "link") {
      for (let i = 1; i <= inputElement.value; i++) {
        let link = document.createElement('div');
        let myLink = document.createElement('div');
        let a = document.createElement('a')
        link.setAttribute("id", `link-${i+1}`);
        myResults.appendChild(link);
        link.appendChild(myLink);
        myLink.appendChild(a);
        a.setAttribute("target","_blank");       
        link.className ="box link";
        let zz = ["https://elzero.org/", "https://www.remove.bg/","https://pnghost.com/", "https://resizepic.com/","https://ninite.com/","https://mazwai.com/", "https://dictation.io/", "https://unsplash.com/","https://freesound.org/", "https://www.designevo.com/", "https://colorhunt.co/", "https://color.adobe.com/create/color-wheel", "https://brandcolors.net/", "https://www.pngall.com/", "https://www.flaticon.com/"]     
        for (let i = 0; i < zz.length; i++) {
          let randomNum = Math.floor(Math.random() * zz.length);
          let randomImgSrc = zz[randomNum];
          a.href = randomImgSrc;
        };
        if (a.href === "https://elzero.org/") {
        a.textContent = "أكاديمية الزيرو";
        } 
        if (a.href === "https://www.remove.bg/") {
          a.textContent = "إزالة خلفية الصورة";
        } 
        if (a.href === "https://pnghost.com/") {
          a.textContent = "1صور بدون خلفية";
        } 
        if (a.href === "https://resizepic.com/") {
          a.textContent = "التحكم فى حجم الصورة"
        } 
        if (a.href === "https://ninite.com/") {
          a.textContent = "برامج تحتاج اليها";
        } 
        if (a.href === "https://mazwai.com/") {
          a.textContent = "فيديهات بجودة عالية";
        } 
        if (a.href === "https://dictation.io/") {
          a.textContent = "اتكلم والكمبيوتر هيكتب";
        } 
        if (a.href === "https://unsplash.com/") {
          a.textContent = "صور عالية الجودة";
        } 
        if (a.href === "https://freesound.org/") {
          a.textContent = " المؤثيرات الصوتية مجانا";
        } 
        if (a.href === "https://www.designevo.com/") {
          a.textContent = "تصميم اللوجو";
        } 
        if (a.href === "https://colorhunt.co/") {
          a.textContent = "موقع الالوان1";
        } 
        if (a.href === "https://color.adobe.com/create/color-wheel") {
          a.textContent = "موقع الالوان 2";
        } 
        if (a.href === "https://brandcolors.net/") {
          a.textContent = " اكتب اسم التطبيق يطلعلك لونه";
        } 
        if (a.href === "https://www.pngall.com/") {
          a.textContent = "صور بدون خلفيه2";
        } 
        if (a.href === "https://www.flaticon.com/") {
          a.textContent = "موقع لتحميل الايقونات";
        } 
        myResults.style.cssText = "height:calc(100vh - 280px);display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 35px;background-color:#000; padding:50px";
        link.style.cssText = "position: relative; margin-bottom: 50px";
        myLink.style.cssText ="height: 70px;border-radius: 50px;-webkit-border-radius: 50px;position: absolute;text-align: center";    
        a.style.cssText = "min-width: 300px;margin-top: 5px;font-weight: bold;font-size: 25px;text-decoration: none;background-color: #f8a60f;padding: 10px 20px;border-radius: 50px;border-radius: 50px; border: 5px solid red;text-transform: uppercase; display: block;";
    }
  };
};
