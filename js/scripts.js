let key = "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";
let adress = "https://api.groq.com/openai/v1/chat/completions";

async function generateCode() {
  let textarea = document.querySelector(".page-text").value;
  let response = await fetch(adress, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: textarea,
        },
        {
          role: "system",
          content:
            "Você é um programador. Gere uma página web com base no prompt do usuário. Em .code-block coloque o código da página. Em .page-block coloque uma preview da página. A página deve ser em português do Brasil.",
        },
      ],
    }),
  });
  let data = await response.json();
  let result = data.choices[0].message.content;

  let codeSpace = document.querySelector(".code-block");
  let pageSpace = document.querySelector(".page-block");

  codeSpace.textContent = result;
  pageSpace.srcdoc = result;
}
