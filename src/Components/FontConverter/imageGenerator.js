import domtoimage from 'dom-to-image';
const generateHighResImage = () => {
    const node = document.getElementById('page');
    const scale = 2; // Adjust this to achieve the desired resolution (e.g., 2x scale for 2000x2000)

    const options = {
        quality: 1, // Ensure maximum quality for JPEG
        width: node.offsetWidth * scale,
        height: node.offsetHeight * scale,
        style: {
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            width: `${node.offsetWidth}px`,
            height: `${node.offsetHeight}px`
        }
    };

    domtoimage.toJpeg(node, options)
        .then(dataUrl => {
            const link = document.createElement('a');
            link.download = 'high-res-image.jpeg';
            link.href = dataUrl;
            link.click();
        })
        .catch(error => {
            console.error('An error occurred while generating the image:', error);
        });
};


export default generateHighResImage;