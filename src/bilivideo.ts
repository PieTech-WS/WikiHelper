const videoPlace = document.getElementById('BiliVideo2');
if (videoPlace) {
    // @ts-ignore
    const url = videoPlace.textContent
    const videoIFrame = document.createElement('iframe');
    if (typeof url === "string") {
        videoIFrame.src = url;
    }  // 设置 iframe 的源 URL
    videoIFrame.width = '600';  // 设置 iframe 宽度
    videoIFrame.height = '400';  // 设置 iframe 高度
// 替换 img 元素为 iframe 元素
    // @ts-ignore
    videoPlace.parentNode.replaceChild(videoIFrame, videoPlace);
}
