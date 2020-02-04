
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

    //variables for Selected options and Pricing
    var Model_Selection;
    
    var Package_Selection;
    
    var Size_Selection;
        
    //button variables
    var scroll_button = document.getElementById("scroll-down");
    var tempButtonp1 = document.getElementById("tempButton");
    var tempButtonp2 = document.getElementById("tempButton2");

function button_click()
{
   display1.scrollIntoView();
}

function display_step1(){

 pageintro.style.display = "none";
if(CheckBox_CtM.onselectionchange = CheckBox_CtM.checked)
{
    display2.style.display = "block";
    display2.style = "center-block";
    display2.scrollIntoView();
    SuperCharger.style.display = "none";
    Cybertruck.style.display = "block";
    Cybertruck.style = "center-block";
    document.getElementById("Selected_Model").innerHTML = "Cyber Truck Model";
} 
  else if(CheckBox_SuperC.onselectionchange = CheckBox_SuperC.checked)
{
    display2.style.display = "block";
    display2.style = "center-block";
    display2.scrollIntoView();
    SuperCharger.style.display = "block";
    SuperCharger.style = "center-block";
    Cybertruck.style.display = "none";
    document.getElementById("Selected_Model").innerHTML = "Super Charger Model";
} 
  else
{
    display2.style.display = "none";
    display3.style.display = "none";
    display5.style.display = "none";
    SuperCharger.style = "center-block";
    Cybertruck.style="center-block";
}
 Selections();
}

function display_step2()
{

    if(CheckBox_Model.onselectionchange = CheckBox_Model.checked)
    {
        display3.style.display = "block";
        display3.style = "center-block";
        display3.scrollIntoView();
        Model.style = "center-block";
        ModelWithLights.style.display = "none";
        WallArt.style.display = "none";
        WallArtWithLights.style.display = "none";
        document.getElementById("Selected_Package").innerHTML = "Model";

    } 
     else if(CheckBox_MWL.onselectionchange = CheckBox_MWL.checked)
    {
        display3.style.display = "block";
        display3.style = "center-block";
        display3.scrollIntoView();
        ModelWithLights.style = "center-block";
        WallArt.style.display = "none";
        WallArtWithLights.style.display = "none";
        Model.style.display = "none";
        document.getElementById("Selected_Package").innerHTML = "Model with Lights";
    } 
     else if(CheckBox_wallart.onselectionchange = CheckBox_wallart.checked)
    {
        display3.style.display = "block";
        display3.style = "center-block";
        display3.scrollIntoView();
        WallArt.style = "center-block";
        ModelWithLights.style.display = "none";
        Model.style.display = "none";
        WallArtWithLights.style.display = "none";
        document.getElementById("Selected_Package").innerHTML = "Wall Art";
    }
     else if(CheckBox_WAwL.onselectionchange = CheckBox_WAwL.checked)
    {
        display3.style.display = "block";
        display3.style = "center-block";
        display3.scrollIntoView();
        WallArtWithLights.style = "center-block";
        ModelWithLights.style.display = "none";
        WallArt.style.display = "none";
        Model.style.display = "none";
        document.getElementById("Selected_Package").innerHTML = "Wall Art with Lights";
    } 
     else
    {
        display3.style.display = "none";
        display5.style.display = "none";
        display1.style.display = "block";
        display1.style = "center-block";
        WallArtWithLights.style = "center-block";
        ModelWithLights.style = "center-block";
        WallArt.style = "center-block";
        Model.style = "center-block";
    }

    Selections();
}

