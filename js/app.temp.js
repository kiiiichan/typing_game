//検証ツールのコンソールにコメントを出せる。変数を出すようにしておくなど
//console.log('hello');

window.addEventListener("DOMContentLoaded", () => {
  
    //const は定数設定。htmlのID:judgement（判定ボタン）にjudge_buttonという名前をつけた
    const judge_button = document.getElementById("judgement");
    //入力欄にplayer_typeという名前をつけた
    const player_type = document.getElementById("your_type");
    const start_button = document.getElementById("start_button");
    const image = document.getElementById("image");
    let count = 0;
    let state = true;
    
/*        //問題を多次元配列で登録　箱：items　答え：answer　問題：text　イラスト：image
    let items = [
      { answer: "卑弥呼" , text1: "お告げ聞く" , text2: "邪馬台国の" , text3: "女王さま" , image:"../image/01.png"},
      { answer: "聖徳太子" , text1: "能力で" , text2: "与える冠位" , text3: "十二階" , image:"../image/02.png"},
      { answer: "蘇我馬子" , text1: "豪族で" , text2: "推古天皇の" , text3: "おじさんよ"  , image:"../image/03.jpg"},
      { answer: "小野妹子" , text1: "遣隋使" , text2: "聖徳太子に" , text3: "命じられ"  , image:"../image/04.png"},
      { answer: "中臣鎌足" , text1: "死ぬ直前" , text2: "藤原の姓を" , text3: "与えられ"  , image:"../image/05.png"},
      { answer: "天智天皇" , text1: "壬申の乱" , text2: "甥に勝って" , text3: "天皇に"  , image:"../image/06.png"}
      ];
  */    
  //いらない？  image.src = "../image/start.png";  // 開始画像表示
  
//いらない？  start_button.addEventListener("click", function(){
      
/*    // 配列をシャッフル
    function shuffle(items) {
      for (let i = items.length - 1; i >= 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        // 配列の数値を入れ替える
        [items[i], items[rand]] = [items[rand], items[i]]
      }
      return items;
    }
      
    items = shuffle(items);
  */
    
    //最初の問題文を表示
    const text1 = document.getElementById("text1");
    text1.textContent = items[0].text1;
    const text2 = document.getElementById("text2");
    text2.textContent = items[0].text2;
    const text3 = document.getElementById("text3");
    text3.textContent = items[0].text3;

    image.src = items[0].image;
      
  //制限時間
  const timer = document.getElementById("timer");
  let TIME = 30;
  
  const countdown = setInterval(function(){
    
    timer.textContent = '残り：' + --TIME + '秒';
  if(TIME <= 0) finish();
    
  }, 1000);
  
  // テキスト入力欄にカーソルを入れる
  document.getElementById('your_type').focus();
  document.getElementById('your_type').style.backgroundColor =  '#FFFFFF'; // 入力欄の色を変える
  

  
  function finish(){
    clearInterval(countdown);
    image.src = "../image/end.jpg";  // 終了画像表示
    document.getElementById('your_type').style.backgroundColor =  '#0D95A0'; // 入力欄の色を変える
    player_type.value = "";

  //  const score = document.getElementById("text2");
    text2.textContent = '正解数は' + count  + '個でした！';
    text1.textContent = "";
    text3.textContent = "";
  
    state = false;

  
    
  }
  })  

var i = 0 ;

  //判定ボタンをクリックしたときのイベントを定義。無名関数を設定
  judge_button.addEventListener("click", function(){
  //let はブロックスコープの変数定義。入力値にinputと名前をつけた
    let input = player_type.value;
    
    if(!state) return; //終了後に操作できないようにする
      
    let answer = items[i].answer;
    
    console.log(answer);
    //入力値が答えと同じだったら正解、違ったら不正解をコンソールログに出力
    if(input == answer){
      console.log("正解");
      count = count + 1 ;
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
    
  
  })
})




 /*
   min-max間のランダムな整数を返す
 */
 function getRandomIntInclusive(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
 }

