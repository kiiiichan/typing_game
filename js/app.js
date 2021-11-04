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
  //答えは天智天皇だよ
  const answers = ["卑弥呼","聖徳太子","蘇我馬子","小野妹子","中臣鎌足","天智天皇"];
  /*
  let items = [
    { answer:'卑弥呼', text1:'お告げ聞く', text2:'邪馬台国の', text3:'女王さま', image:'img01' },
    { answer:"聖徳太子", text1:"聖徳太子", text2:"邪馬台国の", text3:"女王さま", image:"img02" },
    { answer:"蘇我馬子", text1:"蘇我馬子", text2:"邪馬台国の", text3:"女王さま", image:"img03" },
    { answer:"小野妹子", text1:"小野妹子", text2:"邪馬台国の", text3:"女王さま", image:"img04" },
    { answer:"中臣鎌足", text1:"中臣鎌足", text2:"邪馬台国の", text3:"女王さま", image:"img05" },
    { answer:"天智天皇", text1:"天智天皇", text2:"邪馬台国の", text3:"女王さま", image:"img06" },   
    ]
    */
    
//制限時間
const timer = document.getElementById("timer");
let TIME = 20;

const countdown = setInterval(function(){
  
  timer.textContent = '制限時間：' + --TIME + '秒';
if(TIME <= 0) finish();
  
}, 1000);

function finish(){
  clearInterval(countdown);
  answer.textContent = '正解数は' + count + '個でした！';
}

  //判定ボタンをクリックしたときのイベントを定義。無名関数を設定
  judge_button.addEventListener("click", function(){
  //let はブロックスコープの変数定義。入力値にinputと名前をつけた
    let input = player_type.value;
    let answer = answers[getRandomIntInclusive(0,answers.length-1)];
    console.log(answer);
    //入力値が答えと同じだったら正解、違ったら不正解をコンソールログに出力
    if(input == answer){
      console.log("正解");
    } else {
      console.log("不正解");
    }
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


