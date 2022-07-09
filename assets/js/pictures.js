class Picture {
    name;
    description;
    src;

    //constructeur
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.src = './assets/img/fruits/'+this.name+'.jpg';


    }
    // les getter
    getName(){
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getSrc() {
        return this.src;
    }


    //les setter
    setName(name ){
        this.name =name;
        return this;
    }
    setDescription(desc) {
        this.description= desc;
        return this;
    }
    setSrc(src) {
        this.src = src
        return this;
    }

    resizePicture () {

    }

    getMessage(){
        return 'Je suis une image: '+ this.getName();
    }


    // Nous pourrons par la suite ajouter des methodes qui vont nous pemettre de augmenter et reduire la taille des images
    //ce sont des images extension.jpg (ananas, bananes, fraises, framboises, melons, nefles, oranges, pasteques, poires, et pommes

}
let namesImages = ['melons', 'bananes', 'pommes', 'poires', 'ananas', 'fraises', 'oranges', 'pasteques', 'framboises', 'nefles'];
let divPictures = document.querySelector('#pictures');

let pictures = [];
namesImages.forEach(function(name,index){
        let picture = new Picture(name, 'c\'une desscription provisoire');
        pictures.push(picture);
    });
console.log( pictures);


function loadPictures(){
    pictures.forEach(function(picture, index){
        console.log(picture);
        let srcImage = picture.getSrc();
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'col-6 col-sm-4 col-md-3 p-2');

        let divCardElement = document.createElement('div');
        divCardElement.setAttribute('class', 'card h-100');
        divCardElement.setAttribute('style', 'width: 18rem;');

        let imgElement = document.createElement('img')
        imgElement.setAttribute('class','card-img-top' );
        //imgElement.setAttribute('alt', 'card image cap');
        imgElement.setAttribute('src', srcImage);
        console.log(imgElement);

        let divCardBody =  document.createElement('div');
        divCardBody.setAttribute('class', 'card-body')

        let h5Element =  document.createElement('h5');
        h5Element.setAttribute('class', 'card-title text-center');
        h5Element.innerText = picture.getName();

        let pElement =  document.createElement('p');
        pElement.setAttribute('class', 'card-text text-center' );
        pElement.innerText = picture.getDescription();

        divCardBody.appendChild(h5Element);
        divCardBody.appendChild(pElement)

        divCardElement.appendChild(imgElement);
        divCardElement.appendChild(divCardBody)

        let buttonElement = document.createElement('input');
        buttonElement.setAttribute('type', 'button');
        buttonElement.addEventListener('click', function(){
            alert(picture.getMessage());

        })
        buttonElement.setAttribute('value', 'like');
        divCardElement.appendChild(buttonElement);
        divElement.appendChild(divCardElement);

        divPictures.appendChild(divElement);

    });
}
function loadPicturesOld() {

    namesImages.forEach(function (nameImage) {
        let divElementPicture = document.createElement('div');
        //let backgroundImage = "background-image: url('./assets/img/fruits/" +nameImage+ ".jpg"+ "')";
        divElementPicture.setAttribute('class', 'col-md-3 mb-3 mb-md-0');

        let divCard = document.createElement('div');
        divCard.setAttribute('class', 'card h-100 shadow-none border-top-0');
        divCard.setAttribute('style', 'border-top:3px solid var(--bs-success)!important');

        let divCardBody = document.createElement('div');
        divCardBody.setAttribute('class', 'card-body d-flex flex-column align-items-center text-center p-0');
        //divCardBody.setAttribute('style', backgroundImage);

        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', './assets/img/fruits/' + nameImage + '.jpg');
        imgElement.setAttribute('class', 'img-fluid bordre-bottom');


        divCard.appendChild(imgElement)
        divCard.appendChild(divCardBody);
        divElementPicture.appendChild(divCard);
        divPictures.appendChild(divElementPicture);


    });
}

