export const states = {
    free: 0,
    block: 1,
    visited: 2,
    path: 3,
    startNode: 4,
    targetNode: 5
}

export const rv = [0, 1, 0, -1];
export const cv = [-1, 0, 1, 0];
export const rvDiag = [0 ,  1, 1, 1, 0, -1, -1 , -1] ;
export const cvDiag = [-1, -1, 0, 1, 1,  1,  0 , -1];
export const defaultSpeed = 200;
export const defaultStartNode = [10, 3];
export const defaultTargetNode = [10, 17];
export const defaultBoardSize = 35;


