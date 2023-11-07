import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


window.openMoreProjects = thisElement => 
{
    for(let i = 0; i < document.getElementsByClassName("see-more").length; i++)
    {
        document.getElementsByClassName("see-more")[i].classList.remove("closed")
        thisElement.style.display = "none";
    }
}
