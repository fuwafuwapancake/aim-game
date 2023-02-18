// HTMLから canvas要素を取得する
const resultDivided = document.getElementById('result-area');
const canvas = document.getElementById('canvas');

// canvasのサイズをウィンドウ一杯に広げる
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;

// canvas要素を2D(2次元)で扱う環境を取得する
const ctx = canvas.getContext('2d');

let positionX = 0;
let positionY = 0;
let radius = 25;

// 円を描く関数
function drawCircle() {
    // Math.random() は 0~1 の間の数値になる。 例: Math.random() = 0.545615443
    // Math.random() * 10 で 0 ~ 10 の間の数値になる。 例： Math.random() * 10 = 5.45615443
    // Math.floor(数値) で小数点以下を四捨五入する 例： Math.floor(5.45615443) = 5
    // ランダムな数値を取得して、それをキャンバスの範囲内の座標に変換している。
    positionX = Math.floor(Math.random() * canvas.width);
    positionY = Math.floor(Math.random() * canvas.height);
    // 10〜20の間の整数を取得している。
    radius = Math.floor(Math.random() * 10) + 20;

    // 描き始めの関数
    ctx.beginPath();

    // 円を描く
    ctx.arc(positionX, positionY, radius, 0, Math.PI * 2, true);

    // RGBの色要素をランダムで決定
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    // 塗りつぶし色の設定
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

    // 円を塗りつぶす
    ctx.fill();
    // 円弧を描く
    ctx.stroke();
}
let score = 0;

if (confirm('スタートをするならば何かのキーを押してください。')) {
    setTimeout(function () {
        confirm("60秒経過しました");
        document.getElementById('result').innerText = ' ';
        document.createElement('p');
        const kekka = document.createElement('p');
        document.getElementById('result').appendChild(kekka);
        if (score < 15) {
            document.write(score + '回でした。' + 'あなたは' + 'Dランク'.fontsize(7).fontcolor("red"));
        } else if (score< 35) {
            document.write(score + '回でした。' + 'あなたは' + 'Cランク'.fontsize(7).fontcolor("aqua"));
        } else if (score< 55) {
            document.write(score + '回でした。' + 'あなたは' + 'Bランク'.fontsize(7).fontcolor("olive"));
        } else if (score< 60) {
            document.write(score + '回でした。' + 'あなたは' + 'Aランク'.fontsize(7).fontcolor("silver"));
        } else
            document.write(score + '回でした。' + 'あなたは' + 'Sランク'.fontsize(7).fontcolor("fuchsia"));
    }, 60000);

}

// 最初の円を描く
drawCircle();

document.body.onmousedown = (ev) => {
    // 円の中心位置とマウスが押された位置との差を計算する。
    const xd = ev.x - positionX;
    const yd = ev.y - positionY;

    // xの差の二乗とyの差の二乗を足したものが、半径（radius）の二乗よりも小さければ、円の内側をクリックしたことがわかる。
    const hit = (xd * xd + yd * yd) <= radius * radius;
    if (hit) {
        // 領域をクリア
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 新しい円を描く
        drawCircle();

        score++;
    } else {
        console.log("miss");
    }
}

