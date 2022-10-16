import vapes from './vapes.json' assert {type: 'json'};
import vapeBoxes from './vapeBoxes.json' assert {type: 'json'};

const vapeData = vapes
const vapeBoxData = vapeBoxes
const newVapes = vapeData.map((vape) => {
        return `

        <div class="col-9 col-sm-5 col-md-4 col-lg-3 mx-2" >
            <div class="card-new-card  mb-5 px-0">
            <div class="card-head-new-card d-flex align-items-center h-100">
                <div class="product-detail text-center ">              
                <img src="${vape.image}" :alt="error" class="vapeImage my-2 w-100" style="border-radius: 50%;"/>
                </div>
            </div>
            <div class="card-body-new-card">
                <div class="product-desc">
                <span class="product-title row">
                <b>${vape.flavour}</b> <br> 
                <b>${vape.brand}</b>
                        <span class="badge col-2">
                            New
                        </span>
                </span>
                </div>
                <div class="product-properties">
                <span class="product-size mb-3 ms-2 row ms-0 col-12">
                    <p class="col-auto ">Nicotine -</p>
                    <p class="col-auto ps-0">${vape.nicotinePercentage}</p>
                </span>
                <br/>
                </div>
                <span class="product-size mt-2 justify-content-evenly mx-2 row">
                <button role="button" id="heartButton"   class="button-17 heartButton col-5"><i id="heartButtonIcon" class="fa-solid heartDefaultColour heartButtonIcon fa-heart"></i></button>
                <button role="button" class="col-5 button-17" style="background:#81ff81;font-weight: bold;">Add to Box</button>
                </span>
            </div>
            </div>
        </div>
        `;


        });
const newVapeBoxes = vapeBoxData.map((vapeBoxes) => {
    return `

    <div class="col-9 col-sm-5 col-md-4 col-lg-3 mx-2" >
        <div class="card-new-card  mb-5 px-0">
        <div class="card-head-new-card d-flex align-items-center h-100">
            <div class="product-detail text-center ">              
            <img src="${vapeBoxes.image}" :alt="error" class="vapeImage my-2 w-100" style="border-radius: 50%;"/>
            </div>
        </div>
        <div class="card-body-new-card">
            <div class="product-desc">
            <span class="product-title row">
            <b>${vapeBoxes.flavour}</b> <br> 
            <b>${vapeBoxes.brand}</b>
                    <span class="badge col-2">
                        New
                    </span>
            </span>
            </div>
            <div class="product-properties">
            <span class="product-size mb-3 ms-2 row ms-0 col-12">
                <p class="col-auto ">Nicotine -</p>
                <p class="col-auto ps-0 mx-2">${vapeBoxes.description}</p>
            </span>
            <br/>
            </div>
            <span class="product-size mt-2 justify-content-evenly mx-2 row">
            <button role="button" id="heartButton"   class="button-17 heartButton col-5"><i id="heartButtonIcon" class="fa-solid heartDefaultColour heartButtonIcon fa-heart"></i></button>
            <button role="button" class="col-5 button-17 addToBoxButton" style="background:#81ff81;font-weight: bold;">
                <span class="addTobBoxSpan">Add to Box</span>
                <i id="tickButtonIcon" class="fa-solid  tickButtonIcon fa-check d-none text-white">Added</i>
            </button>
            </span>
        </div>
        </div>
    </div>
    `;
    
    
                });
    // console.log (newCountries)
    document.getElementById("jsonData").innerHTML = newVapes;
    document.getElementById("jsonDataBoxes").innerHTML = newVapeBoxes;

    
    
    $(".addToBoxButton").click(function(){
        if($(this).children().hasClass("d-none")){
            $(this).children().toggleClass("d-none");
        }
      });

    $(".heartButton").click(function(){
        $(this).children().toggleClass("text-danger")
        $(this).children().toggleClass("heartDefaultColour")

      });

