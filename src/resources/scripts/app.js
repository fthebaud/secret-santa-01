var secretsanta = {
    alert : function(text){
        $( ".container" ).append( "<div class='alert alert-success fade in'> <a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" + text + "</div>");
    }
}