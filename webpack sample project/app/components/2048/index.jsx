import React from 'react';
import './style.scss';
import Tile from './Tile.jsx';

let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;
let grid = null;
// let distances = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
export default class Game2048 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      gameOver: false
    };
  }

  componentWillMount() {
    this.initialGrid();
  }

  initialGrid = () => {
    grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    // grid = [[0, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [44, 55, 60, 90]];
    this.getRandomNum();
    this.getRandomNum();
    this.setState({
      grid: grid
    });
  }
  getRandomNum = () => {
    // ?优化
    let i = Math.floor(Math.random() * 4);
    let j = Math.floor(Math.random() * 4);
    if (grid[i][j] !== 0) {
      this.getRandomNum();
    } else {
      let newTileText = Math.random() < 0.9 ? 2 : 2;
      grid[i][j] = newTileText;
    }
  }
  getDirection = (startX, startY, endX, endY) => {
    let moveX = endX - startX;
    let moveY = endY - startY;
    let direction = -1;
    if (Math.abs(moveX) < 2 && Math.abs(moveY) < 2) {
      return direction;
    }
    let angle = Math.atan2(moveY, moveX) * 180 / Math.PI;
    if (angle >= -135 && angle <= -45) {
      direction = 0;
    }  else if (angle > -45 && angle < 45) {
      direction = 1;
    } else if (angle >= 45 && angle <= 135) {
      direction = 2;
    } else {
      direction = 3;
    }
    return direction;
  }
  touchStartHandler = event => {
    startX = event.targetTouches[0].pageX;
    startY = event.targetTouches[0].pageY;
  }
  touchEndHandler = event => {
    endX = event.changedTouches[0].pageX;
    endY = event.changedTouches[0].pageY;
    let direction = this.getDirection(startX, startY, endX, endY);
    this.caculateGird(direction);
    this.getRandomNum();

    // let gameOver = true;
    // for (let i = 0 ;i < 4; i++) {
    //   for (let j = 0;j < 4;j++) {
    //     if (grid[i][j] === 0) {
    //       gameOver = false;
    //       this.getRandomNum();
    //     } else if (grid[i][j] === grid[i][j + 1]
    //       || grid[i][j] === grid[i][j - 1]
    //       || grid[i - 1][j] === grid[i][j]
    //       || grid[i + 1][j] === grid[i][j]) {
    //       gameOver = false;
    //     }
    //     break;
    //   }
    // }
    // if (gameOver) {
    //   this.setState({
    //     gameOver: true
    //   });
    // }
  }
  caculateGird = (direction) => {
    // up
    if (direction === 0) {
      for (let i = 0 ;i < 4; i++) {
        for (let j = 0;j < 4;j++) {
          for (let k = j + 1 ;k < 4; k++) {
            if (grid[k][i] === 0) {
              continue;
            }
            if (grid[j][i] === 0) {
              grid[j][i] = grid[k][i];
              grid[k][i] = 0;
            } else if (grid[j][i]  === grid[k][i]) {
              grid[j][i] = grid[k][i] * 2;
              grid[k][i] = 0;
              break;
            }
          }
        }
      }
    } else if (direction === 2) { // down
      for (let i = 0 ;i < 4; i++) {
        for (let j = 3;j >= 1;j--) {
          for (let k = j - 1 ;k >= 0; k--) {
            if (grid[k][i] === 0) {
              continue;
            }
            if (grid[j][i] === 0) {
              // // 获得当前ki的tile并将它移动到tileji
              // let distance = j - k;
              // distances[k][i] =  'Y-' + distance;
              grid[j][i] = grid[k][i];
              grid[k][i] = 0;
            } else if (grid[j][i]  === grid[k][i]) {
              grid[j][i] = grid[k][i] * 2;
              grid[k][i] = 0;
              break;
            }
          }
        }
      }
    } else if (direction === 1) { // right
      for (let i = 0 ;i < 4; i++) {
        for (let j = 3;j >= 1;j--) {
          for (let k = j - 1 ;k >= 0; k--) {
            if (grid[i][k] === 0) {
              continue;
            }
            if (grid[i][j] === 0) {
              grid[i][j]  = grid[i][k];
              grid[i][k] = 0;
            } else if (grid[i][j]   === grid[i][k]) {
              grid[i][j]  = grid[i][k] * 2;
              grid[i][k] = 0;
              break;
            }
          }
        }
      }
    } else { // left
      for (let i = 0 ;i < 4; i++) {
        for (let j = 0;j < 4;j++) {
          for (let k = j + 1 ;k < 4; k++) {
            if (grid[i][k] === 0) {
              continue;
            }
            if (grid[i][j] === 0) {
              grid[i][j]  = grid[i][k];
              grid[i][k] = 0;
            } else if (grid[i][j]   === grid[i][k]) {
              grid[i][j]  = grid[i][k] * 2;
              grid[i][k] = 0;
              break;
            }
          }
        }
      }
    }
    this.setState({
      grid: grid
    });
  }
  render() {
    return (
      <div className = "grid"
        onTouchStart = {!this.state.gameOver ? this.touchStartHandler : null}
        onTouchEnd = {!this.state.gameOver ? this.touchEndHandler : null}>
        {this.state.grid.map((row, rowIndex) =>
          <div className = "row" key={rowIndex}>
            {
              row.map((cell, columnIndex) =>(
                <div  className = "tr-container" key = {rowIndex * 4 + columnIndex + 1}>
                  {(this.state.grid)[rowIndex][columnIndex] !== 0 &&
                  <Tile num = {cell}/>}
                  <div className = "cell"></div>
                </div>
              ))}
          </div>
        )}
        {this.state.gameOver &&
          <div className ="wrapper">
            <div className ="game-over">Game Over</div>
          </div>
        }
      </div>
    );
  }
}

// todolists:
// gameover处理
// score
// 优化getRandomNumer and four direction
// 动画

// bug：
// gameover后仍变化
