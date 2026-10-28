// 最小限のサービスワーカー（登録・有効化のみ）
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
});

// オフライン対応させたい場合は、ここにキャッシュ処理を追記します
self.addEventListener('fetch', (event) => {
  // 今回は何もせずスルー（ネットワークから取得）
});