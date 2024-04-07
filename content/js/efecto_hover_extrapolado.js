
  $(document).ready(function() {
    $("#tablabotones a").hover(
        function() { $("#mifotografia").css({"box-shadow": "0px -10px 40px 0px rgb(0, 112, 198)",
        "transition": "0.3s ease"});},
        function() {$("#mifotografia").css({"box-shadow": "0px 0px 20px rgba(0, 0, 0, 0.619)",
        "transition": "0.3s ease"});},

    );
    $("#tablabotones a").hover(
        function() { $("#minombre").css({"color": "rgb(0, 112, 198)","font-size": "20px",
        "transition": "0.3s ease"});},
        function() {$("#minombre").css({"color": "rgb(0, 0, 0)","font-size": "17px",
        "transition": "0.3s ease"});},

    );
    $("#tablabotones a").hover(
        function() { $("#ingeniero").css({"color": "rgb(0, 0, 0)",
        "transition": "0.3s ease"});},
        function() {$("#ingeniero").css({"color": "rgba(0, 0, 0, 0.478)",
        "transition": "0.3s ease"});},

    );

});