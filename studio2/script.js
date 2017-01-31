window.onload = function() {
    console.log("reading js");

    document.f.onsubmit = processForm;
    document.f.onreset = resetPage;

    function processForm() {

      var userBodypart = document.f.userBodypart.value;
      var userVerb = document.f.userVerb.value;
      var userAdjective_2= document.f.userAdjective_2.value;
      var userActionverb = document.f.userActionverb.value;
      var userAdjective = document.f.userAdjective.value;
      var userNoun = document.f.userNoun.value;
      var userName = document.f.userName.value;
      var userColor = document.f.userColor.value;

        var rap = document.getElementById("rap");
        var drk = document.getElementById("drk").style.display= "block";

        rap.innerHTML = "Baby I like your style<br><br>" + "Grips on your " + userBodypart + "<br>Front way, back way" + "<br>You know that I don't " + userVerb + "<br>Streets not " + userAdjective_2 + "<br>But I never " + userActionverb + " away<br>" + "Even when I'm away<br>" + "OT, OT is never much " + userAdjective + " when we go OT<br>" + "I pray to make it back in one piece<br>" + "I pray, I pray<br><br>" + "That's why I need a one " + userNoun + "<br>Got the " + userName + " in my hand<br>" + "One more time 'fore I go<br>" + "I have powers taking " + userColor + " on me<br>" + "I need a one " + userNoun + "<br>Got the " + userName + " in my hand<br>" + "One more time 'fore I go<br>" + "I have powers taking " + userColor + " on me";
        rap.className = "show";
        drk.className = "show";


        return false;
    }

    console.log("reading js");

    function resetPage() {
        rap.innerHTML = "";
        userName.value = "";
        userNoun.value = "";
        userBodypart.value = "";
        userAdjective.value = "";
        userColor.value = "";
        userAdjective_2.value = "";
        userActionverb.value = "";
        userVerb.value= "";

        rap.className = "hide";
        drk.className = "hide";


    }

}
