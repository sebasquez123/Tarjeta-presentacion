    // en este canva solo hago un efecto de rebote de una elipse para simular 
                                //una sombra dinamica
                                const canvas = document.getElementById('canva');
                                const ctx = canvas.getContext('2d');
                                let x = 35;
                                let y = 30;
                                let direction = 'down'; // Start with the ellipse moving down
                                let size = 13;
                                let speed = 0.13; // Adjust the speed of the bounce

                                function animate() {
                                  ctx.clearRect(0, 0, canvas.width, canvas.height);

                                  if (direction === 'down') {
                                    y += speed;
                                    size -= 0.1; // Decrease size when moving down
                                    if (y + size >= canvas.height) { // Adjust the bounce point
                                      direction = 'up';
                                    }
                                  } 
                                  else {
                                    y -= speed;
                                    size += 0.1; // Increase size when moving up
                                    if (y <= 7) {
                                      direction = 'down';
                                    }
                                  }

                                  ctx.beginPath();
                                  ctx.shadowColor = 'rgba(0, 0, 0, 0.2)'; // Set shadow color
                                  ctx.ellipse(x, y, size, 5, 0, 0, Math.PI * 2);
                                  ctx.fillStyle = 'grey';
                                  ctx.fill();
                                  ctx.closePath();

                                  requestAnimationFrame(animate);
                                }

                                animate();