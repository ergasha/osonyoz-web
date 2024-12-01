import domtoimage from 'dom-to-image';
const generateHighResImage = () => {
    const node = document.getElementById('page');
    const scale = 2; 

    const options = {
        quality: 1, 
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