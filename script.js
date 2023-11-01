let infoArr = [];
let forms = document.querySelector('#forms');
document.querySelector('.para-design').style.display = "none";
let textarea = document.querySelector('textarea');

forms.addEventListener('submit', function(e){
e.preventDefault();

	let data = document.querySelector('#input-area').value;
	let index = infoArr.push(data);

	if(textarea.value !== ""){
		let p_createElement = document.createElement('p');
		p_createElement.classList.add('para-design');
		p_createElement.innerHTML = infoArr[index-1];
		
		let edit_img_element = document.createElement('img');
		edit_img_element.setAttribute('src', './icons/edit.png');
		edit_img_element.classList.add('edit');

		let delete_img_element = document.createElement('img');
		delete_img_element.setAttribute('src', './icons/delete.png');
		delete_img_element.classList.add('del');

		document.querySelector('.container').appendChild(p_createElement);
		let span_ele = document.createElement('span');

		p_createElement.appendChild(span_ele);
		span_ele.appendChild(edit_img_element);
		span_ele.appendChild(delete_img_element);

		forms.reset();

		delete_img_element.addEventListener('click', function(){
			p_createElement.remove();
		})

		edit_img_element.addEventListener('click', function(){
			document.querySelector('#input-area').value = p_createElement.textContent;
			p_createElement.remove();

		})
}
	
})


