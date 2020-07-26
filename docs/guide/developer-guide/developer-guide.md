# WebRTCチュートリアル

## MDN web docs
- [WebRTC API](https://developer.mozilla.org/ja/docs/Web/API/WebRTC_API)


# WebRTCのデバッグツール

## 1. Google Chrome
### `chrome://webrtc-internals/`をアドレスバーに入力してください。
- Peerセッションのイベントやシグナリングの経過、送受信中の統計データが確認できる。
- 相手のPeerとやり取りしている映像のサイズ、映像のFPSや映像・音声のビットレートも見える。
- スマートフォン版Chromeだと、相手から送られてくる受信側のデータしか見られない。

## 2.  Firefox
### `about:webrtc`をアドレスバーに入力してください。
- PeerConnectionごとに、ICE、SDP、RTPの情報を見ることができる。
- 接続ログでICE交換するCandidateや処理経過を確認することができる。
- Chromeと違いフレームレートや解像度のグラフが表示されないため、解析性は落ちる。

## 2. wireshark
- パケットのキャプチャをすることができます。

## 3. WebRTC Troubleshooter
- [WebRTC Troubleshooter](https://test.webrtc.org/)にアクセスすると、WebRTCのテストを実行することができる。

## 4. Can I use…
- [Can I use…](https://caniuse.com/#home)にアクセスして「webrtc」と調べると、対応しているブラウザがわかる。

# WebRTCで利用する代表的なプロトコル

## ICE
- Interactive Connectivity Establishmentの略
- [RFC5245](https://tex2e.github.io/rfc-translater/html/rfc5245.html)

## TURN
- Traversal Using Releys around NATの略
- [RFC5766](https://tex2e.github.io/rfc-translater/html/rfc5766.html)
