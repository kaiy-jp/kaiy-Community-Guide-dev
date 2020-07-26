# WebRTCチュートリアル

## MDN web docs
- [WebRTC API](https://developer.mozilla.org/ja/docs/Web/API/WebRTC_API)


# WebRTCのデバッグツール

## 1. Google Chrome
### `chrome://webrtc-internals/`をアドレスバーに入力してください。
- Peerセッションのイベントやシグナリングの経過、送受信中の統計データが確認できます。
- 相手のPeerとやり取りしている映像のサイズ、映像のFPSや映像・音声のビットレートも見えます。
- スマートフォン版Chromeだと、相手から送られてくる受信側のデータしか見られません。

## 2.  Firefox
### `about:webrtc`をアドレスバーに入力してください。
- PeerConnectionごとに、ICE・SDP・RTPの情報を見ることができます。
- 接続ログでICE交換するCandidateや処理経過を確認することができます。
- Chromeと異なりフレームレートや解像度のグラフが表示されないため、解析性は落ちます。

## 2. wireshark
- パケットをキャプチャすることができます。

## 3. WebRTC Troubleshooter
- [WebRTC Troubleshooter](https://test.webrtc.org/)にアクセスすると、WebRTCのテストを実行できます。

## 4. Can I use…
- [Can I use…](https://caniuse.com/#home)にアクセスして「webrtc」と調べると、対応しているブラウザがわかります。

# WebRTCで利用する代表的なプロトコル

## ICE
- Interactive Connectivity Establishmentの略です。
- [RFC5245](https://tex2e.github.io/rfc-translater/html/rfc5245.html)(日本語機械翻訳)

## TURN
- Traversal Using Releys around NATの略です。
- [RFC5766](https://tex2e.github.io/rfc-translater/html/rfc5766.html)(日本語機械翻訳)
