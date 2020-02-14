const robot= {
    
    name:'Robo-Galaxy',
    coordinates: 
     {x:0, 
      y:0, 
      z:0}, 
   check: function() {
        console.log(`Robot position: x= ${this.coordinates.x}, y=${this.coordinates.y}, z=${this.coordinates.z}`);
       if(this.coordinates.x ===4 && this.coordinates.y===2&&this.coordinates.z===3) {
          console.log('Mission complete!');
          }
        
    },
    
    moveRight: function() {
        if(this.coordinates.x!==10){
        this.coordinates.x++;
        }
         this.check();
    },
    
     moveLeft: function() {
         if(this.coordinates.x!==0){
        this.coordinates.x--;
        }
        this.check();
    },
    moveForward: function() {
        if(this.coordinates.y!==10){
        this.coordinates.y++;
        }
         this.check();
    },
    
     moveBackward: function() {
         if(this.coordinates.y!==0){
        this.coordinates.y--;
        }
        this.check();
    },
    moveUp: function() {
        if(this.coordinates.z!==10){
        this.coordinates.z++;
        }
         this.check();
    },
    
     moveDown: function() {
         if(this.coordinates.z!==0){
        this.coordinates.z--;
        }
        this.check();
    },
};