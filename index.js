const contentArray = [
    {
        img: "imgs/blogImg1.jpg", date: "2024/10/11", tag1: "#React", tag2:"#入門基礎", hotActive: false, title: "React 入門不再迷惘：三步驟帶你上手核心概念", detail: "你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。"
    },
    {
        img: "imgs/blogImg2.jpg", date: "2024/09/07", tag1: "#作品集", tag2:"#求職攻略", hotActive: false, title: "前端作品集打造指南：讓你的專案成為履歷亮點", detail: "對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解你的程式邏輯、設計感以及解決問題的思路。我在協助多位同學優化履歷與作品集的過程中，總結出一些關鍵要素，分享給正在打造、升級作品集的你。"
    },
    {
        img: "imgs/blogImg3.jpg", date: "2024/09/03", tag1: "#CSS設計", tag2:"#視覺體驗", hotActive: false, title: "CSS 魔法大揭密：排版與設計的三大關鍵技巧", detail: "在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。"
    },
    {
        img: "imgs/blogImg4.jpg", date: "2024/07/09", tag1: "#轉職工程師", tag2:"#學習心法", hotActive: false, title: "前端轉職必讀：從自學者到工程師的心路歷程", detail: "能夠憑藉自學進入前端領域，聽起來令人振奮，但實際過程中可能遇到的挫折與疑慮，卻常常令人猶豫。回想當初我也是對程式一竅不通，卻在興趣的驅使下毅然踏上自學之路。今天想透過這篇文章，分享我的轉職經驗和一些調適心態的秘訣，盼能為有心投入前端領域的你提供一些力量與方向。"
    },
    {
        img: "imgs/blogImg5.jpg", date: "2024/07/08", tag1: "#面試準備", tag2:"#工程師求職", hotActive: true, title: "前端面試不再慌：破解常見提問的三大策略", detail: "面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。"
    },
    {
        img: "imgs/blogImg6.jpg", date: "2024/06/29", tag1: "#Vue3", tag2:"#框架學習", hotActive: false, title: "Vue 3 新手指南：快速掌握 Composition API 與關鍵特色", detail: "許多前端開發者對 Vue 一直情有獨鍾，因為它易上手又靈活。隨著 Vue 3 上線，Composition API 的導入更是大幅提升可讀性與維護性。這篇文章將帶你快速瞭解 Vue 3 的獨特魅力，並透過簡單範例幫助你更順利地切換到新版本的思維模式。"
    },
]

const contentList = document.getElementById('contentList');

contentArray.forEach(item => {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title;
    img.className = 'c-img';
    img.loading = 'lazy';

    const date = document.createElement('p');
    date.className = 'date';
    date.textContent = item.date;

    const tagArea = document.createElement('div');
    const hot = document.createElement('span');
    const tag = document.createElement('h3');
    const tagLink1 = document.createElement('a');
    const tagLink2 = document.createElement('a');
    const hotActive = item.hotActive;
    tagArea.className='tagArea'
    hot.className = 'hot';
    hot.textContent = '人氣文章';
    tagLink1.className = 'tag';
    tagLink2.className = 'tag';
    tagLink1.textContent = item.tag1;
    tagLink2.textContent = item.tag2;
    tagLink1.href = 'tagLink1';
    tagLink2.href = 'tagLink2';
    tagArea.appendChild(tag);
    if (hotActive) {
        tagArea.appendChild(hot);
    }
    tag.appendChild(tagLink1);
    tag.appendChild(tagLink2);

    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = item.title;

    const detail = document.createElement('p');
    detail.className = 'detial';
    detail.textContent = item.detail;

    const readLink = document.createElement('a');
    readLink.className = 'read';
    readLink.href = '#';
    readLink.textContent = '閱讀內文';

    li.appendChild(img);
    li.appendChild(date);
    li.appendChild(tagArea);
    li.appendChild(title);
    li.appendChild(detail);
    li.appendChild(readLink);

    contentList.appendChild(li);
});

$('.owl-carousel').owlCarousel({
    items: 3, // 一次顯示三張卡片
    loop: true, // 無限循環
    margin: 10, // 卡片間距
    nav: true, // 顯示導航箭頭
    dots: true, // 顯示導航點
    slideBy: 1, // 每次滑動一張
    responsive: {
        0: { items: 1 }, // 行動裝置顯示一張
        768: { items: 2 }, // 平板顯示兩張
        992: { items: 3 } // 桌面顯示三張
    }
});