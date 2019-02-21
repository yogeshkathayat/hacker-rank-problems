// You are choreographing a circus show with various animals. 
// For one act, you are given two kangaroos on a number line ready to jump in the positive direction 
// (i.e, toward positive infinity).
// The first kangaroo starts at location x1  and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of  v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time 
// as part of the show. If it is possible, return YES, otherwise return NO.



function kangaroo(x1, v1, x2, v2) {
    x1 + v1 + v1 + v1
    
    for (let i = 0; i < 10000; i++){
        if ((x1 + (i - 1) * v1) == (x2 + (i - 1) * v2) ) return 'YES'
    }
    return 'NO'

}


kangaroo(0,3,4,2)