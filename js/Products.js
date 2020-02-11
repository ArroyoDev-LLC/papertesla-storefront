    //Display Variables
    var display1 = document.getElementById("display1");
    var display2 = document.getElementById("display2");
    var display3 = document.getElementById("display3");
    var display4 = document.getElementById("display4");
    var display5 = document.getElementById("display5");
    var pageintro = document.getElementById("pageintro");

    //variables
    var Cybertruck = document.getElementById("Cybertruck");

    var SuperCharger = document.getElementById("SuperCharger");
    
    var Model = document.getElementById("Model");
  
    var ModelWithLights = document.getElementById("MWL");
  
    var WallArt = document.getElementById("wallart");
  
    var WallArtWithLights = document.getElementById("WAwL");

    var tenthScale = document.getElementById("tenthScale");

    var fourthScale = document.getElementById("fourthScale");

    var halfScale = document.getElementById("halfScale");

    var fullScale = document.getElementById("FullScale");
  
   //Check boxes
    var CheckBox_CtM = document.getElementById("CtM");

    var CheckBox_SuperC = document.getElementById("SuperC");

    var CheckBox_Model = document.getElementById("Model-id");

    var CheckBox_MWL = document.getElementById("MWL-id");
  
    var CheckBox_wallart = document.getElementById("wallart-id");
  
    var CheckBox_WAwL = document.getElementById("WAwL-id");

    var CheckBox_tenth = document.getElementById("tenth_id");

    var CheckBox_fourth = document.getElementById("fourth_id");

    var CheckBox_half = document.getElementById("half_id");

    var CheckBox_full = document.getElementById("Full_id");

    var CheckBox_Classic = document.getElementById("Classic_Silver");

    var CheckBox_Black = document.getElementById("Black");

    var CheckBox_Custom = document.getElementById("CDesign");


    //product variables
    var product_Model = document.getElementById("Selected_Model");
    var product_sizes = document.getElementById("Selected_Sizes");
    var product_package = document.getElementById("Selected_Packages");
    var product_color = document.getElementById("Selected_Color");



    //button variables
    var scroll_button = document.getElementById("scroll-down");
    var tempButtonp1 = document.getElementById("tempButton");
    var tempButtonp2 = document.getElementById("tempButton2");

    var Pricing = document.getElementById('Price_Total');

    var productId;

// function button_click()
// {
//    display1.scrollIntoView();
// }

function display_step1(){

// pageintro.style.display = "none";
if(CheckBox_CtM.onselectionchange = CheckBox_CtM.checked)
{
    display2.style.display = "block";
    display2.style = "center-block";
    display2.scrollIntoView({behavior: 'smooth', inline: 'nearest'});
    SuperCharger.style.display = "none";
    Cybertruck.style.display = "grid";
    Cybertruck.style = "grid-column: 3/4";
    Cybertruck.style = "center-block";
   product_Model = document.getElementById("Selected_Model").innerHTML = "Cyber Truck Model";
   
} 
  else if(CheckBox_SuperC.onselectionchange = CheckBox_SuperC.checked)
{
    display2.style.display = "block";
    display2.style = "center-block";
    display2.scrollIntoView({behavior: "smooth"});
    SuperCharger.style.display = "grid";
    SuperCharger.style = "grid-column: 3/4";
    Cybertruck.style.display = "none";
    product_Model = document.getElementById("Selected_Model").innerHTML = "Super Charger Model";

} 
  else
{
    display2.style.display = "none";
    display3.style.display = "none";
    display4.style.display = "none";
    display5.style.display = "none";
    SuperCharger.style = "center-block";
    Cybertruck.style="center-block";
}

}

function display_step2()
{

    if(CheckBox_Model.onselectionchange = CheckBox_Model.checked)
    {
        display3.style.display = "block";
        display3.style = "center-block";
        display3.scrollIntoView({behavior: "smooth"});
        Model.style.display = "grid";
        Model.style = "grid-column: 3/4";
        ModelWithLights.style.display = "none";
        WallArt.style.display = "none";
        WallArtWithLights.style.display = "none";
        product_package = document.getElementById("Selected_Package").innerHTML = "Model";
        product_package = {lights: false};
    } 
     else if(CheckBox_MWL.onselectionchange = CheckBox_MWL.checked)
    {
        display3.style.display = "block";
        display3.style = "center-block";
        display3.scrollIntoView({behavior: "smooth"});
        ModelWithLights.style.display = "grid";
        ModelWithLights.style = "grid-column: 3/4";
        WallArt.style.display = "none";
        WallArtWithLights.style.display = "none";
        Model.style.display = "none";
        product_package = document.getElementById("Selected_Package").innerHTML = "Model with Lights";
        product_package = {lights: true};
    } 
     else if(CheckBox_wallart.onselectionchange = CheckBox_wallart.checked)
    {
        display3.style.display = "block";
        display3.style = "center-block";
        display3.scrollIntoView({behavior: "smooth"});
        WallArt.style.display = "grid";
        WallArt.style = "grid-column: 3/4";
        ModelWithLights.style.display = "none";
        Model.style.display = "none";
        WallArtWithLights.style.display = "none";
        product_package = document.getElementById("Selected_Package").innerHTML = "Wall Art";
        product_package = {lights: false};
    }
     else if(CheckBox_WAwL.onselectionchange = CheckBox_WAwL.checked)
    {
        display3.style.display = "block";
        display3.style = "center-block";
        display3.scrollIntoView({behavior: "smooth"});
        WallArtWithLights.style.display = "grid";
        WallArtWithLights.style = "grid-column: 3/4";
        ModelWithLights.style.display = "none";
        WallArt.style.display = "none";
        Model.style.display = "none";
        product_package = document.getElementById("Selected_Package").innerHTML = "Wall Art with Lights";
        product_package = {lights: true};
    } 
     else
    {
        display3.style.display = "none";
        display5.style.display = "none";
        display4.style.display = "none";
        display1.style.display = "block";
        display1.style = "center-block";
        WallArtWithLights.style = "center-block";
        ModelWithLights.style = "center-block";
        WallArt.style = "center-block";
        Model.style = "center-block";
    }

}

