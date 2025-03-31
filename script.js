//script.js

// script.js

const data1 = [
  { title: "뉴타닉스", content: "정상" },
  { title: "뉴타닉스2", content: "정상" },
  { title: "뉴타닉스3", content: "비정상" },
  { title: "베리타스", content: "정상" },
  { title: "베리타스2", content: "비정상" }
];

const data2 = [
  { title: "베리타스", content: "정상" },
  { title: "베리타스2", content: "정상" },
  { title: "베리타스3", content: "정상" },
  { title: "베리타스4", content: "정상" },
];

const data3 = [
  { title: "뉴타닉스", content: "정상" },
  { title: "뉴타닉스2", content: "정상" },
  { title: "뉴타닉스3", content: "비정상" },
  { title: "뉴타닉스4", content: "비정상" },
];

const data4 = [
  { title: "뉴타닉스", content: "정상" },
  { title: "뉴타닉스2", content: "정상" },
  { title: "베리타스", content: "정상" },
  { title: "베리타스2", content: "비정상" },
  { title: "베리타스3", content: "정상" },
];

let currentData = data1; // 기본적으로 수원 데이터 로드

function renderItems() {
    const container = document.getElementById('text-container');
    container.innerHTML = '';
    currentData.forEach((item, index) => {
        let newBar = document.createElement('div');
        newBar.className = 'text-bar';
        if (item.content.includes("비정상")) {
            newBar.classList.add("highlight");
        }
        newBar.textContent = item.title;
        newBar.setAttribute('onclick', `toggleContent(${index})`);
        newBar.setAttribute('id', `bar-${index}`);

        let newContent = document.createElement('div');
        newContent.className = 'text-content';
        newContent.textContent = item.content;
        newContent.setAttribute('id', `content-${index}`);

        if (item.content.includes("비정상")) {
            newContent.classList.add("highlight");
        }

        container.appendChild(newBar);
        container.appendChild(newContent);
    });
}

function toggleContent(index) {
    let content = document.getElementById(`content-${index}`);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// 사이드바 클릭 이벤트 추가
document.addEventListener("DOMContentLoaded", () => {
    renderItems();

    document.querySelectorAll(".sidebar li").forEach((li, index) => {
        li.addEventListener("click", () => {
            document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
            li.classList.add("active");

            switch (index) {
                case 0:
                    currentData = data1; // 수원
                    break;
                case 1:
                    currentData = data2; // 인천
                    break;
                case 2:
                    currentData = data3; // 세종
                    break;
                case 3:
                    currentData = data4; // 나주
                    break;
            }
            renderItems();
        });
    });

    // 수원 기본 활성화
    document.querySelector(".sidebar li").classList.add("active");
});


document.addEventListener("DOMContentLoaded", () => {
  renderItems();

  // 로고 클릭 시 화면 새로고침
  const logo = document.getElementById("logo");
  if (logo) {
      logo.addEventListener("click", () => {
          location.reload(); // 페이지 새로고침
      });
  }
});
