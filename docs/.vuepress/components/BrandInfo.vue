<template>
  <div class="brandInfo">
    <ul class="brandInfo__items">
      <li class="brandInfo__item">
        <h2 class="brandInfo__title">kaiy.co</h2>
        <p class="brandInfo__description">kaiy Communityのことです。チャットやWebRTCを使ったテレカンファレンスシステムを実装しています。</p>
        <div class="brandInfo__linkWrap">
          <a href class="brandInfo__link">kaiy.co</a>
        </div>
      </li>
      <li class="brandInfo__item">
        <h2 class="brandInfo__title">kaiy.co</h2>
        <p class="brandInfo__description">kaiy Communityのことです。チャットやWebRTCを使ったテレカンファレンスシステムを実装しています。</p>
        <div class="brandInfo__linkWrap">
          <a href class="brandInfo__link">kaiy.dev</a>
        </div>
      </li>
      <li class="brandInfo__item">
        <h2 class="brandInfo__title">kaiy.dev</h2>
        <p
          class="brandInfo__description"
        >招待制のクローズドなSlackコミュニティです。kaiy.coを開発しています。一緒に開発をされたい方は、kaiy.devのメンバーに直接メッセージをいただけますとご対応いたします。</p>
        <div class="brandInfo__linkWrap">
          <a href class="brandInfo__link">kaiy.dev</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.brandInfo {
  margin: 80px 0;
  &__items {
    display: flex;
    justify-content: space-between;
    margin: 0;
    list-style: none;
    padding: 0;
  }
  &__item {
    width: calc(100% / 3 - 2%);
    position: relative;
    min-height: 280px;
  }
  &__title {
    font-size: 1.4rem;
    font-weight: 500;
    border-bottom: none;
    padding-bottom: 0;
    color: #71717e;
  }
  &__description {
    color: #888894;
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
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    background-color: #63636e;
    color: #fff;
  }
}
</style>
