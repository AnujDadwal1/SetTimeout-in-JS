const a = function(){
    console.log("MY NAME IS ANUJ")
};
const changetext = function(){
    document.querySelector('h1').
    innerHTML="Best JS series";
}
const changeme = setTimeout(changetext,2000);
document.querySelector("#stop").addEventListener('click', function(){
    clearTimeout(changeme)
    console.log("STOP")
})