function display_step3()
{
    if(CheckBox_fourth.onselectionchange = CheckBox_fourth.checked)
    {
        display4.style.display = "block";
        display4.style = "center-block";
        display4.scrollIntoView({behavior: "smooth"});
        fourthScale.style.display = "grid";
        fourthScale.style="grid-column: 3/4";
        tenthScale.style.display = "none";
        halfScale.style.display = "none";
        fullScale.style.display = "none";
        product_sizes = document.getElementById("Selected_Size").innerHTML = "1/4 Scale";
        productId = 1;
    } 
     else if(CheckBox_tenth.onselectionchange = CheckBox_tenth.checked)
    {
        display4.style.display = "block";
        display4.style = "center-block";
        display4.scrollIntoView({behavior: "smooth"});
        tenthScale.style.display = "grid";
        tenthScale.style = "grid-column: 3/4";
        fourthScale.style.display = "none";
        halfScale.style.display = "none";
        fullScale.style.display = "none";
        product_sizes = document.getElementById("Selected_Size").innerHTML = "1/10 Scale";
        productId = 0;
    }
     else if(CheckBox_half.onselectionchange = CheckBox_half.checked)
    {
        display4.style.display = "block";
        display4.style = "center-block";
        display4.scrollIntoView({behavior: "smooth"});
        halfScale.style.display = "grid";
        halfScale.style = "grid-column: 3/4";
        tenthScale.style.display = "none";
        fourthScale.style.display = "none";
        fullScale.style.display = "none";
        product_sizes = document.getElementById("Selected_Size").innerHTML = "1/2 Scale";
        productId = 2;
    } 
     else if(CheckBox_full.onselectionchange = CheckBox_full.checked)
    {
        display4.style.display = "block";
        display4.style = "center-block";
        display4.scrollIntoView({behavior: "smooth"});
        fullScale.style.display = "grid";
        fullScale.style = "grid-column: 3/4";
        tenthScale.style.display = "none";
        fourthScale.style.display = "none";
        halfScale.style.display = "none";
        product_sizes = document.getElementById("Selected_Size").innerHTML = "Full Scale";
        productId = 3;
    } 
     else
    {
        display4.style.display = "none";
        tenthScale.style = "center-block";
        fourthScale.style = "center-block";
        halfScale.style = "center-block";
        fullScale.style = "center-block";
        display2.style.display="block";
        display2.style = "center-block";       
    }

}

function display_step4()
{
   var Classic = document.getElementById("Classic");
   var Black = document.getElementById("BlackOut");
   var customDesign = document.getElementById("customDesign");

  if(CheckBox_Classic.onselectionchange = CheckBox_Classic.checked)
  {
      display5.style.display = "block";
      display5.style = "center-block";
      display5.scrollIntoView({behavior: "smooth"});
      Classic.style.display = "grid";
      Classic.style = "grid-column: 3/4";
      Black.style.display = "none";
      customDesign.style.display = "none";
      tempButtonp1.style.display = "block";
      tempButtonp2.style.display = "block";
      tempButtonp1.style = "center-block";
      tempButtonp2.style = "center-block";
      tempButtonp1.style.display = "button-placement";
      tempButtonp2.style.display = "button2-placement";
      product_color = document.getElementById("Selected_Color").innerHTML = "Silver";

  } 
   else if(CheckBox_Black.onselectionchange = CheckBox_Black.checked)
  {
      display5.style.display = "block";
      display5.style = "center-block";
      display5.scrollIntoView({behavior: "smooth"});
      Black.style.display = "grid";
      Black.style = "grid-column: 3/4";
      Classic.style.display = "none";
      customDesign.style.display = "none";
      tempButtonp1.style.display = "block";
      tempButtonp2.style.display = "block";
      tempButtonp1.style = "center-block";
      tempButtonp2.style = "center-block";
      tempButtonp1.style.display = "button-placement";
      tempButtonp2.style.display = "button2-placement";
       product_color = document.getElementById("Selected_Color").innerHTML = "Black";
  }
   else if(CheckBox_Custom.onselectionchange = CheckBox_Custom.checked)
  {
      
      display5.style.display = "block";
      display5.style = "center-block";
      display5.scrollIntoView({behavior: "smooth"});
      customDesign.style.display = "grid";
      customDesign.style = "grid-column: 3/4";
      Classic.style.display = "none";
      Black.style.display = "none";
      tempButtonp1.style.display = "block";
      tempButtonp2.style.display = "block";
      tempButtonp1.style = "center-block";
      tempButtonp2.style = "center-block";
      tempButtonp1.style.display = "button-placement";
      tempButtonp2.style.display = "button2-placement";
      product_color = document.getElementById("Selected_Color").innerHTML = "Custom";
  } 
   else
  {
      display5.style.display = "none";
      display4.style.display = "block";
      display4.style = "center-block";
      Classic.style.display = "block";
      Classic.style = "center-block";
      Black.style.display = "block";
      Black.style = "center-block";
      customDesign.style.display = "block";
      customDesign.style.display = "center-block";
      display3.style.display="block";
      display3.style = "center-block";       
  }

//    pricing();
}