function display_step3()
{
    if(CheckBox_fourth.onselectionchange = CheckBox_fourth.checked)
    {
        display4.style.display = "block";
        display4.style = "center-block";
        display4.scrollIntoView();
        fourthScale.style = "center-block";
        tenthScale.style.display = "none";
        halfScale.style.display = "none";
        fullScale.style.display = "none";
        document.getElementById("Selected_Size").innerHTML = "1/4 Scale";
    } 
     else if(CheckBox_tenth.onselectionchange = CheckBox_tenth.checked)
    {
        display4.style.display = "block";
        display4.style = "center-block";
        display4.scrollIntoView();
        tenthScale.style = "center-block";
        fourthScale.style.display = "none";
        halfScale.style.display = "none";
        fullScale.style.display = "none";
        document.getElementById("Selected_Size").innerHTML = "1/10 Scale";
    }
     else if(CheckBox_half.onselectionchange = CheckBox_half.checked)
    {
        display4.style.display = "block";
        display4.style = "center-block";
        display4.scrollIntoView();
        halfScale.style = "center-block";
        tenthScale.style.display = "none";
        fourthScale.style.display = "none";
        fullScale.style.display = "none";
        document.getElementById("Selected_Size").innerHTML = "1/2 Scale";
    } 
     else if(CheckBox_full.onselectionchange = CheckBox_full.checked)
    {
        display4.style.display = "block";
        display4.style = "center-block";
        display4.scrollIntoView();
        fullScale.style = "center-block";
        tenthScale.style.display = "none";
        fourthScale.style.display = "none";
        halfScale.style.display = "none";
        document.getElementById("Selected_Size").innerHTML = "Full Scale";
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
      display5.scrollIntoView();
      tempButtonp1.style.display = "button-placement";
      tempButtonp2.style.display = "button2-placement";
      Classic.style.display = "block";
      Classic.style = "center-block";
      Black.style.display = "none";
      customDesign.style.display = "none";
      document.getElementById("Selected_Color").innerHTML = "Silver";

  } 
   else if(CheckBox_Black.onselectionchange = CheckBox_Black.checked)
  {
      display5.style.display = "block";
      display5.style = "center-block";
      display5.scrollIntoView();
      tempButtonp1.style.display = "button-placement";
      tempButtonp2.style.display = "button2-placement";
      Black.style.display = "block";
      Black.style = "center-block";
      Classic.style.display = "none";
      customDesign.style.display = "none";
      document.getElementById("Selected_Color").innerHTML = "Black";
  }
   else if(CheckBox_Custom.onselectionchange = CheckBox_Custom.checked)
  {
      
      display5.style.display = "block";
      display5.style = "center-block";
      display5.scrollIntoView();
      tempButtonp1.style.display = "button-placement";
      tempButtonp2.style.display = "button2-placement";
      customDesign.style.display = "block";
      customDesign.style = "center-block";
      Classic.style.display = "none";
      Black.style.display = "none";
      document.getElementById("Selected_Color").innerHTML = "Custom";
  } 
   else
  {
      display5.style.display = "none";
      Classic.style.display = "block";
      Classic.style = "center-block";
      Black.style.display = "block";
      Black.style = "center-block";
      customDesign.style.display = "block";
      customDesign.style.display = "center-block";
      display3.style.display="block";
      display3.style = "center-block";       
  }
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

function Selections()
{
  if(CheckBox_CtM == CheckBox_CtM.checked )
  {
      Model_Selection.innerHTML = "CyberTruck";

      if(CheckBox_Model == CheckBox_Model.checked)
      { 
          Package_Selection.innerHTML = "Model";

          if(CheckBox_tenth == CheckBox_tenth.checked)
          {
            Size_Selection.innerHTML = "1/10th Scale";
            document.getElementById("Price_Total").innerHTML = "24.99";
          }
          else if(CheckBox_fourth == CheckBox_fourth.checked)
          {
            Size_Selection.innerHTML = "1/4th Scale";
            document.getElementById("Price_Total").innerHTML = "49.99";
          }
          else if(CheckBox_half == CheckBox_half.checked)
          {
            Size_Selection.innerHTML = "1/2 Scale";
            document.getElementById("Price_Total").innerHTML = "99.99";
          }
          else if(CheckBox_full == CheckBox_full.checked)
          {
            Size_Selection.innerHTML = "Full Scale";
            document.getElementById("Price_Total").innerHTML = "199.99";
          }
      }
      else if(CheckBox_MWL.checked == true)
      {
        Package_Selection.innerHTML = "Model With Lights";

        if(CheckBox_tenth.checked == true)
          {
            Size_Selection.innerHTML = "1/10th Scale";
            document.getElementById("Price_Total").innerHTML = "49.99";
          }
          else if(CheckBox_fourth.checked == true)
          {
            Size_Selection.innerHTML = "1/4th Scale";
            document.getElementById("Price_Total").innerHTML = "99.99";
          }
          else if(CheckBox_half.checked == true)
          {
            Size_Selection.innerHTML = "1/2 Scale";
            document.getElementById("Price_Total").innerHTML = "179.99";
          }
          else if(CheckBox_full.checked == true)
          {
            Size_Selection.innerHTML = "Full Scale";
            document.getElementById("Price_Total").innerHTML = "299.99";
          }
      }
      else if(CheckBox_wallart.checked == true)
      {
        Package_Selection.innerHTML = "Wall Art";
        if(CheckBox_tenth.checked == true)
        {
          Size_Selection.innerHTML = "1/10th Scale";
          document.getElementById("Price_Total").innerHTML = "14.99";
        }
        else if(CheckBox_fourth.checked == true)
        {
          Size_Selection.innerHTML = "1/4th Scale";  
          document.getElementById("Price_Total").innerHTML = "29.99";
        }
        else if(CheckBox_half.checked == true)
        {
          Size_Selection.innerHTML = "1/2 Scale";  
          document.getElementById("Price_Total").innerHTML = "49.99";
        }
        else if(CheckBox_full.checked == true)
        {
          Size_Selection.innerHTML = "Full Scale";
          document.getElementById("Price_Total").innerHTML = "99.99";
        }
      }
      else if(CheckBox_WAwL.checked == true)
      {
        Package_Selection.innerHTML = "Wall Art with Lights";
        if(CheckBox_tenth.checked == true)
        {
          Size_Selection.innerHTML = "1/10th Scale";  
          document.getElementById("Price_Total").innerHTML = "39.99";
        }
        else if(CheckBox_fourth.checked == true)
        {
          Size_Selection.innerHTML = "1/4th Scale";   
          document.getElementById("Price_Total").innerHTML = "79.99";
        }
        else if(CheckBox_half.checked == true)
        {
          Size_Selection.innerHTML = "1/2 Scale";  
          document.getElementById("Price_Total").innerHTML = "149.99";
        }
        else if(CheckBox_full.checked == true)
        {
          Size_Selection.innerHTML = "Full Scale";  
          document.getElementById("Price_Total").innerHTML = "199.99";
        }
      }
  } 
   else if(CheckBox_SuperC.checked == true)
  {
      Model_Selection.innerHTML = "SuperCharger";
      
      if(CheckBox_Model.checked == true)
      { 
         Package_Selection.innerHTML = "Standard Model";
          if(CheckBox_tenth.checked == true)
          {
            Size_Selection.innerHTML = "1/10th Scale";
            document.getElementById("Price_Total").innerHTML = "44.99";
          }
          else if(CheckBox_fourth.checked == true)
          {
            Size_Selection.innerHTML = "1/4th Scale";
            document.getElementById("Price_Total").innerHTML = "79.99";
          }
          else if(CheckBox_half.checked == true)
          {
            Size_Selection.innerHTML = "1/2 Scale";
            document.getElementById("Price_Total").innerHTML = "149.99";
          }
          else if(CheckBox_full.checked == true)
          {
            Size_Selection.innerHTML = "Full Scale";
            document.getElementById("Price_Total").innerHTML = "299.99";
          }
      }
      else if(CheckBox_MWL.checked == true)
      {
        Package_Selection.innerHTML = "Model with Lights";
        if(CheckBox_tenth.checked == true)
          {
            Size_Selection.innerHTML = "1/10th Scale";
            document.getElementById("Price_Total").innerHTML = "69.99";
          }
          else if(CheckBox_fourth.checked == true)
          {
            Size_Selection.innerHTML = "1/4th Scale";
            document.getElementById("Price_Total").innerHTML = "129.99";
          }
          else if(CheckBox_half.checked == true)
          {
            Size_Selection.innerHTML = "1/2 Scale";  
            document.getElementById("Price_Total").innerHTML = "229.99";
          }
          else if(CheckBox_full.checked == true)
          {
            Size_Selection.innerHTML = "Full Scale";  
            document.getElementById("Price_Total").innerHTML = "399.99";
          }
      }
      else if(CheckBox_wallart.checked == true)
      {
        Package_Selection.innerHTML = "Wall Art";
        if(CheckBox_tenth.checked == true)
        {
          Size_Selection.innerHTML = "1/10th Scale";
          document.getElementById("Price_Total").innerHTML = "34.99";
        }
        else if(CheckBox_fourth.checked == true)
        {
          Size_Selection.innerHTML = "1/4th Scale";  
          document.getElementById("Price_Total").innerHTML = "59.99";
        }
        else if(CheckBox_half.checked == true)
        {
          Size_Selection.innerHTML = "1/2 Scale";  
          document.getElementById("Price_Total").innerHTML = "99.99";
        }
        else if(CheckBox_full.checked == true)
        {
          Size_Selection.innerHTML = "Full Scale";  
          document.getElementById("Price_Total").innerHTML = "199.99";
        }
      }
      else if(CheckBox_WAwL.checked == true)
      {
        Package_Selection.innerHTML = "Wall Art with Lights";  
        if(CheckBox_tenth.checked == true)
        {
          Size_Selection.innerHTML = "1/10th Scale";  
          document.getElementById("Price_Total").innerHTML = "59.99";
        }
        else if(CheckBox_fourth.checked == true)
        {
          Size_Selection.innerHTML = "1/4th Scale";  
          document.getElementById("Price_Total").innerHTML = "109.99";
        }
        else if(CheckBox_half.checked == true)
        {
          Size_Selection.innerHTML = "1/2 Scale";   
          document.getElementById("Price_Total").innerHTML = "199.99";
        }
        else if(CheckBox_full.checked == true)
        {
          Size_Selection.innerHTML = "Full Scale";  
          document.getElementById("Price_Total").innerHTML = "299.99";
        }
      }

    Selections();
  }
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
