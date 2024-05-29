<template xmlns="http://www.w3.org/1999/html">
  <div :class="['app', { dark: darkTheme }]">
    <header>
      <button @click="backHome">
        <img class="arrow" src="/static/img/arrow.png">
      </button>
      <button class="change" aria-pressed="true" @click="toggleTheme">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      </button>
    </header>
    <main>
      <section>
        <div class="content">
          <div class="text">
        <h1>布达拉宫</h1>
        <span>坐落在中国西藏自治区首府拉萨市区西北的玛布日山（红山）上，是一座规模宏大的宫殿式建筑群.</span>
        <p>整座宫殿具有鲜明的藏族风格，依山而建，气势雄伟.</p>
        <p>
          宫中收藏了无数的珍宝，为一座艺术殿堂。1961年纳入中华人民共和国国务院第一批全国重点文物保护单位。1994年，布达拉宫列入世界文化遗产.
          <mark data-author="JT"><span>布达拉宫依山垒砌，蜿蜒直至山顶，宫域几乎占据了整座山峰.</span></mark>
        </p>
          </div>
          <div class="image">
            <img src="/static/img/Potala_palace23.jpg">
          </div>
        </div>
      </section>
      <!-- Additional sections would go here -->
      <section>
        <div class="content">
          <div class="image">
            <img src="/static/img/dazhaosi.jpg">
          </div>
          <div class="text">
        <h2 id="getting-started">Jokhang Temple 大昭寺</h2>
        <p>大昭寺被认为是拉萨的“城市精神中心”和西藏最神圣的寺庙。它也是藏传佛教最神圣的地方之一，在藏民和藏传佛教信徒心中具有至高无上的地位:</p>
        <ul>
          <li>
            大昭寺是西藏现存最辉煌的吐蕃时期的建筑，也是西藏现存最古老的土木结构建筑.
          </li>
          <li>
            西藏的寺院多数归属于某一藏传佛教教派，而大昭寺则是各教派共尊的神圣寺院。
          </li>
          <li>藏族人民有“先有大昭寺，后有拉萨城”之说，大昭寺在拉萨市具有中心地位，不仅是地理位置上的，也是社会生活层面的。</li>
        </ul>
        <p>
          <mark data-author="RH"><span>大昭寺是中国西藏自治区拉萨市中心的一座藏传佛教寺院，该寺院在藏传佛教中拥有至高无上的地位。</span></mark>
          2000年，大昭寺作为布达拉宫的扩展项目被列为世界文化遗产。
        </p>
          </div>
        </div>
      </section>
      <section>
        <div class="content">
          <div class="text">
            <h2 id="incremental-static-regeneration">Namucuo 纳木错</h2>
            <p>
              纳木措 <mark data-author="AB" style="--hue: 280"><span>音腾格里淖尔，在两语为“天湖” 之意。</span></mark>.
              位于中国西藏中部，现为西藏第二大的湖泊，也是中国第三大的咸水湖。
            </p>
            <p>
              纳木措地处被称作“世界屋脊”的青藏高原上，属于中国五大湖区的“青藏高原湖区”。
            </p>
          </div>
          <div class="image">
            <img src="/static/img/namucuo.jpeg">
          </div>
        </div>
      </section>
      <section>
        <div class="content">
          <div class="image">
            <img src="/static/img/zhumulang.jpg">
          </div>
          <div class="text">
            <h2 id="getting-started">Mount Everest 珠穆朗玛峰</h2>
            <p>西方称埃佛勒斯峰（英语：Mount Everest，又译额菲尔士峰），是喜马拉雅山脉的主峰，<mark data-author="FR">是世界第一高峰，海拔8848.86米。</mark></p>
            <p>
              <mark data-author="RH"><span>珠穆朗玛峰高大巍峨的形象一直在当地甚至全世界的范围内产生着影响。</span></mark>
              中华人民共和国的第四版人民币十元钞票的背面便是珠穆朗玛峰。
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="content">
          <div class="text">
            <h2 id="incremental-static-regeneration">Kangrinboqe Peak 冈仁波齐峰</h2>
            <p>
              冈仁波齐是四个古老宗教——苯教、印度教、耆那教、佛教共同的圣山，也是藏区最重要的神山
            </p>
            <p>
              出于虔诚信仰和洗清罪孽、积累福报的目的，上述各种宗教都有不少信徒不辞艰辛，从四面八方跋山涉水来到在此处朝圣、转山。以致冈仁波齐峰常年朝圣者络绎不绝，成为名副其实的“多重”宗教圣地。
            </p>
          </div>
          <div class="image">
            <img src="/static/img/gangren.jpg">
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useRouter} from "vue-router/composables";

