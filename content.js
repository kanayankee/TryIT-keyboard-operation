// キー操作での動画制御
document.addEventListener('keydown', (event) => {
    const video = document.querySelector('video');
    const videoPlayer = document.querySelector('[aria-label="Video Player"]');

    if (!video) return; // 動画要素が見つからない場合は何もしない

    switch (event.key) {
        case 'ArrowRight': // →キーが押されたとき
            video.currentTime += 5; // 5秒進む
            break;
        case 'ArrowLeft': // ←キーが押されたとき
            video.currentTime -= 5; // 5秒戻る
            break;
        case ' ': // スペースキーが押されたとき
            if (video.paused) {
                video.play(); // 再生
            } else {
                video.pause(); // 停止
            }
            event.preventDefault(); // デフォルトのスクロール動作を防ぐ
            break;
        case 'f': // Fキーが押されたとき
            if (document.fullscreenElement) {
                document.exitFullscreen(); // フルスクリーンを解除
            } else {
                if (videoPlayer.requestFullscreen) {
                    videoPlayer.requestFullscreen(); // フルスクリーンにする
                } else if (videoPlayer.webkitRequestFullscreen) { // Safari対応
                    videoPlayer.webkitRequestFullscreen();
                } else if (videoPlayer.msRequestFullscreen) { // IE/Edge対応
                    videoPlayer.msRequestFullscreen();
                }
            }
            break;
        case 'ArrowUp': // ↑キーが押されたとき
            video.volume = Math.min(video.volume + 0.1, 1); // 音量を10%上げる（最大値は1）
            break;
        case 'ArrowDown': // ↓キーが押されたとき
            video.volume = Math.max(video.volume - 0.1, 0); // 音量を10%下げる（最小値は0）
            break;
        default:
            break;
    }
});

const style = document.createElement('style');
style.textContent = '#control-buttons { display: none !important; }';
document.body.insertBefore(style, document.body.lastChild);
