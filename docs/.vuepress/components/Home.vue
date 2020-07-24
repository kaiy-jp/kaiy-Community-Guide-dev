<template>
  <div class="l-home">
    <span class="l-home__catchCopy">STAY HOME IS FUN!</span>
    <div class="l-section">
      <div class="p-brand">
        <ul class="p-brand__items">
          <li class="p-brand__item">
            <div class="p-brand__block">
              <div class="p-brand__logo">
                <img src="../public/kaiy-co-logo-pink.svg" alt />
              </div>
              <h2 class="p-brand__title">kaiy.co</h2>
              <p
                class="p-brand__description"
              >KaiY.coはマイクロコミュニティーをベースにしたWeb3.0時代の全く新しいコミュニケーションサービスです。自宅から出ずに、世界中の人とFace to Faceのコミュニケーションを可能にします。自宅から趣味のコミュニティに参加したり、コワーキングスペースで働いたり、友人との秘密基地をつくったり、最高の教育にアクセスしたり、イベントを開催したり、ゲームを楽しんだり…アイディア次第で無限に可能性が広がります。!</p>
              <div class="p-brand__linkWrap">
                <a
                  href="https://kaiy.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-brand__link"
                >Start</a>
              </div>
            </div>
          </li>
          <li class="p-brand__item">
            <div class="p-brand__block">
              <div class="p-brand__logo">
                <img src="../public/kaiy-co-logo-blue.svg" alt />
              </div>
              <h2 class="p-brand__title">kaiy.dev</h2>
              <p
                class="p-brand__description"
              >Vue/Nuxt/Firebase/WebRTC/AI/webAssembly/Rustをテーマにしたプログラミング・デザイン学習・交流・開発コミュニティです。現在招待制slackを中心に活動中です。 界隈(クラスタ・マイクロコミュ)をエンハンスするWebサービスをコミュニティ有志で開発中です! コミュニティ開発に参加いただける、つよつよエンジニアさん・デザイナーさん、インフルエンサーさん仲間を募集中です! プログラミング・デザイナー未経験・初学者さん歓迎♪</p>
              <div class="p-brand__linkWrap">
                <a href="/" target="_blank" rel="noopener noreferrer" class="p-brand__link">Join US</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="p-introduction">
        <h2 class="p-introduction__title">あなたの界隈をつくりましょう!</h2>
        <p class="p-introduction__text">
          KaiY.coはマイクロコミュニティーをベースにしたWeb3.0時代の全く新しいコミュニケーションサービスです。自宅から出ずに、世界中の人とFace to Faceのコミュニケーションを可能にします。自宅から趣味のコミュニティに参加したり、コワーキングスペースで働いたり、友人との秘密基地をつくったり、最高の教育にアクセスしたり、イベントを開催したり、ゲームを楽しんだり…アイディア次第で無限に可能性が広がります。kaiYは発達障害の引き籠りニートと、最先端のモダンなコンピューターサイエンスを得意とするコミュ障エンジニアによって開発されました。数十年におよぶニート、中二病、コミュ障ライフで得た引きこもり生活を楽しくすごくグロースハックを惜しみなく贅沢に投入しました。ニューノーマルのSTAYHOMEでセレンディピティをあきらめないでください。人生を豊かにする出会いの可能性は無限大です。
          KaiY.coは引きこもり生活を豊かにするだけではありません。ネットとリアルの連携、急激に発達する個人経済を強力にサポートします。アフターコロナのニューノーマルにいち早く対応。課金決済機能を初め様々なコンポーネントが用意されており、自宅警備をしながらのリアルビジネスへのアクセスを強力にサポートします。
        </p>
        <ul class="p-introduction__items">
          <li class="p-introduction__item">
            <div class="p-introduction__result">
              <span class="p-introduction__big">5</span>
              <span class="p-introduction__small">倍</span>
            </div>
            <p class="p-introduction__detail">コミュ障害を克服して、最高の親友ができる確率</p>
          </li>
          <li class="p-introduction__item">
            <div class="p-introduction__result">
              <span class="p-introduction__big">8</span>
              <span class="p-introduction__small">倍</span>
            </div>
            <p class="p-introduction__detail">個人経済を駆使し、ニートをすみやかに脱出できる確率</p>
          </li>
          <li class="p-introduction__item">
            <div class="p-introduction__result">
              <span class="p-introduction__big">4</span>
              <span class="p-introduction__small">倍</span>
            </div>
            <p class="p-introduction__detail">開き直ってネト充自宅警備するの際の満足度</p>
          </li>
          <li class="p-introduction__item">
            <div class="p-introduction__result">
              <span class="p-introduction__big">99</span>
              <span class="p-introduction__small">%</span>
            </div>
            <p class="p-introduction__detail">界隈で人生がたのしくなる確率</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="l-section l-section--bgLight">
      <h2 class="l-section__title">KaiY Community</h2>
      <div class="p-members">
        <h3 class="p-members__title">STAFF</h3>
        <ul class="p-members__items">
          <li class="p-members__item" v-for="member in members">
            <a href="http://">
              <div class="p-members__imgWrap">
                <img class="p-members__img" :src="member.src" alt />
              </div>
              <p class="p-members__name">{{ member.name }}</p>
              <pre class="p-members__about">{{ member.about }}</pre>
            </a>
          </li>
        </ul>
      </div>
      <div class="p-sponsors">
        <h3 class="p-sponsors__title">Sponsors</h3>
        <ul class="p-sponsors__items">
          <li class="p-sponsors__item">
            <img class="p-sponsors__logo" src="../public/fujigate_logo.svg" alt />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          link: "",
          src: "https://placehold.jp/150x150.png",
          name: "Mono Arai",
          about: "Project ManagerCeaf\nArchitect\nDesigner"
        },
        {
          link: "",
          src: "https://placehold.jp/150x150.png",
          name: "Kenta Iseri",
          about: "Directer\nArchitect\nLead Programmer"
        },
        {
          link: "",
          src: "https://placehold.jp/150x150.png",
          name: "Reiya",
          about: "Director\nFrontend Architect\nLead Programmer"
        },
        {
          link: "",
          src: "https://placehold.jp/150x150.png",
          name: "Shogo Yasumura",
          about: "Directer\nWeb Programmer\nDancer"
        },
        {
          link: "",
          src: "https://placehold.jp/150x150.png",
          name: "Yusuke Oyama",
          about: "Organaizer\nAssistant Director\nRelease Manager"
        },
        {
          link: "",
          src: "https://placehold.jp/150x150.png",
          name: "Takumi Saito",
          about: "Web Programmer"
        },
        {
          link: "",
          src: "https://placehold.jp/150x150.png",
          name: "Mothizuki",
          about: "3DCG Designer"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.l-home {
  &__catchCopy {
    display: inline-block;
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 80px;
    color: #fff;
    transform: rotate(180deg);
    writing-mode: vertical-rl;
  }
}
.l-section {
  padding: 80px 0;
  &--bgLight {
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      position: absolute;
      margin: 0 calc(50% - 50vw);
      width: 100vw;
      height: 100%;
      background: #1d1d23;
      left: 0;
      top: 0;
      z-index: -1;
    }
  }
  &__title {
    border-bottom: none;
    padding-bottom: 0;
    margin: 0 0 80px;
    text-align: center;
    color: #62626b;
  }
}
.p-brand {
  margin: 0 0 80px;
  &__items {
    display: flex;
    justify-content: space-between;
    margin: 0;
    list-style: none;
    padding: 0;
  }
  &__item {
    width: calc(100% / 2 - 4%);
    position: relative;
    background: #0d0d0d;
    box-sizing: border-box;
    padding: 40px;
  }
  &__block {
    position: relative;
    height: 400px;
  }
  &__logo {
    text-align: center;
    img {
      max-width: 56px;
    }
  }
  &__title {
    border-bottom: none;
    padding-bottom: 0;
    margin: 0;
    text-align: center;
  }
  &__description {
    color: #888894;
    font-size: 14px;
  }
  &__linkWrap {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    text-align: center;
  }
  &__link {
    display: inline-block;
    font-size: 1.2rem;
    box-sizing: border-box;
    line-height: 60px;
    width: 240px;
    color: #fff;
    border-radius: 5%;
    background: #0d0d0d !important;
    box-shadow: 7px 7px 8px #010101, -7px -7px 8px #121212;
  }
}
.p-introduction {
  margin: 160px 0 0;
  &__title {
    font-size: 64px;
    color: #fff;
    position: relative;
    border-bottom: none;
    margin: 0;
    &::before {
      content: "Why KaiY.co?";
      position: absolute;
      left: 0;
      top: 0;
      transform: translateY(-100%);
      font-size: 42px;
      color: #62626b;
    }
  }
  &__text {
    margin: 32px 0;
    color: #62626b;
  }
  &__items {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
  &__item {
    width: calc(100% / 4 - 2%);
  }
  &__result {
  }
  &__big {
    font-size: 120px;
    display: inline-block;
    position: relative;
    &::before {
      content: "最大";
      font-size: 16px;
      position: absolute;
      left: 0;
      top: 0;
      transform: translateY(80%);
    }
  }
  &__small {
    display: inline-block;
    font-size: 42px;
  }
}
.p-members {
  &__title {
    text-align: center;
    border-bottom: none;
    color: #71717e;
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    max-width: 800px;
    margin: 0 auto;
  }
  &__item {
    text-align: center;
    width: calc(100% / 3 - 4%);
    margin: 16px 0;
    &:first-child {
      width: 100%;
    }
  }
  &__about {
    background: transparent;
    padding: 0;
  }
  &__imgWrap {
  }
  &__img {
    width: 120px;
    height: 120px;
    border-radius: 100%;
  }
}
.p-sponsors {
  margin: 80px 0 0;
  &__title {
    text-align: center;
    border-bottom: none;
    color: #71717e;
  }
  &__items {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  &__item {
    text-align: center;
  }
  &__logo {
    max-width: 280px !important;
  }
}
</style>
