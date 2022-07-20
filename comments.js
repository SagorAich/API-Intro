function comments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response=>response.json())
    .then(data=>loadComments(data))
}
comments();
function loadComments(comments){
    const div=document.getElementById('comments');
    for(const comment of comments){
        const p=document.createElement('p');
        p.innerText=comment.body;
        div.appendChild(p);
    }
}