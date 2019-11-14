let capture
let tracker
let distance_left = 0
let b = 0
let c = 0
let randomizer = true
let bkr
let type = ['A', 'B', 'C', 'D']
let pic

function preload(){
    aa = loadImage('AA.jpg')
    aa2 = loadImage('AA2.jpg')
    aa3 = loadImage('AA3.jpg')
    aa4 = loadImage('AA4.jpg')
    aac = loadImage('AAC.png')

}





function setup() {

    createCanvas(windowWidth, windowHeight)
    capture = createCapture(VIDEO)
    capture.size(1900,1300, 0, 0)
    capture.hide()

    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt) 

   
}





function draw() {

    if (randomizer == true) {
    bkr = random(type)
    if (bkr == 'A' || 'B' || 'C' || 'D') {
        randomizer = false
    }
}    

    background(0)
    
    let positions = tracker.getCurrentPosition()

    image(aac, 20, 720)

    noStroke()
    fill(255)

    

    if (positions.length > 0) {
        // image(capture, 0, 0, capture.width, capture.height)
        if (bkr == 'A') {
               image(aa, 303, 0, width - 607, height,0, 0)   
        }
        if (bkr == 'B') {
               image(aa2, width/2 - 335.5, 0, width - 1249, height, 0, 0, 0, 0)
        }
        if (bkr == 'C') {
               image(aa3, width/4 - 132.5, 0, width - 640, height, 0, 0, 0, 0)
        }
        if (bkr == 'D') {
               image(aa4, width/4 +75.5, 0, width - 1105, height, 0, 0, 0, 0)
        }
     
        



        // push()
        // fill(random(0, 255), 0, 0)
        // ellipse(positions[27][0], positions[27][1], 20, 20)
        // ellipse(positions[32][0], positions[32][1], 20, 20)
        // pop() 

                push()
                stroke(255)
                strokeWeight(3)
                beginShape(LINES);
                 vertex(positions[30][0], positions[30][1]);
                 vertex(positions[68][0], positions[68][1]);
                 vertex(positions[68][0], positions[68][1]);
                 vertex(positions[29][0], positions[29][1]);
                 vertex(positions[29][0], positions[29][1]);
                 vertex(positions[67][0], positions[67][1]);
                 vertex(positions[67][0], positions[67][1]);
                 vertex(positions[28][0], positions[28][1]);
                 vertex(positions[28][0], positions[28][1]);
                 vertex(positions[70][0], positions[70][1]);
                 vertex(positions[70][0], positions[70][1]);
                 vertex(positions[31][0], positions[31][1]);
                 vertex(positions[31][0], positions[31][1]);
                 vertex(positions[69][0], positions[69][1]);
                 vertex(positions[69][0], positions[69][1]);
                 vertex(positions[30][0], positions[30][1]);

                 vertex(positions[25][0], positions[25][1]);
                 vertex(positions[64][0], positions[64][1]);
                 vertex(positions[64][0], positions[64][1]);
                 vertex(positions[24][0], positions[24][1]);
                 vertex(positions[24][0], positions[24][1]);
                 vertex(positions[63][0], positions[63][1]);
                 vertex(positions[63][0], positions[63][1]);
                 vertex(positions[23][0], positions[23][1]);
                 vertex(positions[23][0], positions[23][1]);
                 vertex(positions[66][0], positions[66][1]);
                 vertex(positions[66][0], positions[66][1]);
                 vertex(positions[26][0], positions[26][1]);
                 vertex(positions[26][0], positions[26][1]);
                 vertex(positions[65][0], positions[65][1]);
                 vertex(positions[65][0], positions[65][1]);
                 vertex(positions[25][0], positions[25][1]);
                 endShape();
                 pop()

                 //top left
                 push()
                 fill(0)
                 beginShape()
                 vertex(positions[33][0], positions[33][1] - 2000);
                 vertex(positions[33][0], positions[33][1]);
                 vertex(positions[25][0], positions[25][1]);
                 vertex(positions[64][0], positions[64][1]);
                 vertex(positions[64][0], positions[64][1]);
                 vertex(positions[24][0], positions[24][1]);
                 vertex(positions[24][0], positions[24][1]);
                 vertex(positions[63][0], positions[63][1]);
                 vertex(positions[63][0], positions[63][1]);
                 vertex(positions[23][0], positions[23][1]);
                 vertex(positions[23][0], positions[23][1]);
                 vertex(positions[23][0] - 2000, positions[23][1] );
                 endShape(CLOSE)
                 pop()

                 //bottom left
                 push()
                 fill(0)
                 beginShape()
                 vertex(positions[33][0], positions[33][1] + 2000);
                 vertex(positions[33][0], positions[33][1]);
                 vertex(positions[25][0], positions[25][1]);
                 vertex(positions[65][0], positions[65][1]);
                 vertex(positions[65][0], positions[65][1]);
                 vertex(positions[26][0], positions[26][1]);
                 vertex(positions[26][0], positions[26][1]);
                 vertex(positions[66][0], positions[66][1]);
                 vertex(positions[66][0], positions[66][1]);
                 vertex(positions[23][0], positions[23][1]);
                 vertex(positions[23][0], positions[23][1]);
                 vertex(positions[23][0] - 2000, positions[23][1]);
                 endShape(CLOSE)
                 pop()

                 //top right
                 push()
                 fill(0)
                 beginShape()
                 vertex(positions[33][0], positions[33][1] - 2000);
                 vertex(positions[33][0], positions[33][1]);
                 vertex(positions[30][0], positions[30][1]);
                 vertex(positions[68][0], positions[68][1]);
                 vertex(positions[68][0], positions[68][1]);
                 vertex(positions[29][0], positions[29][1]);
                 vertex(positions[29][0], positions[29][1]);
                 vertex(positions[67][0], positions[67][1]);
                 vertex(positions[67][0], positions[67][1]);
                 vertex(positions[28][0], positions[28][1]);
                 vertex(positions[28][0], positions[28][1]);
                 vertex(positions[28][0] + 2000, positions[28][1]);
                 endShape(CLOSE)
                 pop()

                 //bottom right
                 push()
                 fill(0)
                 beginShape()
                 vertex(positions[28][0] + 2000, positions[28][1]);
                 vertex(positions[28][0], positions[28][1]);
                 vertex(positions[28][0], positions[28][1]);
                 vertex(positions[70][0], positions[70][1]);
                 vertex(positions[70][0], positions[70][1]);
                 vertex(positions[31][0], positions[31][1]);
                 vertex(positions[31][0], positions[31][1]);
                 vertex(positions[69][0], positions[69][1]);
                 vertex(positions[69][0], positions[69][1]);
                 vertex(positions[30][0], positions[30][1]);
                 vertex(positions[30][0], positions[30][1]);
                 vertex(positions[33][0], positions[33][1]);
                 vertex(positions[33][0], positions[33][1] + 2000);
                 endShape(CLOSE)
                 pop()
                    //ansel
                 push()
                 fill(255)
                 textSize(22)
                 text('A', positions[23][0] - 15, positions[23][1] + 25)
                 text('N', positions[66][0] - 15, positions[66][1] + 25)
                 text('S', positions[26][0] - 15, positions[26][1] + 25)
                 text('E', positions[65][0] - 15, positions[65][1] + 25)
                 text('L', positions[25][0] - 15, positions[25][1] + 25)
                 text('A', positions[30][0] - 15, positions[30][1] + 25)
                 text('D', positions[69][0] - 15, positions[69][1] + 25)
                 text('A', positions[31][0] - 15, positions[31][1] + 25)
                 text('M', positions[70][0] - 15, positions[70][1] + 25)
                 text('S', positions[28][0] - 15, positions[28][1] + 25)
                 pop()

                    //lines
                push()
                stroke(255,4,180)
                strokeWeight(5)
                beginShape(LINES)
                vertex(positions[25][0], positions[25][1]);
                vertex(positions[25][0] - 10, positions[25][1] + 10);
                vertex(positions[64][0], positions[64][1]);
                vertex(positions[64][0] - 10, positions[64][1] + 10);
                vertex(positions[24][0], positions[24][1]);
                vertex(positions[24][0] - 10, positions[24][1] + 10);
                vertex(positions[63][0], positions[63][1]);
                vertex(positions[63][0] - 10, positions[63][1] + 10);
                vertex(positions[23][0], positions[23][1]);
                vertex(positions[23][0] - 10, positions[23][1] + 10);
                pop()

                 // image(aa4, width/4 +75.5, 0, width - 1105, height, 0, 0, 0, 0)


                let l_facex = positions[14][0]
                let l_facey = positions[14][1]
                let l_eyex = positions[32][0]
                let l_eyey = positions[32][1]
                let r_eyex = positions[27][0]
                let r_eyey = positions[27][1]
                let r_facex = positions[0][0]
                let r_facey = positions[0][1]
                let midptax = positions[33][0]
                let midptay = positions[33][1]
                let midptbx = positions[41][0]
                let midptby = positions[41][0]
                let fupx = positions
               

                let distance_left = dist(l_facex, l_facey, l_eyex, l_eyey)
                let distance_right = dist(r_facex, r_facey, r_eyex, r_eyey)
                let distance_z = dist(midptax, midptay, midptbx, midptby)


                b = b + distance_left/10 - distance_right/10
                // 1920 X 926
            
                 print(windowWidth, windowHeight)

                             let i = 0
                // while (i < positions.length) {

                //     ellipse(positions[i][0], positions[i][1], 4, 4)
                //     text(i, positions[i][0], positions[i][1])

                //     i += 1

                //      line(positions[30][0], positions[30][1], positions[68][0], positions[68][1])
                // }      
        }

            
        push()
                fill(255)
                textSize(13)
                text('NOW VIEWING: ' + pic, 0 + 15, 25)
                if (bkr == 'A') {
                    pic = '"THE TETONS AND THE SNAKE RIVER" (1/4)'
                }
                if (bkr == 'B') {
                    pic = '"FORMATIONS, A FEW OF  NATURAL FORMATIONS AT CARLSBAD CAVERNS" (2/4)'
                }
                if (bkr == 'C') {
                    pic = '"LONGS PEAK, ROCKY MOUNTAIN NATOINAL PARK" (3/4)'
                }
                if (bkr == 'D') {
                    pic = '"MOMOLITH, THE FACE OF HALF DOME" (4/4)'
                }
                pop()
    }

   

