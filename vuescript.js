let app = new Vue({
  el: '#main',
  data: {
    soc1: Math.floor(Math.random()*15 + 1),
    soc2: Math.floor(Math.random()*15 + 1),
    soc3: Math.floor(Math.random()*15 + 1),
    soc4: Math.floor(Math.random()*15 + 1),
    soc5: Math.floor(Math.random()*15 + 1),
    soc6: Math.floor(Math.random()*15 + 1),
    soc7: Math.floor(Math.random()*15 + 1),
    soc8: Math.floor(Math.random()*15 + 1),
    soc9: Math.floor(Math.random()*15 + 1),
    soc10: Math.floor(Math.random()*15 + 1),
    soc11: Math.floor(Math.random()*15 + 1),
    soc12: Math.floor(Math.random()*15 + 1),
    soc13: Math.floor(Math.random()*15 + 1),
    soc14: Math.floor(Math.random()*15 + 1),
    soc15: Math.floor(Math.random()*15 + 1),
    soc16: ' ',
    counter: 0,
  },
  methods: {
    check: function mismatch(){
          for (let n=1; n<=15; n++){
          	for (let i=1;i<n;i++){
          		if(app['soc'+n]==app['soc'+i]){
          			app['soc'+n]=Math.floor(Math.random()*15 + 1);
          			i=0;
          		}
          	}
          }
        },
    switcher: function switcher(n){
      let empty = document.getElementById('empty');
      let elem = document.getElementById(n);
      console.log (empty);
      let right = n + 1;
      let left = n - 1;
      let under = n + 4;
      let uper = n - 4;
      if (app["soc"+right] == ' ') {
        elem.classList.remove("blocks");
        elem.setAttribute("id", "empty");
        elem.classList.add("inactive");
        empty.setAttribute("id", right);
        empty.classList.add("blocks");
        empty.classList.remove("inactive");
        let thirdperm = app["soc"+n];
      	app["soc"+n]=app["soc"+right];
        app["soc"+right]=thirdperm;
        console.log('right');
        this.counter=this.counter + 1;
        win();
      } else if (app["soc"+left] == ' ') {
        elem.classList.remove("blocks");
        elem.setAttribute("id", "empty");
        elem.classList.add("inactive");
        empty.setAttribute("id", left);
        empty.classList.add("blocks");
        empty.classList.remove("inactive");
        let thirdperm = app["soc"+n];
        app["soc"+n]=app["soc"+left];
        app["soc"+left]=thirdperm;
        console.log('left');
        this.counter=this.counter + 1;
        win();
      } else if (app["soc"+under] == ' ') {
        elem.classList.remove("blocks");
        elem.setAttribute("id", "empty");
        elem.classList.add("inactive");
        empty.setAttribute("id", under);
        empty.classList.add("blocks");
        empty.classList.remove("inactive");
        let thirdperm = app["soc"+n];
        app["soc"+n]=app["soc"+under];
        app["soc"+under]=thirdperm;
        console.log('under');
        this.counter=this.counter + 1;
        win();
      } else if (app["soc"+uper] == ' ') {
        elem.classList.remove("blocks");
        elem.setAttribute("id", "empty");
        elem.classList.add("inactive");
        empty.setAttribute("id", uper);
        empty.classList.add("blocks");
        empty.classList.remove("inactive");
        let thirdperm = app["soc"+n];
        app["soc"+n]=app["soc"+uper];
        app["soc"+uper]=thirdperm;
        console.log('uper');
        this.counter=this.counter + 1;
        win();
      }
    },
  },
})
app.check();
function win(){
  if (app.soc1 == '1' && app.soc2 == '2' && app.soc3 == '3' && app.soc4 == '4' && app.soc5 == '5' && app.soc5 == '5' && app.soc6 == '6' && app.soc7 == '7' && app.soc8 == '8' && app.soc9 == '9' && app.soc10 == '10' && app.soc11 == '11' && app.soc12 == '12' && app.soc13 == '13' && app.soc14 == '14' && app.soc15 == '15') {
    alert('Победа!');
  }
}
