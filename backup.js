let capture
let tracker
let distance_left = 0
let b = 0
let c = 0
let stargate

function preload(){
bc = loadImage('spaceline.jpg')
body = loadImage('body.png')
face = loadImage('face1.png')
helmet = loadImage('prmtr.png')

}





function setup() {

    createCanvas(windowWidth, windowHeight)
    capture = createCapture(VIDEO)
    capture.size(200, 300, 600,300)
    capture.hide()

    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt) 

    stargate = createVideo('stargate.mp4', vidLoad);
    stargate.size(width, height)


}


function vidLoad() {

  stargate.loop()
  stargate.volume(0)
}
function draw() {    

    background(0)
    // image(capture, 0, 0, capture.width, capture.height)

    let positions = tracker.getCurrentPosition()

    noStroke()
    fill(255)

    

    if (positions.length > 0) {

        // push()
        // fill(random(0, 255), 0, 0)
        // ellipse(positions[27][0], positions[27][1], 20, 20)
        // ellipse(positions[32][0], positions[32][1], 20, 20)
        // pop()
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


                b = b + distance_left - distance_right


              
                 image(bc, 0, 0, width, height, 0, b, 300, 300)
                 image(body, 600, 300)
                 image(face, positions[19][0] + 500, positions[19][1] + 170 )
                 image(helmet, 600, 300)
            
                 print(b)

                 if (b > 39455) {
                    b = 0
                 }

                 if (b < 0) {
                    b = 39455
                 }

                             let i = 0
                while (i < positions.length) {

                    ellipse(positions[i][0], positions[i][1], 4, 4)
                    text(i, positions[i][0], positions[i][1])

                    i += 1

                    
                }

               


        }
        
    }
