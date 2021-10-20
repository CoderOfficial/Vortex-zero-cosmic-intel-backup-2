class Enemy1 {
    constructor(x, y, width, height, EnemyPos, EnemyAnimation) {
     
      this.animation = Enemy1_image;
      this.speed = 5;
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
  
      this.EnemyPosition = EnemyPos;
  
      World.add(world, this.body);
    }
    animate() {
      this.speed += 0.05;
    }
  
    remove(index) {
      this.animation = Enemy1_image;
      this.speed = 0.00;
      this.width = 300;
      this.height = 300;
      setTimeout(() => {
        Matter.World.remove(world, Enemy[index].body);
        Enemy.splice(index, 1);
      }, 2000);
    }
  
    display() {
      var pos = this.body.position;
      var index = floor(this.speed % this.animation.length);
  
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.animation[index], 0, this.EnemyPosition, this.width, this.height);
      noTint();
      pop();
    }
  }
  
  