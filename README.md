<!DOCTYPE html>
<html>
    <head>
        <title>Tic-Tac-Toe Game!</title>
        <meta name = "viewport" content="width=device-width, initial-scale = 1.0">
        <link rel = "stylesheet" href = "render.css">
        <script src = "functionality.js"></script>
    </head>

    <body>
        <div class = "board-centered">
            <h1 class = "heading">Tic Tac Toe</h1>
            <table class = "board">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
           
        </div>

        <div class="popup">
            <h1 class = "insert-text"></h1>
            <button class = "start" onclick = "restart();">Replay!</button>
        </div>
        
        <script>
            start();
            function restart(){
                const background = document.querySelector('.board-centered');
                const popup = document.querySelector('.popup');
                background.classList.remove('board-centered-blur');
                popup.classList.remove('popup-visible');
                
                //clears board
                const table = document.querySelector(".board");
                for(let i = 0; i < 3; i ++){
                    table.deleteRow(0);
                }
                for(let i = 0; i < 3; i ++){
                    const row = table.insertRow(0);
                    const cell1 = row.insertCell(0);
                    const cell2 = row.insertCell(1);
                    const cell3 = row.insertCell(2);
                }
        
                start();
            }
            
            function start(){
                let player1 = new Player1('Steven');
                let player2 = new Player2('Lili');

                let turn = 0;
                let x = 0;
                let y = 0;
               
                const boardElement = document.querySelector('.board');
                boardElement.addEventListener('click', function(e){
                    x = e.target.parentElement.rowIndex;
                    y = e.target.cellIndex;
                    if(turn % 2 == 0 ){
                        if(!e.target.innerText){
                            player1.changeBoard(x, y);
                            e.target.innerText = 'X';
                            turn ++;
                        }
                    } 
                    
                    else{
                        if(!e.target.innerText){
                            player2.changeBoard(x, y);
                            e.target.innerText = 'O';
                            turn ++;
                        }
                    }
                    

                    if(turn >= 5) {
                        if(player1.checkWin()) {
                            player1.win();
                            console.log(player1.board);
                            player1.board = [
                                ['', '', ''],
                                ['', '', ''],
                                ['', '', ''],
                            ];
                            player2.board = [
                                ['', '', ''],
                                ['', '', ''],
                                ['', '', ''],
                            ];
                            turn = 0;
                        }
                        else if(player2.checkWin()){
                            player2.win();
                            console.log(player2.board);
                            player1.board = [
                                ['', '', ''],
                                ['', '', ''],
                                ['', '', ''],
                            ];
                            player2.board = [
                                ['', '', ''],
                                ['', '', ''],
                                ['', '', ''],
                            ];
                            turn = 0;
                        }
                    }

                    if(turn == 9){
                        player1.board = [
                            ['', '', ''],
                            ['', '', ''],
                            ['', '', ''],
                        ];
                        player2.board = [
                                ['', '', ''],
                                ['', '', ''],
                                ['', '', ''],
                        ];
                        tie();
                        turn = 0;
                    }
                });            
            
            }

            function tie(){
                const background = document.querySelector('.board-centered');
                const popup = document.querySelector('.popup');
                background.classList.add('board-centered-blur');
                popup.classList.add('popup-visible');
                const winner = document.querySelector('.insert-text');
                winner.innerText = `Tie...`
            }
            
    </script>
        
    </body>
</html>
