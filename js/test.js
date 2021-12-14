/*
var images = [
        "../image/01.png",
        "../image/02.png",
        "../image/03.png",
        "../image/04.png",
        "../image/05.png",
        "../image/06.jpg",
        "../image/07.png",
        "../image/08.png",
        "../image/09.png",
        "../image/10.png",
        "../image/11.png",
        "../image/12.jpg",
        "../image/13.png",
        "../image/14.png",
        "../image/15.jpg",
        "../image/16.jpg",
        "../image/end.jpg",
        "../image/perfect.png",
        "../image/start.png"];
        
*/


/*
new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => resolve(img);
  img.onerror = (e) => reject(e);
  img.src = "../image/01.png";
})
*/



/*
      const res = await loadImage('../image/01.png').catch(e => {
        console.log('onload error', e);
      });
      console.log(res.width, res.height);
    }
}

*/



/*
// 関数化

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = "../image/01.png";
  });


// async/await
async function main() {
  const res = await loadImage("../image/01.png").catch(e => {
    console.log('onload error', e);
  });
  console.log(res.width, res.height);
}
*/

/*  
----------------------
const img = new Image();

img.onload = () => {
  console.log(img.width, img.height);
}
img.src = '../image/01.png';
    
}
----------------------
*/


/*
img.src = '../image/01.png';

で画像を配列で複数渡すとどうなる？


----------------------

----------------------


渡せていて、読み込み前に処理が走ってるからサイズが0になっているぽい
ファイル名は表示できてる

これでできる？
https://techacademy.jp/magazine/15558

*/


/*
//これは画像１つのときうまくいってるぽい？


window.onload = function(){
  
//    loadImage(src) {
    function loadImage(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
//        img.onerror = (e) => reject(e);
        img.src = src;
      });
    
    }
    

    // async/await
    async function main() {
        const res = await loadImage('../image/01.png');
        console.log(res.src, res.width, res.height);
    }
    
    main();
    
}

*/
    
//ファイルを複数にしたい。うまくいかない    

window.onload = function(){
  
    function loadImage(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = src;
      });
    }

    // async/await
    async function main() {
        await loadImage('../image/01.png');
        await loadImage('../image/02.png');

        console.log("aaa");
    }
    
    main();
    
}
    
    
/*

    const img = new Image();
        
    for (var i = 0; i < images.length; i++){
        var img = document.createElement('img');
        img.src = images[i];
        console.log(img.src, img.width, img.height);
    }
    */