import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import { useState } from "react";


function Quiz({setTypeState}) {
 const [firstState, setFirstState] = useState ("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/El_almuerzo%2C_by_Diego_Vel%C3%A1zquez.jpg/1920px-El_almuerzo%2C_by_Diego_Vel%C3%A1zquez.jpg")
 const [secondState, setSecondState] = useState ("https://upload.wikimedia.org/wikipedia/en/2/2b/The_Elephant_Celebes.jpg")
 const [holderState, setHolderState] = useState ("")
 const [secondHolderState, setSecondHolderState] = useState ("")
 
 const history = useHistory()

 function identifyType(type) {
    if (type === "https://upload.wikimedia.org/wikipedia/en/a/a7/Matissedance.jpg")
        { history.push(`/result`); setTypeState(4)}
    else if (type === "https://upload.wikimedia.org/wikipedia/en/1/1b/De_Chirico%27s_Love_Song.jpg")
        { history.push(`/result`); setTypeState(5)}
    else if (type === "https://upload.wikimedia.org/wikipedia/commons/4/44/Giacomo_Ceruti_-_Women_Working_on_Pillow_Lace_%28The_Sewing_School%29_-_WGA4672.jpg")
        { history.push(`/result`); setTypeState(1)}
    else if (type === "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/1920px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg")
        { history.push(`/result`); setTypeState(2)}
    else if (type === "A1")
        { history.push(`/result`); setTypeState(3)}

 }

function changeFirstState () {
 
    if (firstState === "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/El_almuerzo%2C_by_Diego_Vel%C3%A1zquez.jpg/1920px-El_almuerzo%2C_by_Diego_Vel%C3%A1zquez.jpg" && secondState === "https://upload.wikimedia.org/wikipedia/en/2/2b/The_Elephant_Celebes.jpg")
    {setFirstState("https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/1920px-Les_Demoiselles_d%27Avignon.jpg"); setSecondState("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Berthe_Morisot_Reading.jpg/2560px-Berthe_Morisot_Reading.jpg"); setHolderState("https://upload.wikimedia.org/wikipedia/commons/4/44/Giacomo_Ceruti_-_Women_Working_on_Pillow_Lace_%28The_Sewing_School%29_-_WGA4672.jpg") }
    else if (firstState === "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/1920px-Les_Demoiselles_d%27Avignon.jpg" && secondState === "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Berthe_Morisot_Reading.jpg/2560px-Berthe_Morisot_Reading.jpg")
    {setFirstState("https://upload.wikimedia.org/wikipedia/en/b/be/Pedestal_Table_in_the_Studio.jpg"); setSecondState("https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Franti%C5%A1ek_Kupka%2C_1912%2C_Amorpha%2C_fugue_en_deux_couleurs_%28Fugue_in_Two_Colors%29%2C_210_x_200_cm%2C_Narodni_Galerie%2C_Prague.jpg/1920px-Franti%C5%A1ek_Kupka%2C_1912%2C_Amorpha%2C_fugue_en_deux_couleurs_%28Fugue_in_Two_Colors%29%2C_210_x_200_cm%2C_Narodni_Galerie%2C_Prague.jpg"); setSecondHolderState("https://upload.wikimedia.org/wikipedia/en/a/a7/Matissedance.jpg"  )  }
    else (split1Quiz())
}

function changeSecondState () {
    if (firstState === "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/El_almuerzo%2C_by_Diego_Vel%C3%A1zquez.jpg/1920px-El_almuerzo%2C_by_Diego_Vel%C3%A1zquez.jpg" && secondState === "https://upload.wikimedia.org/wikipedia/en/2/2b/The_Elephant_Celebes.jpg")
    {setFirstState("https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/1920px-Les_Demoiselles_d%27Avignon.jpg"); setSecondState("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Berthe_Morisot_Reading.jpg/2560px-Berthe_Morisot_Reading.jpg"); setHolderState("https://upload.wikimedia.org/wikipedia/en/1/1b/De_Chirico%27s_Love_Song.jpg") }
    else if (firstState === "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/1920px-Les_Demoiselles_d%27Avignon.jpg" && secondState === "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Berthe_Morisot_Reading.jpg/2560px-Berthe_Morisot_Reading.jpg")
    {setFirstState("https://upload.wikimedia.org/wikipedia/en/b/be/Pedestal_Table_in_the_Studio.jpg"); setSecondState("https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Franti%C5%A1ek_Kupka%2C_1912%2C_Amorpha%2C_fugue_en_deux_couleurs_%28Fugue_in_Two_Colors%29%2C_210_x_200_cm%2C_Narodni_Galerie%2C_Prague.jpg/1920px-Franti%C5%A1ek_Kupka%2C_1912%2C_Amorpha%2C_fugue_en_deux_couleurs_%28Fugue_in_Two_Colors%29%2C_210_x_200_cm%2C_Narodni_Galerie%2C_Prague.jpg"); setSecondHolderState("https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/1920px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg"  )  }
    else (split2Quiz())
}
    function split1Quiz() {
        if (firstState === "https://upload.wikimedia.org/wikipedia/en/b/be/Pedestal_Table_in_the_Studio.jpg" && secondState === "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Franti%C5%A1ek_Kupka%2C_1912%2C_Amorpha%2C_fugue_en_deux_couleurs_%28Fugue_in_Two_Colors%29%2C_210_x_200_cm%2C_Narodni_Galerie%2C_Prague.jpg/1920px-Franti%C5%A1ek_Kupka%2C_1912%2C_Amorpha%2C_fugue_en_deux_couleurs_%28Fugue_in_Two_Colors%29%2C_210_x_200_cm%2C_Narodni_Galerie%2C_Prague.jpg")
        {setFirstState(holderState) ; setSecondState(secondHolderState)}
        else if (firstState === "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/1920px-Les_Demoiselles_d%27Avignon.jpg" && secondState === "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Berthe_Morisot_Reading.jpg/2560px-Berthe_Morisot_Reading.jpg")
        {setFirstState(holderState) ; setSecondState(secondHolderState)}
    else if (firstState === holderState && secondState === secondHolderState)
        {setFirstState(holderState) ; setSecondState("https://upload.wikimedia.org/wikipedia/en/b/b7/Pablo_Picasso%2C_1913-14%2C_Head_%28T%C3%AAte%29%2C_cut_and_pasted_colored_paper%2C_gouache_and_charcoal_on_paperboard%2C_43.5_x_33_cm%2C_Scottish_National_Gallery_of_Modern_Art%2C_Edinburgh.jpg")}
        else if (firstState === holderState && secondState === "https://upload.wikimedia.org/wikipedia/en/b/b7/Pablo_Picasso%2C_1913-14%2C_Head_%28T%C3%AAte%29%2C_cut_and_pasted_colored_paper%2C_gouache_and_charcoal_on_paperboard%2C_43.5_x_33_cm%2C_Scottish_National_Gallery_of_Modern_Art%2C_Edinburgh.jpg")
        {identifyType(holderState)}
        else if (firstState === "https://upload.wikimedia.org/wikipedia/en/b/b7/Pablo_Picasso%2C_1913-14%2C_Head_%28T%C3%AAte%29%2C_cut_and_pasted_colored_paper%2C_gouache_and_charcoal_on_paperboard%2C_43.5_x_33_cm%2C_Scottish_National_Gallery_of_Modern_Art%2C_Edinburgh.jpg" && secondState === secondHolderState)
        {identifyType("A1")}
    }

    function split2Quiz() {
        if (firstState === "https://upload.wikimedia.org/wikipedia/en/b/be/Pedestal_Table_in_the_Studio.jpg" && secondState === "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Franti%C5%A1ek_Kupka%2C_1912%2C_Amorpha%2C_fugue_en_deux_couleurs_%28Fugue_in_Two_Colors%29%2C_210_x_200_cm%2C_Narodni_Galerie%2C_Prague.jpg/1920px-Franti%C5%A1ek_Kupka%2C_1912%2C_Amorpha%2C_fugue_en_deux_couleurs_%28Fugue_in_Two_Colors%29%2C_210_x_200_cm%2C_Narodni_Galerie%2C_Prague.jpg")
        {setFirstState(holderState) ; setSecondState(secondHolderState)}
        else if (firstState === "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/1920px-Les_Demoiselles_d%27Avignon.jpg" && secondState === "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Berthe_Morisot_Reading.jpg/2560px-Berthe_Morisot_Reading.jpg")
        {setFirstState(holderState) ; setSecondState(secondHolderState)}
        else if (firstState === holderState && secondState === secondHolderState)
        {setFirstState("https://upload.wikimedia.org/wikipedia/en/b/b7/Pablo_Picasso%2C_1913-14%2C_Head_%28T%C3%AAte%29%2C_cut_and_pasted_colored_paper%2C_gouache_and_charcoal_on_paperboard%2C_43.5_x_33_cm%2C_Scottish_National_Gallery_of_Modern_Art%2C_Edinburgh.jpg") ;setSecondState(secondHolderState)}
        else if (firstState === "https://upload.wikimedia.org/wikipedia/en/b/b7/Pablo_Picasso%2C_1913-14%2C_Head_%28T%C3%AAte%29%2C_cut_and_pasted_colored_paper%2C_gouache_and_charcoal_on_paperboard%2C_43.5_x_33_cm%2C_Scottish_National_Gallery_of_Modern_Art%2C_Edinburgh.jpg" && secondState === secondHolderState)
        {identifyType(secondHolderState)}
        else if (firstState === holderState && secondState === "https://upload.wikimedia.org/wikipedia/en/b/b7/Pablo_Picasso%2C_1913-14%2C_Head_%28T%C3%AAte%29%2C_cut_and_pasted_colored_paper%2C_gouache_and_charcoal_on_paperboard%2C_43.5_x_33_cm%2C_Scottish_National_Gallery_of_Modern_Art%2C_Edinburgh.jpg")
        {identifyType("A1")}
        
    }


    return (
      <div>
      <img onClick = {changeFirstState} src= {firstState}/> 
      <img onClick = {changeSecondState} src= {secondState}/> 
     </div>
  )
}

export default Quiz;