const router = useRouter()
const backHome = () =>{
  router.push({ name: 'HomePage' });
}

const darkTheme = ref(false);

const toggleTheme = () => {
  darkTheme.value = !darkTheme.value;
  document.documentElement.className = darkTheme.value ? 'dark' : '';
};
</script>

<style scoped>
@font-face {
  font-family: "Geist Sans";
  src: url("https://assets.codepen.io/605876/GeistVF.ttf") format("truetype");
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}


body::after {
  --size: 80px;
  --thickness: 2px;
  content: "";
  position: fixed;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
  background: linear-gradient(transparent 0 calc(var(--size) - var(--thickness)), currentColor calc(var(--size) - var(--thickness)) var(--size)) 50% 50% / var(--size) var(--size), linear-gradient(90deg, transparent 0 calc(var(--size) - var(--thickness)), currentColor calc(var(--size) - var(--thickness)) var(--size)) 50% 50% / var(--size) var(--size);
  mask: linear-gradient(-35deg, transparent 50%, white);
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.25;
}

.dark body {
  background: hsl(0 0% 6%);
  color: hsl(0 0% 96%);
}

mark {
  color: hsl(0 0% 6%);
}

.dark mark {
  color: hsl(0 0% 98%);
}

section {
  margin-bottom: 2rem;
}

.dark header svg path {
  fill: white;
}

* {
  box-sizing: border-box;
}

:where(h1, h2) {
  font-weight: 120;
}

code {
  max-width: 100%;
  overflow: auto;
}

header {
  height: 30vmin;
  min-height: 200px;
  width: 40ch;
  max-width: 100%;
  margin: 0 auto;
  font-size: 1.25rem;
  display: grid;
  align-content: center;
}

header svg {
  width: 35%;
  filter: drop-shadow(0 0 20px hsl(0 0% 50% / 0.75));
}

main {
  padding: 0 1rem;
  width: 60vw;
  max-width: 100%;
  margin: 0 auto;
  font-size: 1.25rem;
  padding: 0 0 50vmin 0;
  overflow-y: auto; /* Enable scrolling */
}

button {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 48px;
  aspect-ratio: 1;
  padding: 0;
  border-radius: 12px;
  border: 0;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.arrow{
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 48px;
  aspect-ratio: 1;
  padding: 0;
  border-radius: 12px;
  border: 0;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;

}

[aria-pressed=true] svg path:last-of-type,
[aria-pressed=false] svg path:first-of-type {
  display: none;
}

button svg {
  width: 65%;
}

mark {
  --highlighted: 1;
  background: transparent;
}

.dark mark {
  --lightness: 35%;
}

mark span {
  background: linear-gradient(120deg, lightblue 50%, transparent 50%) 110% 0 / 200% 100% no-repeat;
  background-position: calc((1 - var(--highlighted)) * 110%) 0;
  transition: background-position 1s;
}

p, li {
  position: relative;
}

a {
  color: hsl(212 100% 50%);
  text-decoration: none;
}

a:is(:hover, :focus-visible) {
  text-decoration: underline;
  text-underline-offset: 6px;
}

hr {
  margin: 2rem auto;
}

hr + p {
  text-align: center;
}

mark::after {
  content: attr(data-author);
  display: grid;
  place-items: center;
  font-variant-numeric: tabular-nums;
  font-weight: bold;
  position: absolute;
  width: 32px;
  aspect-ratio: 1;
  border-radius: 12px;
  background: lightblue;
  font-weight: 80;
  top: 0;
  left: 100%;
  translate: 50% 0;
  font-size: 0.875rem;
  scale: var(--highlighted);
  transition: scale 0.2s;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content .text {
  flex: 1;
  padding: 1rem;
}

.content .image {
  flex: 1;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content img {
  max-width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
}

</style>
