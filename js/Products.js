
    //Display Variables
    var display2 = document.getElementById("display2");
    var display3 = document.getElementById("display3");
    var display4 = document.getElementById("display4");

    //Css display control variables

    //1st layout display vars
    var Cybertruck = document.getElementById("Cybertruck");

    var SuperCharger = document.getElementById("SuperCharger");
    
    //2nd layout display vars
    var Model = document.getElementById("Model");

    var ModelWithLights = document.getElementById("MWL");

    var WallArt = document.getElementById("wallart");

    var WallArtWithLights = document.getElementById("WAwL");

    //3rd layout display vars
    var tenthScale = document.getElementById("tenthScale");

    var fourthScale = document.getElementById("fourthScale");

    var halfScale = document.getElementById("halfScale");

    var fullScale = document.getElementById("FullScale");


    //CheckBox Controll Variables

    //1st layout variables
    var CheckBox_CtM = document.getElementById("CtM");

    var CheckBox_SuperC = document.getElementById("SuperC");

    //2nd layout variables
    var CheckBox_Model = document.getElementById("Model-id");

    var CheckBox_MWL = document.getElementById("MWL-id");

    var CheckBox_wallart = document.getElementById("wallart-id");

    var CheckBox_WAwL = document.getElementById("WAwL-id");

    //Third Layout variables 
    var CheckBox_tenth = document.getElementById("tenth_id");

    var CheckBox_fourth = document.getElementById("fourth_id");

    var CheckBox_half = document.getElementById("half_id");

    var CheckBox_full = document.getElementById("Full_id");


function display_step1(){

if(CheckBox_CtM.onselectionchange = CheckBox_CtM.checked)
{
    display2.style.display = "block";
    display2.style = "center-block";
    display2.scrollIntoView();
    SuperCharger.style.display = "none";
    Cybertruck.style = "center-block";
} 
  else if(CheckBox_SuperC.onselectionchange = CheckBox_SuperC.checked)
{
    display2.style.display = "block";
    display2.style = "center-block";
    display2.scrollIntoView();
    SuperCharger.style = "center-block";
    Cybertruck.style.display = "none";
} 
  else
{
    display2.style.display = "none";
    display3.style.display = "none";
    display4.style.display = "none";
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
        display3.scrollIntoView();
        Model.style = "center-block";
        ModelWithLights.style.display = "none";
        WallArt.style.display = "none";
        WallArtWithLights.style.display = "none";

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
    } 
     else
    {
        display3.style.display = "none";
        display4.style.display = "none";
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
        display4.scrollIntoView();
        fourthScale.style = "center-block";
        tenthScale.style.display = "none";
        halfScale.style.display = "none";
        fullScale.style.display = "none";
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
    } 
     else
    {
       display4.style.display = "none";
       tenthScale.style = "center-block";
        fourthScale.style = "center-block";
        halfScale.style = "center-block";
        fullScale.style = "center-block";
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
}

Document.onload(display2.style.display = "none", display3.style.display = "none", display4.style.display = "none", uncheck());
