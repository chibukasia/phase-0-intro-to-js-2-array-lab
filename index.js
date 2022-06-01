// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendCat (name){
    return cats.push(name)
}
function destructivelyPrependCat (name){
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
function appendCat(name){
    return [...cats, name]
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat(){
    const newCats = [...cats].slice(0,2)
    return newCats;
}
function removeFirstCat (){
    const newCats = [...cats].slice(1)
    return newCats;
}
/*
appendCat ("sammy")
prependCat("Jusik")
removeFirstCat()
removeLastCat()*/