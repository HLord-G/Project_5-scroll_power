# Project_5-scroll_power
 
[0] - asa dapit mag start ang animations top, center, bottom <br> 
[1] - asa pwide mag animate lang up, bottom or both<br>
[2] - position number asa mag start ang animation<br>
[3] - position number asa mag end ang animation

```js
/*===========================  [ SCROLL DATA ] ===========================*/

let newData = new scroll_inAction("bottom","both",1297,1297)

```

```js

// mao ni ang scroll engine
let scrollApp = new scroll_engine()

/*===========================[START] [ SCROLL DATA ] [START]===========================*/

let datatest  = new scroll_inAction("bottom","both",1410,1410)
let tester    = new scroll_inAction("bottom","both",1297,1297)

/*===========================[ END ] [ SCROLL DATA ] [ END ]===========================*/ 

/*===========================  [ BOTTOM CODES ] ===========================*/ 
window.addEventListener("scroll", function() {
        console.clear();
        window_scroll_num = window.pageYOffset

    // kwaon ang scroll event defind kung up or down
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {// down
        scroll_UnD = "down"
        console.log("test down "+ Math.floor(Number(screenHeight + window_scroll_num)))
        scrollApp.console_scrnTop()
        scrollApp.console_scrnCenter()
        scrollApp.console_scrnBottom()
/*============================[START][ DOWN ANIMATION ][START]============================*/ 



        console.log(`is - ${datatest.autoProCesses(datatest.scrollFunc())}`)



/*============================[ END ][ DOWN ANIMATION ][ END ]============================*/ 
    }else{//up
        scroll_UnD = "up"
        console.log("test up "+ Math.floor(Number(screenHeight + window_scroll_num)))
        scrollApp.console_scrnTop()
        scrollApp.console_scrnCenter()
        scrollApp.console_scrnBottom()
/*============================[START][ UP ANIMATION ][START]============================*/ 



        console.log(`is - ${datatest.autoProCesses(datatest.scrollFunc())}`)



/*============================[ END ][ UP ANIMATION ][ END ]============================*/ 
    }
    // Update the last scroll position
    lastScrollTop = scrollTop;
    
})

```
