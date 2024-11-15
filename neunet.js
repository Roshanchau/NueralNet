const dot = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);

const myDense=(dense)=>{
    const units=dense.W[0].length;
    const a_out=new Array(units).fill(0);
    console.log(a_out)
    for(let j=0; j<units; j++){
        const w=dense.W.map(d=> d[j]);
        console.log(w)
        const z=dot(w, dense.a_in)+dense.b[j];
        console.log(z)
        a_out[j]=1 / (1 + Math.exp(z));
        console.log("this is aout",a_out[j])
    }
    return a_out;
}

const res=myDense({
    a_in:[-0.47 , 0.42],
    W:[[-8.93,  0.29, 12.9 ], [-0.1,  -7.32, 10.81]],
    b:[-9.82, -9.28,  0.96]
});

console.log(res)