/*(function(){
    var add_left = document.getElementById("left_in");
    var add_right = document.getElementById("right_in");
    var del_left = document.getElementById("left_out");
    var del_right = document.getElementById("right_out");
    add_left.onclick = function(){

    }
})();*/

var box = document.getElementById("box");

/*function long_str(){
    var input_text = document.getElementById("input").value;
}*/

function left_in(){
    var input_text = document.getElementById("input").value;
    if(input_text==""){
        alert("���������ݣ�");
    }else{
        var span = document.createElement("span");
        span.setAttribute("class","item");
        box.insertBefore(span,box.firstChild);
        span.innerHTML = input_text;
    }
}
function right_in(){
    var input_text = document.getElementById("input").value;
    if(input_text==""){
        alert("���������ݣ�");
    }else{
        var span = document.createElement("span");
        span.setAttribute("class","item");
        box.appendChild(span);
        span.innerHTML = input_text;
    }
}

function left_out(){
    if(box.firstElementChild){
        alert("�Ƿ�ȷ��ɾ��"+ box.firstElementChild.innerText+"?");
        box.removeChild(box.firstChild);
    }else{
        alert("û��Ԫ�ؿ���ɾ��");
    }
}

function right_out(){
    if(box.firstElementChild){
        alert("�Ƿ�ȷ��ɾ��"+ box.lastElementChild.innerText+"?");
        box.removeChild(box.lastChild);
    }else{
        alert("û��Ԫ�ؿ���ɾ��");
    }
}

function search(){
    var txt = document.getElementById("keyword").value;
    if(txt == ""){
        alert("������Ҫ��ѯ�����ݣ�");
        return;
    }else{
        var box0 = document.getElementById("box");
        var nodes = box0.childNodes;
        for(var i=0; i<nodes.length; i++){
            var nd0 = nodes[i];
            var str = nd0.innerText;
            //�ж��ַ����Ƿ�����Ӵ�:str.indexOf(substr)>=0
            if(str.indexOf(txt)>=0){
                nd0.style.backgroundColor = '#f00';
                nd0.style.color="#fff";
            }
        }
    }

}