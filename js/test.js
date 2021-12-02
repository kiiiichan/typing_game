window.onload = function(){
    
    //スタートボタンを押したらitemshuffleを動かす
    //その後で並び変えたitem順にconsole.logに出力
    
    const start_button = document.getElementById("start_button");
    
    let items = [1,2,3,4,5];
    
    let itemShuffle = (items) => {
        start_button.addEventListener("click", () => {
            for (let i = items.length - 1; i >= 0; i--) {
              let rand = Math.floor(Math.random() * (i + 1));
              // 配列の数値を入れ替える
              [items[i], items[rand]] = [items[rand], items[i]]
            }
            return items;
        })
    };
  
    let test = () => {
        start_button.addEventListener("click", () => {
            console.log(items[0],items[1],items[2],items[3],items[4]);
    
        })        
    };
    
    
    itemShuffle(items);
    test();
    
    //そのまま並べて書いたら並び変えたものが出力された
    //startボタンのaddEventListnerを追加したらスタートボタンを押した時点で並び変えたものが出力された
    
    
}