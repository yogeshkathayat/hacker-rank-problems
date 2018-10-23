{
    var count = 0;
    solveEnigma(3, 1, 3);



    function solveEnigma(n, a, b) {
        let arr = [];
        for (let i = a; i <= b; i++) {
            arr.push(i);
        }

        perm(arr, "", n);
        console.log(count);



        // for(let i=a;i<=b;i++){
        //     let temp=i;
        //     for(let j=a;j<=b;j++){
        //         for(let k=1;k<n;k++){
        //             console.log(temp,j);
        //         }

        //     }
        // }
    }


    function perm(a, result, l) {
        if (result.length == l) {
            //check for the co-prime condition
            let firstElem = result[0];
            let flag = true;
            for (let m = 1; m < l; m++) {
                if (firstElem != 1 && (result[m]) % firstElem == 0) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                count++;
            }
            return;
        }
        for (let i = 0; i < a.length; i++) {
            let nr = result + a[i];
            perm(a, nr, l);
        }
    }

}