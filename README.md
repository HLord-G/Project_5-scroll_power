# Project_5-scroll_power

### pagka sunod-sunod sa file

```html
<head>
   <script src="scroller_view.js"> </script>
</head>
<body>
       <!-- code here -->
</body>

   <script src="scroller.js"> </script>
   <script src="scroller_app.js"> </script>
```
---
<br>

### mga meaning sa mga files

**scroller_view.js** - dili kaayu ni importante pero guide raman ni siya para ma kita ang animation.. <br>
**scroller.js** - dari ma kita ang functions sa scroller dili ni siya pwide hilabtan. <br>
**scroller_app** - dari nimo ma change imong mga data para sa scroll controller dari lang ka pwide mag hilabut ug sa *scroller_view.js*. 



---
<br>
# Scroller App JS

 
[0] - asa dapit mag start ang animations top, center, bottom <br> 
[1] - asa pwide mag animate lang up, bottom or both<br>
[2] - position number asa mag start ang animation<br>
[3] - position number asa mag end ang animation

```js
/*===========================  [ SCROLL DATA ] ===========================*/

let newData = new scroll_inAction("bottom","both",1297,1297)

```
<br>
---

### pag output sa data

```js
newData.autoProCesses(newData.scrollFunc())
```

mao ni pag *output* sa data, pag pa gawas raman ani ug true or false. eh check niya kung naka sulod naba siya sa starting point or lahus na siya sa end point.  eh butang ni siya sa scroll animation up ug down.



<br><br>


---

## Animations and Data

sulod lang sa animations UP and Down ug data ang eh update ani ang uban ayaw na hilabta.

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


<br><br><br><br>



---

ikaw na dayun bahala kung unsa mai Function nimo ato ang gamit lang gyud niya is mag output siya ug true or false kung naka sulod naka sa starting point ur sa end point 

<br>

pamaage ani dali lang sa imo mag animate or ma manupulate ug data pamaage lang sa pag scroll sa mouse nimo.






















