<script>
var a = prompt("Enter The Query"),b = parseInt(a),z=0;
if(b)
{
while(b>0)
var r= b%10, z= z*10+r, b = Math.floor(b/10);
document.write("Entered Query : "+ a +"<br> Given Number InReverse Order : "+ z);
}
else 
{
a = a.search(/[aeiouAEIOU]/);
document.write("The First Occurence Of Vowel is at : "+ (a+1));
}
</script>