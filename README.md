compose
=======

String composing with placeholders for JavaScript

Use:

<pre>
var name = "Marc";
var product = "pears";

var s = "Hi, I'm {0}, I'd like to buy {1}.".compose(name, product);
</pre>


Or:
<pre>
var array = ["Marc", "pears"];

var s = "Hi, this is {0}, I'd like to buy {1}".compose(array);
</pre>


Also:
<pre>
var product = "pears";

var s = "{0} is the best product ever, nothing is better than {0}.".compose(product);
</pre>
