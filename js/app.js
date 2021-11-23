//検証ツールのコンソールにコメントを出せる。変数を出すようにしておくなど
//console.log('hello');


//ページ読みこんだタイミングで実施(全体)

window.addEventListener("DOMContentLoaded", () => {
  



  //ここから関数定義
  
  // 関数１．配列をシャッフル
  let itemShuffle = (items) => {
    for (let i = items.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      // 配列の数値を入れ替える
      [items[i], items[rand]] = [items[rand], items[i]]
    }
    return items;
  };
  
  //関数２．スタートボタン押下時の初期化設定
  let initGame = () => {
    
    //最初の問題文を表示
    text1.textContent = items[0].text1;
    text2.textContent = items[0].text2;
    text3.textContent = items[0].text3;
  
    image.src = items[0].image;
      
    //制限時間
    timer.textContent = '残り：' + TIME + '秒';
    
    // テキスト入力欄にカーソルを入れる
    document.getElementById('your_type').focus();
    document.getElementById('your_type').style.backgroundColor =  '#FFFFFF'; // 入力欄の色を変える
  
  //setintervalは一定時間ごとにこの処理をする
  //setInterval(関数function,一定時間の指定[,引数1,引数2,…])
  //0になったらfinish処理
  //1行目は　const countdown = setInterval( () => { としてもOKなはず。functionのほうが昔ながらの書き方
  
  };
  
  //関数３．カウントダウン
  const countdown = function(){
  return setInterval(function(){
      timer.textContent = '残り：' + --TIME + '秒';
      if(TIME <= 0) finish();
    }, 1000);
  }
  
  //関数４．時間切れ終了処理
    function finish(){
    clearInterval(countdown_pid);
    image.src = "../image/end.jpg";  // 終了画像表示
    document.getElementById('your_type').style.backgroundColor =  '#0D95A0'; // 入力欄の色を変える
    player_type.value = "";

  //  const score = document.getElementById("text2");
    text2.textContent = '正解数は' + correct_count  + '個でした！';
    text1.textContent = "";
    text3.textContent = "";
  
    state = false;
  }
  
//関数５．判定処理  


  function judge(){
    var i = 0;
    if(!state) return; //終了後に操作できないようにする
      
    let answer = items[i].answer;
    
    console.log(answer);
    //入力値が答えと同じだったら正解、違ったら不正解をコンソールログに出力
    if(input == answer){
      console.log("正解");
      correct_count = correct_count + 1 ;
      i = i+1 ;
      
    //問題文を表示
    const text1 = document.getElementById("text1");
    text1.textContent = items[i].text1;
    const text2 = document.getElementById("text2");
    text2.textContent = items[i].text2;
    const text3 = document.getElementById("text3");
    text3.textContent = items[i].text3;
    
    const image = document.getElementById("image");
    image.src = items[i].image;
    
    } else {
      console.log("不正解");
    }
  
    player_type.value = "";
    // テキスト入力欄にカーソルを入れる
    document.getElementById('your_type').focus();
    
  }
 
 //  関数．min-max間のランダムな整数を返す
 
 function getRandomIntInclusive(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
 }

  //変数定義
    let TIME = 20;
    const image = document.getElementById("image");
    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");
    const text3 = document.getElementById("text3");
    const start_button = document.getElementById("start_button");
    let items = [
      { answer: "卑弥呼" , text1: "お告げ聞く" , text2: "邪馬台国の" , text3: "女王さま" , image:"../image/01.png"},
      { answer: "聖徳太子" , text1: "能力で" , text2: "与える冠位" , text3: "十二階" , image:"../image/02.png"},
      { answer: "蘇我馬子" , text1: "豪族で" , text2: "推古天皇の" , text3: "おじさんよ"  , image:"../image/03.jpg"},
      { answer: "小野妹子" , text1: "遣隋使" , text2: "聖徳太子に" , text3: "命じられ"  , image:"../image/04.png"},
      { answer: "中臣鎌足" , text1: "死ぬ直前" , text2: "藤原の姓を" , text3: "与えられ"  , image:"../image/05.png"},
      { answer: "天智天皇" , text1: "壬申の乱" , text2: "甥に勝って" , text3: "天皇に"  , image:"../image/06.png"}
      ];
    const judge_button = document.getElementById("judgement");
    const player_type = document.getElementById("your_type");
    let input = player_type.value;
    const timer = document.getElementById("timer");
    let correct_count = 0;
    let state = true;
    timer.textContent = '制限時間：' + TIME + '秒';
    let countdown_pid ; 
  //変数定義終わり
    image.src = "../image/start.png";  // 開始画像表示

  let challangeFlow = () => {
    itemShuffle(items);
    items = itemShuffle(items);
    initGame(TIME);
    countdown_pid = countdown(TIME);


  };

      judge_button.addEventListener("click", () => {
        judge();
          console.log("judge");
    })

  start_button.addEventListener("click", () => {
    challangeFlow();
    console.log("start");

  })



})  