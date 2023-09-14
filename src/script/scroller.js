let width_ = 0
let main_number = window.innerHeight/2

// kwaon ang position sa scroll 
let lastScrollTop = 0;
let window_scroll_num = 0;
let scrollKey = 0
let scroll_UnD = ""
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;







try {
    $( function() {
        $( ".line" ).resizable({
            containment: ".screen_guid",
            maxWidth: width_,
            minWidth: width_,
        
            stop(){
                let line_div =  document.querySelector(`.line`);
                let line_pos =    line_div.getBoundingClientRect()
                $(".line_size").html(line_pos.height)
                main_number = line_pos.height
            }
        });
    } );
} catch (error) {}







try {
    let id_div        =  document.querySelector(`.screen_guid`);
    let id_positions =    id_div.getBoundingClientRect()


    console.log(id_positions.height / 2)

    $(".line").css({height:`${id_positions.height / 2}px`})
    $(".line_size").html(id_positions.height / 2)

    width_ = id_positions.width

} catch (error) {
    console.log("event was hidded dou to absents of the element")
}




















function scrollWorks(screen_p,scrllEvent,aniNum) {
    window.addEventListener("scroll", function() {

        // Get the current scroll position
        console.clear();
        window_scroll_num = window.pageYOffset
        var console_style = "color:green;"
        // kwaon ang top screen position
        function console_scrnTop() {
                console.log(`%c Top - ${Math.floor(Number(window_scroll_num))}`,console_style)
            // return Math.floor(Number(window_scroll_num))
        }
        // kwaon ang center position sa screen
        function console_scrnCenter(){
                console.log(`%c Center - ${Math.floor(Number(screenHeight/2+window_scroll_num))}`,console_style)
            // return Math.floor(Number(screenHeight/2+window_scroll_num))
        }
        // kwaon ang bottom postition sa screen 
        function console_scrnBottom(){
                console.log(`%c Bottom - ${Math.floor(Number(screenHeight + window_scroll_num))}`,console_style)
            // return Math.floor(Number(screenHeight + window_scroll_num))
        }
    
    
    
    
    
    
        function scrollFunc(key){
            switch (key) {
                case "top":
                    return Math.floor(Number(window_scroll_num))
                break; //end
    
                case "center":
                    if (main_number == 0) {
                        main_number = Math.floor(Number(screenHeight/2+window_scroll_num))
                        console.log(Math.floor(Number(screenHeight/2+window_scroll_num)))
                        return Math.floor(Number(screenHeight/2+window_scroll_num))
                        // main_number = Math.floor(Number(screenHeight/2+window_scroll_num))

                    }else{
                        holder =  Math.floor(Number(screenHeight - main_number)) 
                        remove_niga = Math.abs(holder)
                        
                        if (main_number <= screenHeight/2) {

                            console.log(`- ${Math.abs(Math.floor(Number(screenHeight - remove_niga +window_scroll_num)))}`)
                            return  Math.abs(Math.floor(Number(screenHeight - remove_niga +window_scroll_num)))
                        }else{
        
                            console.log(`+ ${Math.abs(Math.floor(Number(screenHeight - remove_niga +window_scroll_num)))}`)
                            return  Math.abs(Math.floor(Number(screenHeight - remove_niga +window_scroll_num)))
                        }

                    }
                    
                break; //end
            
                case "bottom":
                    return Math.floor(Number(screenHeight + window_scroll_num))
                break; //end
            }
        }
    
        
    
        function autoProCesses(event){
            switch (event) {
                case "onup":
                    if (scroll_UnD == "up") {
                        if (aniNum <= scrollFunc(screen_p) && 1395 >= Math.floor(Number(window_scroll_num))) {
                            console.log("pass")
                        }
                    }
                break;
                case "ondown":
                    if (scroll_UnD == "down") {
                        if (aniNum <= scrollFunc(screen_p) && 1395 >= Math.floor(Number(window_scroll_num))) {
                            console.log("pass")
                        }
                    }
                break;
                case "both":
                    if (aniNum <= scrollFunc(screen_p) && 1395 >= Math.floor(Number(window_scroll_num))) {
                        console.log("pass")
                    }
                break;
            }


        }
    
    
    
    
        // kwaon ang scroll event defind kung up or down
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {// down
            scroll_UnD = "down"
            console.log("test down " + window_scroll_num)
            console_scrnTop()
            console_scrnCenter()
            console_scrnBottom()
            
            autoProCesses(scrllEvent)
        }else{//up
            scroll_UnD = "up"
            console.log("test up "+ window_scroll_num)
            console_scrnTop()
            console_scrnCenter()
            console_scrnBottom()
            
            autoProCesses(scrllEvent)
        }
    
        // Update the last scroll position
        lastScrollTop = scrollTop;
        })
}


 







class scrFunks {
    constructor(name ) {
        this.user = name
     }

