window.document.addEventListener('DOMContentLoaded', onLoad);

async function onLoad() {
    const context = getCanvasContext();
    const laodedImages = await loadImages();
    console.log(laodedImages);
    context.drawImage(laodedImages[0].img, 0, 0)
}

async function loadImages() {
    const basePath = './resources';
    const images = [
        {name: 'board', src: "board.jpg"}
    ];

    const loadedImagePromises = images.map((image) => {
        const img = new Image();
        const {name, src} = image;
        return new Promise((resolve, reject) => {
            img.onload = () => resolve({name, img});
            img.src = `${basePath}/${src}`;
        });
    })

    const loadImages = await Promise.all(loadedImagePromises);
    return loadImages;
}

function getCanvasContext() {
    const canvasElement = document.querySelector('canvas');
    const context = canvasElement.getContext('2d');
    return context;
}
