var nam = "My name is Naruto";
var split = nam.split(' ');
var new_nam  = ' ';


for (let i = 0 ; i<split.length;i++) {
    for (let j = split[i].length-1; j >=0; j--) {
        new_nam = new_nam+split[i][j];

        
    }
   process.stdout.write(new_nam+' ');
   new_nam = ' ';
        

    
    
}