     scroll_works(screen_p,scrllEvent,aniNum){
        window.addEventListener("scroll", function() {

            // Get the current scroll position
            console.clear();
            window_scroll_num = window.pageYOffset
            var console_style = "color:green;"
            // kwaon ang top screen position
            function console_scrnTop() {
                    console.log(`%c Top - ${Math.floor(Number(window_scroll_num))}`,console_style)
                // return Math.floor(Number(window_scroll_num))
            }
            // kwaon ang center position sa screen
            function console_scrnCenter(){
                    console.log(`%c Center - ${Math.floor(Number(screenHeight/2+window_scroll_num))}`,console_style)
                // return Math.floor(Number(screenHeight/2+window_scroll_num))
            }
            // kwaon ang bottom postition sa screen 
            function console_scrnBottom(){
                    console.log(`%c Bottom - ${Math.floor(Number(screenHeight + window_scroll_num))}`,console_style)
                // return Math.floor(Number(screenHeight + window_scroll_num))
            }
        
        
        
        
        
        
            function scrollFunc(key){
                switch (key) {
                    case "top":
                        return Math.floor(Number(window_scroll_num))
                    break; //end
        
                    case "center":
                        if (main_number == 0) {
                            main_number = Math.floor(Number(screenHeight/2+window_scroll_num))
                            console.log(Math.floor(Number(screenHeight/2+window_scroll_num)))
                            return Math.floor(Number(screenHeight/2+window_scroll_num))
                            // main_number = Math.floor(Number(screenHeight/2+window_scroll_num))
    
                        }else{
                            let holder =  Math.floor(Number(screenHeight - main_number)) 
                            let remove_niga = Math.abs(holder)
                            
                            if (main_number <= screenHeight/2) {
    
                                console.log(`- ${Math.abs(Math.floor(Number(screenHeight - remove_niga +window_scroll_num)))}`)
                                return  Math.abs(Math.floor(Number(screenHeight - remove_niga +window_scroll_num)))
                            }else{
            
                                console.log(`+ ${Math.abs(Math.floor(Number(screenHeight - remove_niga +window_scroll_num)))}`)
                                return  Math.abs(Math.floor(Number(screenHeight - remove_niga +window_scroll_num)))
                            }
    
                        }
                        
                    break; //end
                
                    case "bottom":
                        return Math.floor(Number(screenHeight + window_scroll_num))
                    break; //end
                }
            }
        
            
        
            function autoProCesses(event){
                switch (event) {
                    case "onup":
                        if (scroll_UnD == "up") {
                            if (aniNum <= scrollFunc(screen_p) && 1395 >= Math.floor(Number(window_scroll_num))) {
                                console.log("pass")
                            }
                        }
                    break;
                    case "ondown":
                        if (scroll_UnD == "down") {
                            if (aniNum <= scrollFunc(screen_p) && 1395 >= Math.floor(Number(window_scroll_num))) {
                                console.log("pass")
                            }
                        }
                    break;
                    case "both":
                        if (aniNum <= scrollFunc(screen_p) && 1395 >= Math.floor(Number(window_scroll_num))) {
                            console.log("pass")
                        }
                    break;
                }
    
    
            }
        
        
        
        
            // kwaon ang scroll event defind kung up or down
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {// down
                scroll_UnD = "down"
                console.log("test down " + window_scroll_num)
                console_scrnTop()
                console_scrnCenter()
                console_scrnBottom()
                
                autoProCesses(scrllEvent)
            }else{//up
                scroll_UnD = "up"
                console.log("test up "+ window_scroll_num)
                console_scrnTop()
                console_scrnCenter()
                console_scrnBottom()
                
                autoProCesses(scrllEvent)
            }
        
            // Update the last scroll position
            lastScrollTop = scrollTop;
            })
     }
  }

  const myCar1 = new scrFunks("Harold");
//   myCar1.scroll_works("center","both",1402)


  const myCar2 = new scrFunks("Guzman");
  myCar2.user = myCar2.scroll_works("center","ondown",2008)
  


/*  
    (up or down or both)

    mao ni ge tawag na auto-processes kai auto matik sila mag end sa top sa screen
    kung visible na siya sa top sa screen automatic na mag end ang process.

*/// autoProCesses()


/*
    ge tawag ni siya na non-process becouse ikaw mag buhat kung asa dapit mag end
    og asa dapit mag start ang processes.
*/// nonProcess(end, start, end)




/*


*/// scrollWorks("bottom","onup") 









// class scrFunks {
//     constructor(idDiv,srcnP) {
//         this.id_div        =  document.querySelector(`#${idDiv}`);
//         this.id_positions =   this.id_div.getBoundingClientRect()
//         this.scrn_position =  `${srcnP}`;
//         this.screenWidth   =  window.innerWidth;
//         this.screenHeight  =  window.innerHeight;

//         this.div_size = {
//                 top:                this.id_positions.y,
//                 center:             this.id_positions.height / 2,
//                 bottom:             this.id_positions.height + this.id_positions.y,
//                 one_4th_top:        (this.id_positions.height / 2) /2,
//                 one_4th_bottom:     ((this.id_positions.height / 2) /2)*3,
//                 clips:              []
//                 }
//      }
//   }

