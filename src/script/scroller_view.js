$(document).ready(function() {
    // Create the HTML structure using jQuery
    var screenGuid = $('<div>').addClass('screen_guid').css({"height":`${screenHeight}px`});
    var lineDiv = $('<div>').addClass('line').css({"height":`${screenHeight/2}px`});
    var lineSizeDiv = $('<div>').addClass('line_size').text('0');
    // Append the elements to form the desired structure
    screenGuid.append(
        lineDiv.append(lineSizeDiv)
    );


    // $('body').append(screenGuid);
});