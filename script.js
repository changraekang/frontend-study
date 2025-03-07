// 메뉴 데이터
const menuData = {
  korean: [
    {
      name: "김치찌개",
      price: 8000,
      description: "돼지고기와 신선한 김치로 끓인 찌개",
    },
    {
      name: "된장찌개",
      price: 8000,
      description: "토속적인 된장으로 끓인 건강한 찌개",
    },
    {
      name: "비빔밥",
      price: 9000,
      description: "신선한 나물과 고추장이 어우러진 비빔밥",
    },
  ],
  chinese: [
    {
      name: "짜장면",
      price: 7000,
      description: "춘장과 채소가 어우러진 대표 중식",
    },
    {
      name: "짬뽕",
      price: 8000,
      description: "매콤한 해산물 수프와 면의 조화",
    },
    {
      name: "탕수육",
      price: 15000,
      description: "바삭한 돼지고기와 새콤달콤한 소스",
    },
  ],
  japanese: [
    {
      name: "초밥",
      price: 12000,
      description: "신선한 생선으로 만든 모듬 초밥",
    },
    {
      name: "라멘",
      price: 9000,
      description: "진한 돈코츠 수프의 일본식 라멘",
    },
    { name: "돈카츠", price: 11000, description: "바삭한 돈까스와 특제 소스" },
  ],
  western: [
    {
      name: "파스타",
      price: 12000,
      description: "알덴테로 삶은 면과 풍부한 소스",
    },
    { name: "스테이크", price: 25000, description: "부드러운 등심 스테이크" },
    {
      name: "피자",
      price: 15000,
      description: "모짜렐라 치즈가 듬뿍 들어간 피자",
    },
  ],
};

// 현재 선택된 카테고리를 저장할 변수
let currentCategory = "all";

// 페이지 로드 시 전체 메뉴 표시
window.onload = function () {
  showMenu("all");
};

// 메뉴 표시 함수
function showMenu(category) {
  currentCategory = category;
  const menuSection = document.getElementById("menuItem");
  const categoryTitle = document.getElementById("categoryTitle");

  // 카테고리 제목 설정
  const categoryNames = {
    all: "전체 메뉴",
    korean: "한식",
    chinese: "중식",
    japanese: "일식",
    western: "양식",
  };
  categoryTitle.textContent = categoryNames[category];

  // 메뉴 아이템 컨테이너 초기화
  menuSection.innerHTML = "";

  // 선택된 카테고리에 따라 메뉴 표시
  if (category === "all") {
    // 전체 메뉴 표시
    Object.keys(menuData).forEach((cat) => {
      menuData[cat].forEach((item) => {
        menuSection.appendChild(createMenuItem(item));
      });
    });
  } else {
    // 특정 카테고리 메뉴만 표시
    menuData[category].forEach((item) => {
      menuSection.appendChild(createMenuItem(item));
    });
  }
}

// 메뉴 아이템 요소 생성 함수
function createMenuItem(item) {
  const div = document.createElement("div");
  div.className = "menuItem";
  div.innerHTML = `
        <h3>${item.name}</h3>
        <p class="price">${item.price.toLocaleString()}원</p>
        <p class="description">${item.description}</p>
    `;
  return div;
}
