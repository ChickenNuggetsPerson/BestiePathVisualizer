let readData = [];

let openFile = function(event) {
    let input = event.target;
  
    let reader = new FileReader();
    reader.onload = function() {
        let text = reader.result;
        let node = document.getElementById('output');
        node.textContent = text;
        let data = text.split('\n')
        let i;
        for ( i = 0; i < data.length; i++ ) {
            let separatedData = data[i].split(',')
            let separateData = {
                strafeFBL: separatedData[0],
                strafeFBR: separatedData[1],
                strafeLRL: separatedData[2],
                strafeLRR: separatedData[3],
                RunLauncher: separatedData[4],
                runLauncherFeeder: separatedData[5],
                PickerUper: separatedData[6],
                deltaTime: separatedData[7]
            }
            console.log(separateData)

            readData.push(separateData)

        }

        document.getElementById("loaded").innerText = "Loaded File"
        
    };
    reader.readAsText(input.files[0]);

};

let paused = false

function play() {

}
