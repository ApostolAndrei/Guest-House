window.onload = function() {
    var para = document.createElement("p");
    var node = document.createTextNode("Afla mai multe...");
    para.appendChild(node);
    var element = document.getElementById("content");
    element.appendChild(para);
    para.style.cursor = "pointer";

    para.onclick = function() {
        para.remove();
        var more = document.createElement("p");
        var nodee = document.createTextNode("Grădina spațioasă de aproximativ 4000 mp, cele două terase din lemn și balcoanele pline cu flori creează o ambianță placută. Arhitectura cu specific montan, care îmbina elemente din lemn masiv și piatră, aerul curat de munte și imprejurimile fac din această pensiune o locație perfectă pentru odihnă, în intimitate.Dacă sunteți sătui de forfota și stresul orașului, vă puteți relaxa citind o carte pe șezlong sau în hamac, făcând o binemeritată baie de aer și soare, iar seara puteți savura un pahar de vin pe terasă, într-o companie plăcută.");
        more.appendChild(nodee);
        var el = document.getElementById("content")
        element.appendChild(more);


    }

    var btn = document.getElementsByClassName("lightb");
    var btn2 = document.getElementsByClassName("darkb");

    btn[0].addEventListener("click", dark, true);
    btn2[0].addEventListener("click", light, true);

    var bdy = document.getElementsByTagName("body")

    function dark() {

        bdy[0].style.color = "black"
        document.getElementById("content").style.color = "black";
        bdy[0].style.backgroundImage = 'url("grey.jpg")'
        alert(window.getComputedStyle(bdy[0], null).getPropertyValue("background-image"));
        nodee.style.color = "black"

    }


    function light() {

        bdy[0].style.color = "white"
        document.getElementById("content").style.color = "white";
        bdy[0].style.backgroundImage = 'url("black2.jpg")'
        nodee.style.color = "white";

    }

    var disco = document.getElementsByClassName("discob")

    disco[0].onclick = change


    function change() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);
        var interval = setInterval(change, 100)
        document.body.style.background = bgColor;
    }

}