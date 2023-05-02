let friendlist = ['Zia Khan','Mike Litman', 'Dr.Sagher', 'Aneela', 'Abdullah', 'Haseeb'];
console.log("The name of My Special Friend in the List is "+ friendlist[0]);
console.log("The name of My Soul Friend in the List is "+ friendlist[1]);
console.log("The name of My Best Friend in the List is "+ friendlist[2]);
console.log("The name of My Life Partner Friend in the List is "+ friendlist[3]);
console.log("The name of My First Son-Friend in the List is "+ friendlist[4]);
console.log("The name of My Second Son-Friend in the List is "+ friendlist[5]);

for(let i=0; i<friendlist.length; i++){
    console.log("Name of My "+(i+1)+" Friend is "+friendlist[i]);
}