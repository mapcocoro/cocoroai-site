console.log("COCORO AI サイト、起動しています！");
// 既存の console.log に続けて……
console.log("COCORO AI サイト、起動しています！");

// 要素を取得
const greetBtn = document.getElementById("greetBtn");
const greetMessage = document.getElementById("greetMessage");

// クリック時の処理
greetBtn.addEventListener("click", () => {
  greetMessage.textContent = "ようこそ、ココロAI合同会社へ！";
  // ここに OpenAI API 呼び出しを入れても OK
});
