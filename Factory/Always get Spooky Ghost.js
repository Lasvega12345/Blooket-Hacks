 setInterval(function() {
   var obj = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state.choices[0];
   obj.name = "Spooky Ghost";
   obj.time = [
     0.1, 0.1 , 0.1 , 0.1 , 0.1];
   obj.cash = [1e100, 1e100, 1e100, 1e100, 1e100];
   obj.price = [0,0,0,0
   ]
   obj.class = "👻";
   obj.rarity = "Impossible";
   obj.level = 4;
   obj.bonus = 1.65
 })