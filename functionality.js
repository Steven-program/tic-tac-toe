function Player1(name){
    this.name = name;
    this.winCharacter = 'X';
    this.wins = 0;

    this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    this.changeBoard = function(x, y){
        this.board[x][y] = 'X';
    }

    this.checkWin = function(){
        return this.checkHorizontal() || this.checkVertical() || this.checkDiagonal();
    }

    this.checkHorizontal = function(){
        for (let i = 0; i < 3; i ++){
            let win = true;
            for (let s = 0; s < 3; s ++){
                if (this.board[i][s] != this.winCharacter) win = false;
            }
            if(win) return win;
        }
        return false;
    }

    this.checkVertical = function(){
        for (let i = 0; i < 3; i ++){
            let win = true;
            for (let s = 0; s < 3; s ++){
                if (this.board[s][i] != this.winCharacter) win = false;
            }
            if(win) return win;
        }
        return false;
    }

    this.checkDiagonal = function(){
        return (this.board[0][0] == this.winCharacter && this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2]) || 
            (this.board[0][2] == this.winCharacter && this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0]);
    }

    this.win = function(){
        const background = document.querySelector('.board-centered');
        const popup = document.querySelector('.popup');
        background.classList.add('board-centered-blur');
        popup.classList.add('popup-visible');
        const winner = document.querySelector('.insert-text');
        winner.innerText = `${this.name} wins!`
        this.wins += 1;
    }
}

function Player2(name){
    this.name = name;
    this.winCharacter = 'O';
    this.wins = 0;

    this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    this.changeBoard = function(x, y){
        this.board[x][y] = 'O';
    }

    this.checkWin = function(){
        return this.checkHorizontal() || this.checkVertical() || this.checkDiagonal();
    }

    this.checkHorizontal = function(){
        for (let i = 0; i < 3; i ++){
            let win = true;
            for (let s = 0; s < 3; s ++){
                if (this.board[i][s] != this.winCharacter) win = false;
            }
            if(win) return win;
        }
        return false;
    }

    this.checkVertical = function(){
       
        for (let i = 0; i < 3; i ++){
            let win = true;
            for (let s = 0; s < 3; s ++){
                if (this.board[s][i] != this.winCharacter) win = false;
            }
            if(win) return win;
        }
        return false;
    }

    this.checkDiagonal = function(){
        return (this.board[0][0] == this.winCharacter && this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2]) || 
            (this.board[0][2] == this.winCharacter && this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0]);
    }

    this.win = function(){
        const background = document.querySelector('.board-centered');
        const popup = document.querySelector('.popup');
        background.classList.add('board-centered-blur');
        popup.classList.add('popup-visible');
        const winner = document.querySelector('.insert-text');
        winner.innerText = `${this.name} wins!`
        this.wins ++;
    }
}
