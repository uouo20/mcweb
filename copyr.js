function addLink() {
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br /><br />著作权归作者所有。<br />商业转载请联系作者获得授权，非商业转载请注明出处。<br />作者：深海小涛<br />来源：<a href='"+document.location.href+"'>"+document.location.href+"</a>"; 
    var copy_text = selection + pagelink;
    var new_div = document.createElement('div');
    new_div.style.left='-99999px';
    new_div.style.position='absolute';
    body_element.appendChild(new_div );
    new_div.innerHTML = copy_text ;
    selection.selectAllChildren(new_div );
    window.setTimeout(function() {
        body_element.removeChild(new_div );
    },0);
}
document.oncopy = addLink;