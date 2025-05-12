const successArray = [
    {
        img: "imgs/guest1.jpg", title: "無經驗到前端工程師 Offer", contant1: "打造前端專案與履歷亮點", contant2: "深度強化面試表現"
    },
    {
        img: "imgs/guest2.jpg", title: "轉職迷茫到明確學習規劃", contant1: "制訂階段性目標與時間安排", contant2: "鼓勵參與前端社群或活動"
    },
    {
        img: "imgs/guest3.jpg", title: "面試緊張到從容應對", contant1: "透過面試模擬找出常犯的邏輯漏洞", contant2: "討論遇到不熟悉議題時的回應方式"
    },
    {
        img: "imgs/guest4.jpg", title: "面試緊張到從容應對", contant1: "擬定進階框架或技術研究目標", contant2: "培養跨團隊溝通與簡報能力"
    },
]

const sucessList = document.getElementById('successList')
successArray.forEach(item => {
    const li = document.createElement('li')

    const img = document.createElement('img')
    img.src = item.img
    img.alt = item.title
    img.className = 's__img rounded-circle '
    img.loading = 'lazy'

    const card = document.createElement('div')
    card.className = "border-bottom border-dark"

    const title = document.createElement('h4')
    title.className = "s__title fw-bold"
    title.textContent = item.title

    function checkIcon(content) {
        const p = document.createElement('p')
        p.className = "s__contant"
        const icon = document.createElement('i')
        icon.className = "bi bi-check-square-fill text-primary"
        p.appendChild(icon)
        p.appendChild(document.createTextNode(' ' + content))
        return p
    }

    const contant1 = checkIcon(item.contant1)
    const contant2 = checkIcon(item.contant2)

    card.appendChild(title)
    card.appendChild(contant1)
    card.appendChild(contant2)

    const podcast = document.createElement('button')
    podcast.className = "s__pod btn btn-outline-dark rounded-pill"
    podcast.textContent = "前往聆聽 podcast"

    li.appendChild(img)
    li.appendChild(card)
    li.appendChild(podcast)

    sucessList.appendChild(li)
})