let width_ = 0
let main_number = window.innerHeight/2

// kwaon ang position sa scroll 
let lastScrollTop = 0;
let window_scroll_num = 0;
let scrollKey = 0
let scroll_UnD = "down"
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






class scroll_inAction {
    constructor(screen_p,scrllEvent,start_animation,end_animation) {
        this.screen_p_   = screen_p
        this.scrllEvent_ = scrllEvent
        this.aniNum_     = start_animation
        this.aniNum_end  = end_animation
    }



    scrollFunc(){
        switch (this.screen_p_) {
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


    autoProCesses(numbs){
        switch (this.scrllEvent_) {
            case "onup":
                if (scroll_UnD == "up") {
                    if (this.aniNum_  <= numbs && this.aniNum_end >= Math.floor(Number(window_scroll_num))) {
                        return "true"
                    }else{
                        return "false"
                    }
                }
            break;
            case "ondown":
                if (scroll_UnD == "down") {
                    if (this.aniNum_  <= numbs && this.aniNum_end >= Math.floor(Number(window_scroll_num))) {
                        return "true"
                    }else{
                        return "false"
                    }
                }
            break;
            case "both":
                if (this.aniNum_  <= numbs && this.aniNum_end >= Math.floor(Number(window_scroll_num))) {
                    return "true"
                }else{
                    return "false"
                }
            break;
        }


    }
}

















class scroll_engine{

    constructor(){
        this.console_style = "color:green;"
    }

    console_scrnTop(){
        console.log(`%c Top - ${Math.floor(Number(window_scroll_num))}`,this.console_style)
    }

    console_scrnCenter(){
        console.log(`%c Center - ${Math.floor(Number(screenHeight/2+window_scroll_num))}`,this.console_style)
    }

    console_scrnBottom(){
        console.log(`%c Bottom - ${Math.floor(Number(screenHeight + window_scroll_num))}`,this.console_style)
    }
}



































 