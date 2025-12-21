const nesting = getNesting();

document.addEventListener("DOMContentLoaded", function () {
  loadLayoutByPetraPixel();
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToLinks();
}

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
<header>
<div class="header-image">
          <img src="https://i.imgur.com/RC88ntO.gif" alt="" />
        </div>
        <div class="header-content">
	        <nav>
	          <ul>
	            <li><a href="index.html">Home</a></a></li>
	            <li><a href="diary.html">Diary</a></li>
	            <li><a href="myart.html">Art Gallery</a></li>
              <li><a href="ezine.html">E-Zines</a></li>
	            <li><a href="#">Photobook</a></li>
              <li><a href="#">Music</a></li>
	            <li><a href="#">Resources</a></li>
	            <li><a href="othersocials.html">Other Socials</a></li>
	          </ul>
	        </>
		</div>
      </header>
	  
      <aside class="left-sidebar">
	  <img class="image" alt="hk angel gif" src="https://i.imgur.com/nMVuaOk.gif" style="width: 90%"/>
        <div class="sidebar-section">
          <div class="sidebar-title"><p>Hits & Current Visitors <img class="image" alt="stats gif" src="https://i.imgur.com/kGkEiqz.gif" style="width: 15%"/></p></div>
          <blockquote>
          <a style="position:static;z-index:1339; !important;top:55px;left:3px;" href="http://www.snazzyspace.com/generators/viewer-counter/" title="SnazzySpace.com Viewer Counter" target="_blank">
          <img src="http://www.snazzyspace.com/generators/viewer-counter/counter.php/fid=1766180608/style=6/counter.png" border="0"></a>
          </blockquote>
        </div>
            <div class="sidebar-section"> 
        <div class="sidebar-title">
        Feed Me!
        
        <img class="image" alt="slime gif" src="https://i.imgur.com/R2g2lwA.gif" style="width: 15%"/>
        </div>
 <div class="tamaNOTchi"> 
<a href="https://tamanotchi.world/28551c"><img src="https://tamanotchi.world/i2/28551" alt="It's tamaNOTchi! Click to feed!"></a>
</div>
</div>
        <div class="sidebar-section">
          <div class="sidebar-title">Changelog</div>
          <blockquote>
            <img class="full-width-image" src="https://i.imgur.com/ljzuUvy.gif">
          </blockquote>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">Monthly Poll</div>
         
         <form method="post" action="https://poll.pollcode.com/58231271"><div style="background-color:#dc85c3;padding:2px;width:135px;font-family:Arial;font-size:small;color:#000000;box-shadow: 0px 0px 5px #888;">
         <div style="padding:2px 0px 4px 2px;"><strong>isn't this website awesome?!</strong></div><input type="radio" name="answer" value="1" id="answer582312711" style="float:left;" /><label for="answer582312711" style="float:left;width:110px;">yeah</label>
         <div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="2" id="answer582312712" style="float:left;" /><label for="answer582312712" style="float:left;width:110px;">hell yeah!</label><div style="clear:both;height:2px;"></div>
         <div align="center" style="padding:3px;"><input type="submit" value=" Vote ">&nbsp;<input type="submit" name="view" value=" View "></div><div align="right" style="font-size:10px">pollcode.com <a href="https://pollcode.com/">free polls</a></div></div></form>

        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Press my buttons, baby!</div>
          <marquee>
		  	<a href="https://neocities.org/" target="_blank"><img src="https://i.imgur.com/R3SAZLs.gif" alt="neocities button"></a>
		  	<a href="https://jeaux.neocities.org/" target="_blank"><img src="https://i.imgur.com/cT78VA1.png" alt="queer button"></a>
        <a href="https://linktr.ee/onmysims" target="_blank"><img src="https://i.imgur.com/M5BQRvN.png" alt="OMS button"></a>
		  	<a href="https://code.visualstudio.com/" target="_blank"><img src="https://i.imgur.com/NqCGHlO.png" alt="vs studio button"></a>
        <a href="https://jeaux.neocities.org/" target="_blank"><img src="https://i.imgur.com/SYa54eN.gif" alt="sailor button"></a>
        <a href="https://jeaux.neocities.org/" target="_blank"><img src="https://i.imgur.com/T0quvnt.gif" alt="hk button"></a>
        <a href="https://x.com/onmysims" target="_blank"><img src="https://i.imgur.com/8Nzye80.gif" alt="sim fan button"></a>
		  </marquee>
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">My Fave Sites</div>
          <div class="fave-sites">
          <a href="https://www.linkslist.app/CuPswez" target="_blank"><img src="https://i.imgur.com/xSIuZ3W.gif" alt="fave sites button"></a>
        </div>
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Link back!</div>
          <div class="site-button">
		  	<a href="https://jeaux.neocities.org/" target="_blank"><img src="https://i.imgur.com/aDZvqvj.gif" alt="jeaux button"></a>
			<textarea><a href="https://jeaux.neocities.org/" target="_blank"><img src="https://i.imgur.com/aDZvqvj.gif" alt="jeaux button"></a></textarea>
		  </div>
        </div>
      </aside>
	
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
<footer><div>Thanks 4 visiting! <a href="#top">Back To Top.</a> Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's layout generator</a>.</div></footer>`;
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}

function giveActiveClassToLinks() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");

    if (href == "/" || href == "/index.html") {
      if (window.location.href == "http://localhost:8080/" || pathname == "/") {
        el.classList.add("active");
      }
    } else {
      if (window.location.href.includes(href)) {
        el.classList.add("active");

        if (el.closest("summary")) {
          el.closest("details").addAttribute("open");
          el.closest("summary").classList.add("active");
        }
      }
    }
  });
}