function uncheck()
{
    CheckBox_CtM.checked=false;
    CheckBox_SuperC.checked=false;
    CheckBox_Model.checked=false;
    CheckBox_MWL.checked=false;
    CheckBox_WAwL.checked=false;
    CheckBox_wallart.checked=false;
    CheckBox_tenth.checked=false;
    CheckBox_fourth.checked=false;
    CheckBox_half.checked=false;
    CheckBox_full.checked=false;
    CheckBox_Classic.checked=false;
    CheckBox_Black.checked=false;
    CheckBox_Custom.checked=false;
    
}

function pricing()
{
//   var request =
//   {
//     email: 'papertesla@papertesla.com',
//     order:{
//       model: product_Model,
//       options:{
//         size: product_sizes,
//         package: product_package,
//         color: product_color, 
//       }
//     }
//   }

//   JSON.stringify(request); 

//   Axios.post()

// Axios({
//     method: 'post',
//     url: 'https://api.papertesla.com/v1/dev/orders',
//     data: {
//         model: product_Model,
//         options:{
//             size: product_sizes,
//             package: product_package,
//             color: product_color
//         }
//     }
//   });

product_package = {
    "Model with Lights": {
        lights: true ? false : true,       
    },
    "Model":{
        lights: true ? false : false,
    },
    "WAwL":{
        lights: true ? false : true,
    },
    "WallArt":
    {
        lights: true ? false : false,
    }
}

axios.post('https://api.papertesla.com/v1/dev/orders',
{
   model: product_Model,
   options:
   {
       size: product_sizes,
       id: productId,
       color: product_color,
       product_package:
       {
           lights: true ? false: false,
           
       }
   }
})
.then(function (Response) 
{

    alert('#$%')
    console.log(response.pricing.retail);
    document.getElementById('Price_Total').innerHTML = response.pricing.detail;
})
}




Document.onload(display2.style.display = "none", display3.style.display = "none", display4.style.display = "none", display5.style.display = "none", tempButtonp1.style.display="none",tempButtonp2.style.display="none",uncheck());


// product = "cybertruck" || "supercharger"
// attrs = []

// product_sizes = ["model", "wallart", "size3"]


// <input id="size" data-value="wall" data-text="Wall Art">
// <input id="size" data-value="3x3">
// <input id="size" data-value="full">

// <input id="product" data-value="supercharger">
// <input id="product" data-value="cybertruck">

// <input id="lights" data-value="true">




// sizeInputs = document.getElementById('#size')

// for input in sizeINputs:
//   if input.checked == true
//     then input.attr('data-value') -> a.) value into HTML b.) jsonData.size = the value u pulled from input



// POST => https://someapi.com/papertesla/order => SUCCESS 



// jsonData = {
//   product: 'cybertruck', // or supercharger,
//   size: 'wall', // [wallart, normal, full, 3x3]
//   lights: true // or false,
  
// }

// $('#sizeAttrs').forEach(function(){
//   my code here

// })

 // CheckBox_CtM.onselectionchange(function(e){
  //   if(e.value){
  //     display2.style.display = "block";
  //     display2.style = "center-block";
  //     display2.scrollIntoView();
  //     SuperCharger.style.display = "none";
  //     Cybertruck.style = "center-block";
  //   }
  // })

// var onChecked = function(e){
//   if(e.value) { // or whatever e.[event value]
//     e.input.style.display = "block";
//     e.input.style = "center-block";
//     e.input.scrollIntoView();
//     SuperCharger.style.display = "none";
//     Cybertruck.style = "center-block";
//   }
// }

// CheckBox_CtM.onselectionchange(onChecked);
// // ...

// CheckboxElement
// DEFAULT: ChkxElm.onselectionchange = function(callback){ hey i got checked, call => callback(my event values) }
// THIS: ChkxElm.onselectionchange = am i checked (true || false)
// THEN: ChkxElm.onselectionchange == true || false
