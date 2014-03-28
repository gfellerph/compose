
Array.prototype.isArray=!0;
String.prototype.compose=function(a){
    var b=a.isArray?a:arguments,c=b.length;
    if(0<c)return this.replace(
        /\\u00a7(\d+)/g,
        function(a,d){return d<c?b[d]:a}
    )
};

var s = "", 
    a = [], 
    d = "";

for(var i = 0; i < 1000000;i++){
    s += " §" + i + ", ";
    a.push(i);
}
function test(){

    if(!window.performance){return;}

    // Start
    var start = window.performance.now();

    // Test
    d = s.compose(a);

    // Catch time
    var end = window.performance.now();
    var dur = end - start;

    console.log((dur/1000).toFixed(4) + "s");
    document.getElementById('res').innerHTML = d;
}

test();
