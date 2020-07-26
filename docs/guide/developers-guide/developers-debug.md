# WebRTCのデバッグツール

## 1. Google Chrome
### `chrome://webrtc-internals/`をブラウザのアドレスバーに入力してください。
- Google Chromeブラウザに組み込まれているWebRTCデバッグツールです。
- Peerセッションのイベントやシグナリングの経過、送受信中の統計データが確認できます。
- 相手のPeerとやり取りしている映像のサイズ、映像のFPSや映像・音声のビットレートも見えます。
- スマートフォン版Chromeだと、相手から送られてくる受信側のデータしか見られません。

## 2.  Firefox
### `about:webrtc`をブラウザにアドレスバーに入力してください。
- PeerConnectionごとに、ICE・SDP・RTPの情報を見ることができます。
- 接続ログでICE交換するCandidateや処理経過を確認することができます。
- Chromeと異なりフレームレートや解像度のグラフが表示されないため、解析性は落ちます。

## 2. wireshark
### [wiresharkの説明](https://ja.wikipedia.org/wiki/Wireshark)(Wikipedia)
- パケットをキャプチャすることが可能なネットワークアナライザです。

## 3. WebRTC Troubleshooter
- [WebRTC Troubleshooter](https://test.webrtc.org/)にアクセスすると、自分が使っているブラウザのWebRTC関連試験ができます。

## 4. CanIuse
- [CanIuse Webrtc](https://caniuse.com/#search=webrtc)は、ブラウザの各種プロトコルAPI等の対応状況を調べることができるwebサイトです。
- 各バージョンのブラウザのWebRTC関連APIの対応状況を調べることができます。
