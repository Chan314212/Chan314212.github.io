document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.blog-image');
    const text = document.querySelector('.blog-text');

    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });

    // 图片加载完成后，显示文字
    image.addEventListener('load', () => {
        document.querySelector('.container').classList.add('show-text');
    });

    // 为了兼容不同浏览器，确保图片已经加载
    if (image.complete) {
        image.dispatchEvent(new Event('load'));
    }
});
