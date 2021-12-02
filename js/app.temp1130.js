//検証ツールのコンソールにコメントを出せる。変数を出すようにしておくなど
//console.log('hello');


//ページ読みこんだタイミングで実施(全体)

window.onload = function(){

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

  //関数４．時間切れ終了処理（ChallengeClass）
    function finish(){
    clearInterval(countdown_pid);
    drawDisplay("",'正解数は' + correct_count  + '個でした！',"","../image/end.jpg");
    drawForm('#0D95A0');
    }
  
//関数５．タイピング型判定処理（ItemClass）
  
  function typeJudge(){
    player_type.addEventListener("keyup", () => {
    
    let input = player_type.value;
    let inputKanaa = romajiConv(input).toHiragana();//ほげほげt型
    let inputKana = inputKanaa.replace(/[^\u3040-\u309F]/g, '');//ほげほげ型
    
//入力したひらがなの数を出す
    var hira_count = 0;
    var j ;
    for(j=0; j < inputKana.length;j++){
        hira_count += inputKana[j].length;
    }
    
    //その時点での正解を出す
    let answer_kn = items[i].answer_kn[hira_count];//i番目の項目のkn_i文字目のひらがな
    
    //今入力したキー　keycd　　1個前に入力したキー　keycd_p を取得する
    //inputの文字数をカウント　input_count
    var input_count = 0;
    var k ;
    for(k=0; k < input.length;k++){
        input_count += input[k].length;
    }

    inputKanaa_eiji = inputKanaa.replace(/[^0-9a-z]/gi, '');
    
    //もし入力キーが3回n続きだったら　inputのひらがなを１文字削除
    if (input.charAt(input_count-1) == "n" && input.charAt(input_count-2) == "n" && input.charAt(input_count-3) == "n") {
    inputKana = inputKana.slice( 0, -1 ) ;
    
    //もし入力キーがnで1個前の入力キーがnじゃなかったら　inputのひらがなを１文字削除    
    } else if (input.charAt(input_count-1) == "n" && input.charAt(input_count-2) != "n") {
    inputKana = inputKana.slice( 0, -1 ) ;
    
    //入力値が最終の答えと一致していたらJudgeに進む
    } else if (inputKanaa == items[i].answer) {
      judge();
    
    //もしinputKanaaがその時点での答えと同じならcorrect_inputにinputを保存
    } else if (inputKanaa == answer_kn) {
      correct_input = inputKanaa;
      
    //もし英字が3つ続いたらcorrect_inputに戻す
    } else if (inputKanaa_eiji.length == 3) {
    player_type.value = correct_input ;

    //もし入力されたカナがその時点での答えと同じなら何もしない
    } else if (inputKana == answer_kn) {
      
    //もし入力されたカナがその時点での答えと同じでなければ      
    } else {
    player_type.value = correct_input ;
    }

  })
    } //typeJudge終わり
  
//関数６．判定処理  
  function judge(){
    
    if(!state) return; //終了後に操作できないようにする
    let input = player_type.value;
    let answer = items[i].answer;
    let inputKanaa = romajiConv(input).toHiragana();//ほげほげt型_画面表示用
    let inputKana = inputKanaa.replace(/[^\u3040-\u309F]/g, '');//ほげほげ型_判定用
    
    console.log("inputKana：" + inputKana);
    console.log("answer：" + answer);
    //入力値が答えと同じだったら正解、違ったら不正解をコンソールログに出力
    if(inputKana != answer){
      console.log("不正解");
      
    } else if(inputKana == answer && correct_count+1 == items.length) {
      clear();
    } else {
      
      console.log("正解");
      correct_count = correct_count + 1 ;
      i = i+1 ;
      init_item_display();
    }
  }
    
    //関数７．次の問題文を表示
  function init_item_display() {
    drawItemDisplay(i);
    drawForm('#FFFFFF');
  }

 //  関数．min-max間のランダムな整数を返す
 
 function getRandomIntInclusive(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
 }
 
 function bgmPlay(){
    start_button.addEventListener("click", () => {
    bgm.play();
    })
 }

  //変数定義
    let TIME = 30;
    const image = document.getElementById("image");
    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");
    const text3 = document.getElementById("text3");
    const start_button = document.getElementById("start_button");
    let items = [
      { answer_q: "卑弥呼" , answer: 'ひみこ' , answer_kn: ["","ひ","ひみ","ひみこ"] , text1: "お告げ聞く" , text2: "邪馬台国の" , text3: "女王さま" , image:"../image/01.png"},
      { answer_q: "聖徳太子" , answer: 'しょうとくたいし' , answer_kn: ["","し","しょ","しょう","しょうと","しょうとく","しょうとくた","しょうとくたい","しょうとくたいし"] , text1: "能力で" , text2: "与える冠位" , text3: "十二階" , image:"../image/02.png"},
      { answer_q: "蘇我馬子" , answer: 'そがのうまこ' , answer_kn: ["","そ","そが","そがの","そがのう","そがのうま","そがのうまこ"] , text1: "豪族で" , text2: "推古天皇の" , text3: "おじさんよ"  , image:"../image/03.jpg"},
      { answer_q: "小野妹子" , answer: 'おののいもこ' , answer_kn: ["","お","おの","おのの","おののい","おののいも","おののいもこ"] , text1: "遣隋使" , text2: "聖徳太子に" , text3: "命じられ"  , image:"../image/04.png"},
      { answer_q: "中臣鎌足" , answer: 'なかとみのかまたり' , answer_kn: ["","な","なか","なかと","なかとみ","なかとみの","なかとみのか","なかとみのかま","なかとみのかまた","なかとみのかまたり"] , text1: "死ぬ直前" , text2: "藤原の姓を" , text3: "与えられ"  , image:"../image/05.png"},
      { answer_q: "天智天皇" , answer: 'てんじてんのう' , answer_kn: ["","て","てん","てんじ","てんじて","てんじてん","てんじてんの","てんじてんのう"] , text1: "壬申の乱" , text2: "甥に勝って" , text3: "天皇に"  , image:"../image/06.png"}
      ];
    const judge_button = document.getElementById("judgement");
    const player_type = document.getElementById("your_type");
   // let input = player_type.value;
    const timer = document.getElementById("timer");
    let correct_count = 0;
    let state = true;
    timer.textContent = '制限時間：' + TIME + '秒';
    let countdown_pid ; 
    var i = 0;
    let bgm = new Audio('../audio/bgm01.mp3');
    let input = player_type.value;
    let correct_input = "" ;
    let inputKanaa_eiji;
  //変数定義終わり
    image.src = "../image/start.png";  // 開始画像表示
    
  let drawDisplay = (dtext1,dtext2,dtext3,dimage) => {
    //最初の問題文を表示
    text1.textContent = dtext1;
    text2.textContent = dtext2;
    text3.textContent = dtext3;
    image.src = dimage;
  };
  
  let drawItemDisplay = (itemNo) => {
    //最初の問題文を表示
    text1.textContent = items[itemNo].text1;
    text2.textContent = items[itemNo].text2;
    text3.textContent = items[itemNo].text3;
    image.src = items[itemNo].image;
  };
    
  let drawTimer = (dtimer) => {    //制限時間
    timer.textContent = dtimer;
  };
    
  let drawForm = (color) => {
    player_type.value = "";
    document.getElementById('your_type').focus();
    document.getElementById('your_type').style.backgroundColor =  color; // 入力欄の色を変える
  };
    
    
    
  //関数２．スタートボタン押下時の初期化設定（ChallengeClass）
  let initGame = (TIME) => {
    drawItemDisplay(0);
    drawForm('#FFFFFF');
    drawTimer('残り：' + TIME + '秒');
  };
  
  //setintervalは一定時間ごとにこの処理をする
  //setInterval(関数function,一定時間の指定[,引数1,引数2,…])
  //0になったらfinish処理
  //1行目は　const countdown = setInterval( () => { としてもOKなはず。functionのほうが昔ながらの書き方
  
  //関数３．カウントダウン（ChallengeClass）
  const countdown = function(){
    return setInterval(function(){
      drawTimer('残り：' + --TIME + '秒');
      if(TIME <= 0) finish();
    }, 1000);
  }
    
    function clear(){
    image.src = "../image/perfect.png";  // clear画像表示
    clearInterval(countdown_pid);
    timer.textContent = '';
    text1.textContent = TIME + '秒残しでクリア！';
    text2.textContent = 'おめでとうございます';
    text3.textContent = "";
    player_type.value = "";
  }
  
  
  //ここを書き換えてみる
  function getKeyCode(){
      player_type.addEventListener("keyup", (e) => {        //入力キーを取得
    const keycd = e.keyCode;
    console.log('入力したキーは　'+keycd);
      })
  }
  
    //全体処理流れ  
  start_button.addEventListener("click", () => {
    bgm.play();
    itemShuffle(items);
    items = itemShuffle(items);
    initGame(TIME);
    countdown_pid = countdown(TIME);

  getKeyCode();
  typeJudge();
  
  })

  
}
/*
if(!state) return; が機能していない？よくわかっていない
タイプ音とかクリアの音とかつける
正解と不正解が目で見てわかるように
*/