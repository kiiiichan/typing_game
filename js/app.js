//検証ツールのコンソールにコメントを出せる。変数を出すようにしておくなど
//console.log('hello');

/* メンタリング時
//window を対象要素にして、webページ読み込み完了時に発動するイベントを定義。アロー関数を設定
window.addEventListener("DOMContentLoaded", () => {
  //const は定数設定。htmlのID:judgement（判定ボタン）にjudge_buttonという名前をつけた
  const judge_button = document.getElementById("judgement");
  //入力欄にplayer_typeという名前をつけた
  const player_type = document.getElementById("your_type");
  //答えは天智天皇だよ
  const answer = "天智天皇";

  //判定ボタンをクリックしたときのイベントを定義。無名関数を設定
  judge_button.addEventListener("click", function(){
  //let はブロックスコープの変数定義。入力値にinputと名前をつけた
    let input = player_type.value;
    //入力値が答えと同じだったら正解、違ったら不正解をコンソールログに出力
    if(input == answer){
      console.log("正解");
    } else {
      console.log("不正解");
    }
  })
})
*/

window.addEventListener("DOMContentLoaded", () => {
  //const は定数設定。htmlのID:judgement（判定ボタン）にjudge_buttonという名前をつけた
  const judge_button = document.getElementById("judgement");
  //入力欄にplayer_typeという名前をつけた
  const player_type = document.getElementById("your_type");
  
  
  /*
  //答えは天智天皇だよ
  const answers = ["卑弥呼","聖徳太子","蘇我馬子","小野妹子","中臣鎌足","天智天皇"];
  //問題文を登録
  const items = ["お告げ聞く","聖徳太子text","蘇我馬子text","小野妹子text","中臣鎌足text","天智天皇text"];
  */
  
  //問題を多次元配列で登録　箱：items　答え：answer　問題：text
  let items = [
    { answer: "卑弥呼" , text1: "お告げ聞く" , text2: "邪馬台国の" , text3: "女王さま"},
    { answer: "聖徳太子" , text1: "能力で" , text2: "与える冠位" , text3: "十二階"},
    { answer: "蘇我馬子" , text1: "豪族で" , text2: "推古天皇の" , text3: "おじさんよ" },
    { answer: "小野妹子" , text1: "遣隋使" , text2: "聖徳太子に" , text3: "命じられ" },
    { answer: "中臣鎌足" , text1: "死ぬ直前" , text2: "藤原の姓を" , text3: "与えられ" },
    { answer: "天智天皇" , text1: "壬申の乱" , text2: "甥に勝って" , text3: "天皇に" }
    ];
    
  // 配列をシャッフル
  function shuffle(items) {
    for (let i = items.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      // 配列の数値を入れ替える
      [items[i], items[rand]] = [items[rand], items[i]]
    }
    return items;
  }
    
  items = shuffle(items);
  
  //最初の問題文を表示
  const text1 = document.getElementById("text1");
  text1.textContent = items[0].text1;
  const text2 = document.getElementById("text2");
  text2.textContent = items[0].text2;
  const text3 = document.getElementById("text3");
  text3.textContent = items[0].text3;
    
//制限時間
const timer = document.getElementById("timer");
let TIME = 200;

const countdown = setInterval(function(){
  
  timer.textContent = '制限時間：' + --TIME + '秒';
if(TIME <= 0) finish();
  
}, 1000);

function finish(){
  clearInterval(countdown);
  items[ item_no].answer.textContent = '正解数は' + count + '個でした！';
}

var i = -1 ;

  //判定ボタンをクリックしたときのイベントを定義。無名関数を設定
  judge_button.addEventListener("click", function(){
  //let はブロックスコープの変数定義。入力値にinputと名前をつけた
    let input = player_type.value;
    
    i = i+1 ;
      
    let answer = items[i].answer;
    
    console.log(answer);
    //入力値が答えと同じだったら正解、違ったら不正解をコンソールログに出力
    if(input == answer){
      console.log("正解");
    } else {
      console.log("不正解");
    }
    
    
  //問題文を表示
  const text1 = document.getElementById("text1");
  text1.textContent = items[i+1].text1;
  const text2 = document.getElementById("text2");
  text2.textContent = items[i+1].text2;
  const text3 = document.getElementById("text3");
  text3.textContent = items[i+1].text3;
    
  
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


