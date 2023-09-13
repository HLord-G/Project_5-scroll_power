
// kwaon ang position sa scroll 
let lastScrollTop = 0;
let window_scroll_num = 0;
let scrollKey = 0

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;




// function onscrll(element,screen_po) {



// let cont_1 = document.querySelector(`#${element}`);


// // kwaon ang height sa element
// let div_height = cont_1.offsetHeight;

// // kwaon ang screen size
// const screenWidth = window.innerWidth;
// const screenHeight = window.innerHeight;


// // kwaon ang mga position sa eleemnts
// const div_positions = {
//                top:     cont_1.offsetTop,
//             center:     div_height / 2,
//             bottom:     div_height + cont_1.offsetTop,
//        one_4th_top:     (div_height / 2) /2,
//     one_4th_bottom:     ((div_height / 2) /2)*3,
//     clips:      []
// }









//     // scroll function
// window.addEventListener("scroll", function() {
//     // Get the current scroll position
//     console.clear();
//     window_scroll_num = window.pageYOffset

//     // kwaon ang top screen position
//     function scrnTop(con) {
//         if (con) {
//             console.log(Math.floor(Number(window_scroll_num)))
//         }

//         return Math.floor(Number(window_scroll_num))
//     }
//     // kwaon ang center position sa screen
//     function scrnCenter(con){
//         if (con) {
//             console.log(Math.floor(Number(screenHeight/2+window_scroll_num)))
//         }

//         return Math.floor(Number(screenHeight/2+window_scroll_num))
//     }
//     // kwaon ang bottom postition sa screen 
//     function scrnBottom(con){
//         if (con) {
//             console.log(Math.floor(Number(screenHeight + window_scroll_num)))
//         }
//         return Math.floor(Number(screenHeight + window_scroll_num))
//     }



//     function scrollFunc(key,con=false){
//         switch (key) {
//             case "top":
//                 return Math.floor(Number(window_scroll_num))
//             break; //end

//             case "center":
//                 return Math.floor(Number(screenHeight/2+window_scroll_num))
//             break; //end
        
//             case "bottom":
//                 return Math.floor(Number(screenHeight + window_scroll_num))
//             break; //end
//         }
//     }

    
// // console.log(scrnBottom())






//     function animations(){
//         if (div_positions.one_4th_top <= scrollFunc(screen_po)) {
//             console.log("pass")
//         }
//     }




//     // kwaon ang scroll event defind kung up or down
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop) {// down
//         console.log("test down " + window_scroll_num)
//         animations()
//     }else{//up
//         console.log("test up "+ window_scroll_num)
//     }

//     // Update the last scroll position
//     lastScrollTop = scrollTop;
// })
// }
















function scrollWorks(screen_p) {
    window.addEventListener("scroll", function() {

        // Get the current scroll position
        console.clear();
        window_scroll_num = window.pageYOffset
    
        // kwaon ang top screen position
        function scrnTop(con) {
            if (con) {
                console.log(Math.floor(Number(window_scroll_num)))
            }
    
            return Math.floor(Number(window_scroll_num))
        }
        // kwaon ang center position sa screen
        function scrnCenter(con){
            if (con) {
                console.log(Math.floor(Number(screenHeight/2+window_scroll_num)))
            }
    
            return Math.floor(Number(screenHeight/2+window_scroll_num))
        }
        // kwaon ang bottom postition sa screen 
        function scrnBottom(con){
            if (con) {
                console.log(Math.floor(Number(screenHeight + window_scroll_num)))
            }
            return Math.floor(Number(screenHeight + window_scroll_num))
        }
    
    
    
    
    
    
        function scrollFunc(key){
            switch (key) {
                case "top":
                    return Math.floor(Number(window_scroll_num))
                break; //end
    
                case "center":
                    console.log(Math.floor(Number(screenHeight/2+window_scroll_num)))
                    return Math.floor(Number(screenHeight/2+window_scroll_num))
                break; //end
            
                case "bottom":
                    return Math.floor(Number(screenHeight + window_scroll_num))
                break; //end
            }
        }
    
        
    
        function animations(){
            if (1389 <= scrollFunc(screen_p)) {
                console.log("pass")
            }
        }
    
    
    
    
        // kwaon ang scroll event defind kung up or down
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {// down
            console.log("test down " + window_scroll_num)
            animations()
        }else{//up
            console.log("test up "+ window_scroll_num)
        }
    
        // Update the last scroll position
        lastScrollTop = scrollTop;
        })
}


 
scrollWorks("center")

























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

