// Header fix while scroll
//let mainElem = document.querySelector('main');
document.addEventListener('scroll', function changecss(){
  const navElem = document.querySelector('.header-bottom');
  if(scrollY>=180){
    navElem.classList.add('js-fix-header')
    //mainElem.style.marginTop = '72px'
  }else{
    navElem.classList.remove('js-fix-header')
    //mainElem.style.marginTop = '0'
  }
})

// Search Bar expand
const searchIconElem = document.querySelector('.search-icon')
const searchElem = document.querySelector('.search-bar')
searchIconElem.addEventListener('click',()=>{
  // on and off new class while clicking search icon to expand and shrink
  searchElem.classList.toggle('search-bar-expand')
  document.addEventListener('click',(event)=>{
    // checking user clicked anywhere except the search bar to shrink
    if(!event.target.classList.contains('bi') && !event.target.classList.contains('search-input')  && !event.target.classList.contains('search-bar-expand')){
      searchElem.classList.remove('search-bar-expand')
    }
  })
})

/* Drop Down menu active and collapse */
dropDownParentElem = document.getElementById('health_topics_link')
dropDownParentElem.addEventListener('click', function(){
  document.querySelector('.drop-down-mega').classList.toggle('js-dropdown-menu')
  document.querySelector('#icon_down').classList.toggle('js-icon-up')
})

/*
window.addEventListener('resize',()=>{
  let ww=window.innerWidth
  let headerBottomElem=document.querySelector('#header_bottom')
  let headerMidElem=document.querySelector('#header_mid')
  let headerMidBottomElem=document.querySelector('#header_mid_bottom')
  if(ww<=1000){
    headerBottomElem.classList.remove('row')
    headerMidElem.classList.remove('row')
    headerBottomElem.classList.add('col')
    headerMidElem.classList.add('col')
    headerMidBottomElem.classList.add('row')
  }else{
    headerBottomElem.classList.add('row')
    headerMidElem.classList.add('row')  
    headerBottomElem.classList.remove('col')
    headerMidElem.classList.remove('col')
    headerMidBottomElem.classList.remove('row')
  }
})
*/
