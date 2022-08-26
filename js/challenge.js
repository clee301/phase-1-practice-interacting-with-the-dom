  //counter
  const counterDOM = document.querySelector('#counter');
	let counter = 0
  
function counterFunction (){
    counter++
		counterDOM.textContent = counter    
}
const counterInterval = setInterval(counterFunction, 1000);
  
//counter buttons
	const btnPlus = document.getElementById('plus')
  const btnMinus = document.getElementById('minus')
  
  btnPlus.addEventListener('click', function(){
  	counter++
    counterDOM.textContent = counter
  })
  
  btnMinus.addEventListener('click', function(){
  	counter--
    counterDOM.textContent = counter    
  })
  
  // pause button
  
  const pause = document.getElementById('pause')
  let toggle = 0;
  
  pause.addEventListener('click', function(){
    
    if(toggle === 0){
    	  clearInterval(counterInterval)
    	btnPlus.disabled = true;
    	btnMinus.disabled = true;
    	pause.textContent = 'resume'
      toggle = 1;
    } else {
    	setInterval(counterFunction, 1000)
      btnPlus.disabled = false;
      btnMinus.disabled = false;
      pause.textContent = 'pause';
      toggle = 0;
    }  
    })
    
   // like button
   
   const like = document.getElementById('heart');
   const likes = document.querySelector('.likes'); 
   
   like.addEventListener('click', function(){
   	const likeList = document.createElement('li')
    likeList.textContent = `Liked ${counter}!`
    likes.appendChild(likeList)
   })

     // leave a comment
  
const btnComment = document.getElementById('submit')
const comments = document.querySelector('.comments')
const inputValue = document.getElementById('comment-input')

btnComment.addEventListener('click', function(e){
    e.preventDefault();
    const commentItem = document.createElement('p');
  commentItem.textContent = inputValue.value
  comments.appendChild(commentItem)
  
})

