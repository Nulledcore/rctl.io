$(function(){
    $(".bash").typed({
        strings: ["dog metadata^100", "^500cat ^300metadata.txt^500"],
        typeSpeed: 50,
        backSpeed: 20,
        backDelay: 600,
        callback: function() {
            $("#about").show();
            $("#terminal").hide();
        },
    });
    firebase.initializeApp({
        apiKey: "AIzaSyBJL5xxdHbHeFD9hI69ekkwfRzKzN8HjsE",
        projectId: "rasmusj-se"
    });
    function showWarning(text){
        document.getElementById("rt-info-message").style.visibility = "visible";
        document.getElementById("rt-info-message").innerHTML = text;
    }
    function hideWarning(){
        document.getElementById("rt-info-message").style.visibility = "hidden";
        document.getElementById("rt-info-message").innerHTML = "";
    }
    var db = firebase.firestore();
    db.settings({
        timestampsInSnapshots: true
    });
    db.collection("meta").doc("info").onSnapshot(function(doc) {
        let info = doc.data()
        console.log("Here is some quick access to the important meta-data:")
        console.log(info)
        document.querySelector("#email-primary").innerHTML = info.email;
        document.querySelector("#email-primary").setAttribute("href", "mailto:" + info.email);
        document.querySelector("#email-primary-2").innerHTML = info.email;
        document.querySelector("#email-primary-2").setAttribute("href", "mailto:" + info.email);
        document.querySelector("#phone").innerHTML = info.phone;
        document.querySelector("#phone-alt").innerHTML = info.phoneAlt;
        document.querySelector("#phone-note").innerHTML = info.phoneNote;
        document.querySelector("#phone-alt-note").innerHTML = info.phoneAltNote;
        document.querySelector("#misc").innerHTML = info.misc;
        document.querySelector("#message").innerHTML = info.message;
        document.querySelector("#terminal-content").innerHTML = info.terminalContent;
        document.querySelectorAll(".dynamic-loading").forEach(x => x.style.display = "none")
        document.querySelectorAll(".dynamic-content").forEach(x => x.style.display = "block")
        info.warning ? showWarning(info.warning) : hideWarning() 
    });
});