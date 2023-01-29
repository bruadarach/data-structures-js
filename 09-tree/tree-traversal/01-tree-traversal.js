/* BFS : Breadth-First Search */
/* queue: FIFO (First In First Out) */

//              10
//        6           15
//     3     8            20

queue: [10]; //10 // 6, 15 // 15, 3, 8 // 3, 8, 20 // 8, 20 // 20
visited: [10, 6, 15, 15, 3, 8, 20]; // 10 // 6 (FIFO) // 15 (FIFO) // 3 (FIFO) // 8 (FIFO) // 20 (FIFO)
